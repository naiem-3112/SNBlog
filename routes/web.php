<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

// For any url
Route::any('{slug}', function(){
    return view('welcome');
});

// Route::get('/', 'TestController@test');
