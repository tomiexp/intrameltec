<?php

namespace App\Http\Controllers\Api\Sap;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Process;

class OpportunitiesController extends Controller
{

    private $nodeOpportunityPath;

    public function __construct()
    {
        $this->nodeOpportunityPath = base_path(). '/sap/functions/opportunities/';
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
        return $this->executeScript('Post/winOpportunity.js', 'node', $opportunity);
    }

    public function lose(Request $request)
    {
        $opportunity = json_encode($request->all());
        return $this->executeScript('Post/loseOpportunity.js', 'node', $opportunity);   
    }

    private function executeScript(String $script, String $type, ?String $params = '')
    {
        $scriptPath = "$this->nodeOpportunityPath$script '$params'";
        $command = "$type $scriptPath";
        $result = Process::run($command)->throw();
        $jsonData = json_decode($result->output(), true);
        $code = $jsonData['code'];
        return response()->json($jsonData, $code);
    }
}