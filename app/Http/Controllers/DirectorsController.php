<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DirectorsController extends Controller
{
    public function __invoke()
    {
        $this->authorize('viewAny', User::class);
        return Inertia::render('Directors/Index');
    }
}
