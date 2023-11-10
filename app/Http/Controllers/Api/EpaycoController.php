<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

define ('URL', env('APIFY_URL'));

class EpaycoController extends Controller
{
    public function index()
    {
        try {
            $responseWithJWTEpayco = Http::withBasicAuth(env('EMAIL_EPAYCO'), env('PASSWORD_EPAYCO'))->post(URL. '/login/mail', [
                'Content-Type' => 'application/json',
            ]);

            $jsonToken = json_decode($responseWithJWTEpayco->body(), true);

            if(!$jsonToken || isset($jsonToken['error'])) {
                throw new Exception('Error al obtener el Token de acceso', 500);
            }

            return Inertia::render('Payments/Index', [
                'token' => $jsonToken['token']
            ]);
        } catch (Exception $e) {
            return Inertia::render('Payments/Index', [
                'token' => '',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function getTransactions(Request $request) {

        $token = $request->input('token');

        try {
            $transacctionsEpayco =  Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer '. $token,
            ])
            ->get(URL. '/transaction', [
                'filter' => [
                    'transactionInitialDate' => '2023-01-01 00:00:00',
                    'transactionEndDate' => '2023-12-31 23:59:59',
                ],
                'pagination' => [
                    'page' => 1,
                    'limit' => 50,
                ]
            ]);

            dd(json_decode($transacctionsEpayco->body(), true));
        } catch (Exception $e) {
            
        }
    }
}