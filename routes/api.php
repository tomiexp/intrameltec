<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CreateServerController;
use App\Http\Controllers\Api\Sap\OpportunitiesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/opportunities', [OpportunitiesController::class, 'index']);
    Route::post('/opportunities', [OpportunitiesController::class, 'create']);
    Route::post('/winOpportunity', [OpportunitiesController::class, 'win']);
    Route::post('/loseOpportunity', [OpportunitiesController::class, 'lose']);
});

Route::post('/createServer', CreateServerController::class);
