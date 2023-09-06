<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

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
