<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class DirectorsController extends Controller
{
    public function __invoke()
    {
        if(!Gate::allows('kpisDirectorAccess')) {
            abort(403);
        }
        return Inertia::render('Directors/Index');
    }
}
