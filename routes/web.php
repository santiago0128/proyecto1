<?php

use App\Http\Controllers\Controllerusuarios;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Controllerprocesos;
use App\Http\Controllers\Controllergestion;
use App\Http\Controllers\Controllerclientes;
use App\Http\Controllers\Controlleradministraciongestion;
use Illuminate\Support\Facades\Route;

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
    return view('auth/login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/administracion',[Controller::class,'administracion']);
Route::get('/portafolio',[Controller::class,'portafolio']);
Route::get('/gestion',[Controller::class,'gestion']);
Route::get('/inicio',[Controller::class,'inicio']);


Route::post('/save',[Controllerusuarios::class ,'insertarUsuarios']);

Route::get('/agregarprocesos',[Controllerprocesos::class,'procesouploadfile']);
Route::post('/upload',[Controllerprocesos::class,'proceso_table_schema']);
Route::post('/uploadfile',[Controllerprocesos::class,'uploadfile']);


Route::post('/reporteProceso',[Controllerprocesos::class, 'buscarReporteProcesos']);
Route::POST('/filtroProceso',[Controllerprocesos::class, 'buscarProcesoFiltro']);
Route::POST('/descargarProceso',[Controllerprocesos::class, 'descargarProceso']);
Route::POST('/buscarfiltroProceso',[Controllerprocesos::class, 'buscarReporteProcesosfiltro']);
Route::POST('/verProceso',[Controllerprocesos::class, 'buscarProcesoId']);

Route::POST('/saveGestion',[Controllergestion::class,'saveGestion']);
Route::POST('/savefechas_proceso',[Controllergestion::class,'savefechas_proceso']);
Route::POST('/buscarhistorico',[Controllergestion::class,'buscarhistorico']);
Route::POST('/buscaretapa',[Controllergestion::class,'buscaretapa']);


Route::POST('/buscarclientes',[Controllerclientes::class,'consultarclientes']);
Route::POST('/buscarclientesfiltro',[Controllerclientes::class,'consultarclientesFiltro']);


Route::get('/administrargestion',[Controller::class,'gestion']);
Route::POST('/deshabilitar',[Controlleradministraciongestion::class,'deshabilitaretapa']);
Route::POST('/habilitar',[Controlleradministraciongestion::class,'habilitaretapa']);
Route::POST('/consultaretapas',[Controlleradministraciongestion::class,'consultaretapas']);
Route::POST('/insertaretapa',[Controlleradministraciongestion::class,'insertaretapa']);
Route::POST('/actualizaretapa',[Controlleradministraciongestion::class,'actualizaretapa']);
Route::POST('/eliminar_etapa',[Controlleradministraciongestion::class,'eliminar_etapa']);
Route::POST('/deshabilitarmodulos',[Controlleradministraciongestion::class,'deshabilitarmodulos']);
Route::POST('/habilitarmodulos',[Controlleradministraciongestion::class,'habilitarmodulos']);
Route::POST('/consultarmodulos',[Controlleradministraciongestion::class,'consultarmodulos']);
Route::POST('/consultarmodulosactivos',[Controlleradministraciongestion::class,'consultarmodulosactivos']);
Route::POST('/deshabilitaraccion',[Controlleradministraciongestion::class,'deshabilitaraccion']);
Route::POST('/habilitaraccion',[Controlleradministraciongestion::class,'habilitaraccion']);
Route::POST('/consultaraccion',[Controlleradministraciongestion::class,'consultaraccion']);
Route::POST('/insertaraccion',[Controlleradministraciongestion::class,'insertaraccion']);
Route::POST('/deshabilitarperfil',[Controlleradministraciongestion::class,'deshabilitarperfil']);
Route::POST('/habilitarperfil',[Controlleradministraciongestion::class,'habilitarperfil']);
Route::POST('/consultarperfil',[Controlleradministraciongestion::class,'consultarperfil']);
Route::POST('/insertarperfil',[Controlleradministraciongestion::class,'insertarperfil']);
Route::POST('/eliminar_perfil',[Controlleradministraciongestion::class,'eliminar_perfil']);
