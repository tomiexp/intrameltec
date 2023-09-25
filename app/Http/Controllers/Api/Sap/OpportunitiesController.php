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

    public function index(Request $request)
    {
        $scriptFile = base_path(). '/sap/functions/opportunities/Get/app.js';
        $command = "node $scriptFile";
        $result = Process::run($command)->throw();
        $data = json_decode($result->output());

        return response()->json($data);
    }

    public function testPost(Request $request)
    {
        $basePath = base_path();
        $dataSend = json_encode($request->all());
        $stringData = addslashes($dataSend);
        $scriptFile = "$basePath/sap/functions/opportunities/Post/postOpportunity.js '$dataSend'";
        $command = "node $scriptFile";
        $result = Process::run($command)->throw();
        return $result->output();
    }

    private function getCommand(Request $request, String $script)
    {

    }
}
