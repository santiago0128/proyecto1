<?php

namespace App\Http\Controllers;


use App\Models\ModelAdministracion;
use App\Models\ModelGestion;

class Controlleradministraciongestion extends Controller
{


    public function deshabilitaretapa()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::deshabilitarEtapa($id);
        return $id;
    }
    public function habilitaretapa()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::habilitarEtapa($id);
        return $id;
    }
    public function consultaretapas()
    {
        $etapa = ModelGestion::getEtapaAdmin();
        return $etapa;
    }
    public function insertaretapa()
    {
        $nombre = $_POST['nombre'];
        $nombre = strtoupper($nombre);
        $etapa = ModelGestion::insertarEtapa($nombre);

        if ($etapa == 1) {
            $etapas = ModelGestion::getEtapa();
            for ($i = 0; $i < count($etapas); $i++) {
                $nombres[] = $etapas[$i]->nombre;
                $cantidad = count($etapas);
                $progreso = 100 / $cantidad;
                $progreso2 = 0;
                for ($z = 0; $z < $cantidad; $z++) {
                    if ($progreso2 >= $progreso) {
                        $progreso2 = $progreso2 + $progreso;
                    } else {
                        $progreso2 = $progreso;
                    }
                    $progreso3[] = $progreso2;
                }
            }
            for ($t = 0; $t < $cantidad; $t++) {
                $etapa = ModelGestion::UpdateProgresoEtapa($progreso3[$t], $nombres[$t]);
            }
        }
        return 1;
    }

    public function actualizaretapa()
    {
        $id = $_POST['id'];
        $orden = $_POST['orden'];
        $color = $_POST['color'];
        for ($i = 0; $i < count($id); $i++) {
            $etapa = ModelGestion::UpdateEtapa($id[$i], $orden[$i], $color[$i]);
        }
        return 1;
    }

    public function eliminar_etapa()
    {
        $id = $_POST['id'];
        $etapa = ModelGestion::deleteEtapa($id);
        if ($etapa == 1) {
            $etapas = ModelGestion::getEtapa();
            for ($i = 0; $i < count($etapas); $i++) {
                $nombres[] = $etapas[$i]->nombre;
                $cantidad = count($etapas);
                $progreso = 100 / $cantidad;
                $progreso2 = 0;
                for ($z = 0; $z < $cantidad; $z++) {
                    if ($progreso2 >= $progreso) {
                        $progreso2 = $progreso2 + $progreso;
                    } else {
                        $progreso2 = $progreso;
                    }
                    $progreso3[] = $progreso2;
                }
            }
            for ($t = 0; $t < $cantidad; $t++) {
                $etapa = ModelGestion::UpdateProgresoEtapa($progreso3[$t], $nombres[$t]);
            }
        }
        return 1;
       
    }
    public function eliminar_perfil()
    {
        $id = $_POST['id'];
        $etapa = ModelGestion::deletePerfil($id);
        return 1;
       
    }
    public function deshabilitarmodulos()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::deshabilitarmodulos($id);
        return $id;
    }
    public function habilitarmodulos()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::habilitarmodulos($id);
        return $id;
    }
    public function consultarmodulos()
    {
        $etapa = ModelGestion::modulos_gestion();
        return $etapa;
    }
    public function consultarmodulosactivos()
    {
        $etapa = ModelGestion::modulos_gestion_activos();
        return $etapa;
    }
    public function deshabilitaraccion()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::deshabilitaraccion($id);
        return $etapa;
    }
    public function deshabilitarperfil()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::deshabilitarperfil($id);
        return $etapa;
    }
    public function habilitarperfil()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::habilitarperfil($id);
        return $etapa;
    }
    public function habilitaraccion()
    {
        $id = $_POST['id'];
        $etapa = ModelAdministracion::habilitaraccion($id);
        return $etapa;
    }
    public function consultaraccion()
    {
        $etapa = ModelGestion::getAccion_admin();
        return $etapa;
    }
    public function consultarperfil()
    {
        $etapa = ModelGestion::perfil_gestion_admin();
        return $etapa;
    }
    public function insertaraccion()
    {
        $nombre = $_POST['nombre'];
        $etapa = ModelGestion::insertaraccion($nombre);
        return 1;
    }
    public function insertarperfil()
    {
        $nombre = $_POST['nombre'];
        $etapa = ModelGestion::insertarperfil($nombre);
        return 1;
    }
}
