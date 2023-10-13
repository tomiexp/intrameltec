<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Serverpart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartsController extends Controller
{
    public function index()
    {
        $parts = Serverpart::paginate(10);
        return Inertia::render('Admin/Parts/Index', [
            'parts' => $parts,
            'title' => 'Partes para cotizaciones'
        ]);
    }
}
