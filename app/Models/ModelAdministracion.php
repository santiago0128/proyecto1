<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\Paginator;


class ModelAdministracion extends Model
{

    public static function deshabilitarEtapa($id)
    {
       
        $query = "UPDATE sys.etapas set idestatus = 0 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function deshabilitarmodulos($id)
    {
       
        $query = "UPDATE sys.modulos_gestion set idestatus = 0 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function habilitarmodulos($id)
    {
       
        $query = "UPDATE sys.modulos_gestion set idestatus = 1 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function habilitarEtapa($id)
    {
       
        $query = "UPDATE sys.etapas set idestatus = 1 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function deshabilitaraccion($id)
    {
       
        $query = "UPDATE sys.accion set idestatus = 0 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function deshabilitarperfil($id)
    {
       
        $query = "UPDATE sys.perfil_gestion set idestatus = 0 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function habilitarperfil($id)
    {
       
        $query = "UPDATE sys.perfil_gestion set idestatus = 1 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }
    public static function habilitaraccion($id)
    {
       
        $query = "UPDATE sys.accion set idestatus = 1 where id = $id";
        $usuarios = DB::connection('pgsql')->select($query);
        return $usuarios;  
    }


   
    
    
}
