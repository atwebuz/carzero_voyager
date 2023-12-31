<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/product/{id}', [HomeController::class, 'show'])->name('home.show');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
