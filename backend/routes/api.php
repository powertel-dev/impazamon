<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FaultsController;
use App\Http\Controllers\DropdownController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login',[AuthController::class,'login']);
Route::post('signup',[AuthController::class,'signup']);

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::get('user-profile',[AuthController::class,'userProfile']);
    Route::post('create',[FaultsController::class,'createfault']);
    Route::get('getfaults',[FaultsController::class,'getfaults']);
    Route::get('fault/{id}',[FaultsController::class,'getfault']);
    Route::put('fault/{id}',[FaultsController::class,'update']);

    
    Route::get('city',[DropdownController::class,'getCityList']);
    Route::post('suburb',[DropdownController::class,'getSuburbList']);
    Route::post('pop',[DropdownController::class,'getPopList']);

    Route::get('customer',[DropdownController::class,'getCustomer']);
    Route::post('link',[DropdownController::class,'getLink']);

    //Route::get('ccity',[DropdownController::class,'getCity']);
    //Route::post('ssuburb',[DropdownController::class,'getSuburb']);
    //Route::post('spop',[DropdownController::class,'getPop']);



});
