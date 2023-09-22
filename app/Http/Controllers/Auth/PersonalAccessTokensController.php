<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonalAccessTokensController extends Controller
{
    public function create (Request $request) {
        $user = $request->user();
        $tokenName = 'Token';

        if(!$user) abort(403, 'Usuario no Autenticado');

        $token = $user->createToken($tokenName);

        return response()->json(['token' => $token]);
    }

    public function index (Request $request) {
        $user = $request->user();

        $tokensUser = $user->tokens;

        return Inertia::render('Profile/Tokens', [
            'tokens' => $tokensUser,
        ]);
    }
}
