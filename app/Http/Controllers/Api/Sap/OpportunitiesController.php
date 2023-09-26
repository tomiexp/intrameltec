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

    private function executeScript(String $script, String $type, ?String $params = '')
    {
        $scriptPath = "$this->nodeOpportunityPath$script '$params'";
        $command = "$type $scriptPath";
        $result = Process::run($command)->throw();
        return response()->json(json_decode($result->output()));
    }
}