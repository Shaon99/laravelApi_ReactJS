<?php
namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class authController extends Controller
{
    public function login(Request $request){

        try{
            if(Auth::attempt($request->only('email','password'))){
                $user=Auth::user();
                $token=$user->createToken('app')->accessToken;
                return response([
                    'message'=>"login success",
                    'token'=>$token,
                    'user'=>$user,
                ],200);
            }
        }catch(Exception $e){
            return response([
                'message'=>$e->getMessage()
            ],400);
        }
        
            return response([
                'message'=>"Invalid email or password"
            ],401);
        
    }
//Register
    public function register(Request $request){
        try{
            $user= User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
    
            ]);
            $token=$user->createToken('app')->accessToken;
            return response([
                'message'=>"Register success",
                'token'=>$token,
                'user'=>$user,
            ],200);
        }
        catch(Exception $exception){
            return response([
                'message'=>$exception->getMessage()
            ],401);
        }
    }
    
      
}
