<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\controllers\homeController;
use App\Http\controllers\authController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Login route
Route::post('/login',[authController::class,'login']);
Route::post('/register',[authController::class,'register']);





Route::get('/home',[homeController::class,'index']);

//category
Route::post('/insert',[homeController::class,'store']);
Route::get('/showcategory',[homeController::class,'showCategory']);
Route::delete('/deletecategory/{id}',[homeController::class,'deleteCategory']);
Route::get('/category/{id}',[homeController::class,'getCategory']);
Route::post('/updatecategory/{id}',[homeController::class,'updateCategory']);


//brand
Route::post('/brandinsert',[homeController::class,'storebrand']);
Route::get('/showbrand',[homeController::class,'showBrand']);
Route::get('/brand/{id}',[homeController::class,'getBrand']);
Route::delete('/deletebrand/{id}',[homeController::class,'deleteBrand']);
Route::post('/updatebrand/{id}',[homeController::class,'updateBrand']);

//product
Route::post('/productadd',[homeController::class,'Product']);
Route::get('/productshow',[homeController::class,'showProduct']);
Route::delete('/deleteproduct/{id}',[homeController::class,'deleteProduct']);







