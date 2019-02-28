<?php
//use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */

Route::get('/{uri?}', function () {
    return view('welcome');
})->where('uri', '(.*)');

/*Route::get('/img{extension}',function(Request $request){
	$width = $request->w;
	$name = $request->name;
	echo $width."========".$name;exit;
})->where('extension', '(?:w=?&name=:)?');*/