<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;

class LoginController extends BaseController
{
    
	    public function login(Request $request){

	        $request->validate([
	            'email' => 'required|string|email',
	            'password' => 'required|string',
	            'remember_me' => 'boolean'
	        ]);
	        $credentials = request(['email', 'password']);
	        if(!Auth::attempt($credentials)){
	        	$error = 'Unauthorized';
	        	return $this->sendError($error,[],401);
	       
	        }

	        	
	        $user = $request->user();
	        $tokenResult = $user->createToken('Personal Access Token');
	        $token = $tokenResult->token;
	        if ($request->remember_me)
	            $token->expires_at = Carbon::now()->addWeeks(1);
	        $token->save();
	        $data = [
	            'access_token' => $tokenResult->accessToken,
	            'token_type' => 'Bearer',
	            'expires_at' => Carbon::parse(
	                $tokenResult->token->expires_at
	            )->toDateTimeString()
	        ];
	        return $this->sendResponse($data,'Authentic');
    	}


		public function getinfo(){
			$user = Auth::user();
			if(!empty($user)){
				return $this->sendResponse($user,'auth success');
			}
		}

		public function logout(Request $request){
			$request->user()->token()->revoke();
			return $this->sendResponse([],'Successfully logged out');
    	}

}
