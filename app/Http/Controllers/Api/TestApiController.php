<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Process;

// use Symfony\Component\Process\Process;
// use Symfony\Component\Process\Exception\ProcessFailedException;

class TestApiController extends Controller
{
    public function index(Request $request)
    {
        $scriptFile = base_path(). '\app.js';
        $command = "node $scriptFile";
        $result = Process::run($command)->throw();

        echo $result->output();
    }
}

// $process = new Process([$command]);
//         // dd($process);
//         $process->run();

//         // executes after the command finishes
//         if (!$process->isSuccessful()) {
//             throw new ProcessFailedException($process);
//         }

//         echo $process->getOutput();