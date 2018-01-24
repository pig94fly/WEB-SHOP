<?php

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

Route::get('/', function () {
    return 'hello';
});

Route::get('verkehr/{dir}','VerkehrFileController@verk_dir');
Route::get('ajax/get','Ajax\GetController@index');
Route::get('getcsrf',function ()
{
  session_start();
  if (@!isset($_SESSION['user'])) {
    echo "set session!";
    $_SESSION['user'] = 'user';# code...
  }
  echo $_SESSION['user'];
});
