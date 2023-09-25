<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CreateServerController;
use App\Http\Controllers\Api\TestApiController;
use Illuminate\Support\Facades\Http;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->group(function () {
    try {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });

        Route::get('/testApi', [TestApiController::class, 'index']);
    } catch (\Throwable $th) {
        return 'error';
    }
});

Route::post('/createServer', CreateServerController::class);
