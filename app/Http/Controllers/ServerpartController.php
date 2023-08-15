<?php

namespace App\Http\Controllers;

use App\Models\Serverpart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServerpartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $serverparts = Serverpart::all();
        return Inertia::render('Parts/Index', ['parts' => $serverparts]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(([
            'product' => 'require|max:50',
            'description' => 'require',
            'usdPrice' => 'require|max:10'
        ]));

        $part = new Serverpart($request->input());
        $part->save();
        return redirect('parts');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $part = Serverpart::find($id);
        $part->fill($request->input())->saveOrFail();
        return redirect('parts');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $part = Serverpart::find($id);
        $part->delete();
        return redirect('parts');
    }
}
