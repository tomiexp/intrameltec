<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreateServerController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $client = json_decode($request->json('client'), false);
        $serverData = $request->json('serverParts');
        $discount = $request->json('discount');
        $total = $request->json('total');
        $yearTotal = $request->json('yearTotal');
        dd($client->nameClient);
    }
}
