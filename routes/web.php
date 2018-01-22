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
// Route::get('dir',function ()
// {
//   $file = file('api.php');
//   foreach ($file as $value) {
//     $files[] = htmlspecialchars($value);
//   }
//   return $files;
// });
