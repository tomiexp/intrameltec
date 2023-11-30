<?php

/**
 * API de integracion SAP ByDesing con Plataforma BPM Flokzu para la creacion de oportunidades 
 * Codigo de uso privado, utilizacion solo autorizada por Meltec Comunicaciones S.A
 * 
 * @author Nicolas Cuadros <jcuadros@meltec.com.co>
 * @version 1.0.0
 */

namespace App\Http\Controllers\Api\Sap;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\Process;

class OpportunitiesController extends Controller
{

    private $nodeOpportunityPath;

    /**
     * Function Constructor
     * --------------------------------
     * Solo se encuentra la ubicacion de la funcion JS para la oportunidad
     */

    public function __construct()
    {
        $this->nodeOpportunityPath = base_path() . '/sap/functions/opportunities/';
    }

    /**
     * Obtener todas las oportunidades desde SAP
     * @return JSONResponse
     */

    public function index()
    {
        return $this->executeScript('/Get/app.js', 'node');
    }

    /**
     * Creacion de una nueva Oportunidad desde Flokzu a SAP
     * @param Request $request
     * @return JsonResponse
     */

    public function create(Request $request)
    {
        $dataSend = json_encode($request->all());
        return ($this->executeScript('Post/postOpportunity.js', 'node', $dataSend));
    }

    /**
     * Actualizacion de la oportunidad a Ganada
     * @param Request $request
     * @return JsonResponse
     */

    public function win(Request $request)
    {
        $opportunity = json_encode($request->all());
        $dataRecibe =  $this->executeScript('Post/winOpportunity.js', 'node', $opportunity);
        if ($dataRecibe->getStatusCode() === 400) {
            return response()->json(['ErrorCodeMessage' => json_encode($dataRecibe->getData()->message)], 400);
        }

        if(!$dataRecibe->getData()->result->OpportunityWin) {
            return response()->json(['ErrorFalseOpportunity' => 'Error al Ganar la oportunidad'], 400);
        }
        $secondProccess = Process::run('node '.base_path()."/sap/functions/opportunities/Patch/updateSalesPhaseCodeOpp.js '$opportunity'")->throw();

        $result = json_decode($secondProccess->output(), true);
        return response()->json($result);
    }

    /**
     * Actualizacion de la oportunidad a Perdida
     * @param Request $request
     * @return JsonResponse
     */

    public function lose(Request $request)
    {
        $opportunity = json_encode($request->all());
        $dataRecibe = $this->executeScript('Post/loseOpportunity.js', 'node', $opportunity);

        if ($dataRecibe->getStatusCode() === 400) {
            return response()->json(['ErrorCodeMessage' => json_encode($dataRecibe->getData()->message)], 400);
        }

        if(!$dataRecibe->getData()->result->OpportunityLose) {
            return response()->json(['ErrorFalseOpportunity' => 'Error al Ganar la oportunidad'], 400);
        }
        $secondProccess = Process::run('node '.base_path()."/sap/functions/opportunities/Patch/updateSalesPhaseCodeOpp.js '$opportunity'")->throw();

        $result = json_decode($secondProccess->output(), true);
        $code = $result['code'];
        return response()->json($result, $code);
    }

    /**
     * Actualizacion de las fases de la Oportunidad
     * @param Request $request
     * @return JsonResponse
     */

    public function updatePhase (Request $request) 
    {
        $opportunity = json_encode($request->all());
        $secondProccess = Process::run('node '.base_path()."/sap/functions/opportunities/Patch/updateSalesPhaseCodeOpp.js '$opportunity'")->throw();

        $result = json_decode($secondProccess->output(), true);
        return response()->json($result);
    }

    private function executeScript(String $script, String $type, ?String $params = '')
    {
        try {
            $scriptPath = "$this->nodeOpportunityPath$script '$params'";
            $command = "$type $scriptPath";
            $result = Process::run($command)->throw();
            $jsonData = json_decode($result->output(), true);
            $code = $jsonData['code'];
            return response()->json($jsonData, $code );
        } catch (Exception $e) {
            return response()->json(['ScriptMessage' => $e->getMessage()], 500);
        }
    }
}
