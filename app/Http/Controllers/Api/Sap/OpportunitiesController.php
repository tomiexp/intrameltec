<?php

namespace App\Http\Controllers\Api\Sap;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\Process;

class OpportunitiesController extends Controller
{

    private $nodeOpportunityPath;

    public function __construct()
    {
        $this->nodeOpportunityPath = base_path() . '/sap/functions/opportunities/';
    }

    public function index()
    {
        return $this->executeScript('/Get/app.js', 'node');
    }

    public function create(Request $request)
    {
        $dataSend = json_encode($request->all());
        return $this->executeScript('Post/postOpportunity.js', 'node', $dataSend);
    }

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
            return response()->json($jsonData, $code);
        } catch (Exception $e) {
            return response()->json(['ScriptMessage' => $e->getMessage()], 500);
        }
    }
}
