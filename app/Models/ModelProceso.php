<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use PDOException;
use App\Models\ModelClientes;

class ModelProceso extends Model
{

    public static function proceso_table_schema()
    {

        $data = DB::connection('pgsql')->select("SELECT column_name AS columnas                
        FROM information_schema.columns    
        WHERE table_schema = 'sys' AND table_name  = 'procesos'");
        return $data;
    }
    public static function getProcesos($body)
    {

        $sql = ("SELECT $body from sys.procesos");
        $report = DB::connection('pgsql')->select($sql);
        return $report;

    }
    public static function getProcesosCantidad($body)
    {

        $sql = ("SELECT count(*) as cantidad from sys.procesos");
        $report = DB::connection('pgsql')->select($sql);
        return $report;

    }

    public static function getProcesosIdentificacion($identificacion){

        $sql = ("SELECT * from sys.procesos where identificacion_demandado = '$identificacion'");
        $report = DB::connection('pgsql')->select($sql);
        return $report;

    }


    public static function getProcesosfiltro($nombre,$identificacion,$fecha_desde,$fecha_hasta,$estado)
    {
        $fecha_hoy = date('Y-m-d');
        $sql = "SELECT * from sys.procesos where true";
       
        if (!empty($nombre)) {
        $sql .= " AND nombre_demandado = '$nombre' ";
        }
        if (!empty($identificacion)) {
        $sql .= " AND identificacion_demandado = '$identificacion' ";
        }
        if (!empty($estado)) {
        $sql .= " AND idestatus = '$estado' ";
        }
        if (!empty($fecha_desde)) {
            if (!empty($fecha_hasta)) {
                $sql .= " AND fecha_ingreso = '$fecha_desde' between '$fecha_hasta' ";
            }else{
                $sql .= " AND fecha_ingreso = '$fecha_desde' between '$fecha_hoy'";
            }
        }

        $report = DB::connection('pgsql')->select($sql);
        return $report;

    }

    public static function Procesosall(){

        $sql = ("SELECT * from sys.procesos ");
        $report = DB::connection('pgsql')->select($sql);
        return $report;
    }
    
    public static function InsertarProceso($url)
    {
        try {

            $data = DB::connection('pgsql')->select("COPY sys.pre_procesos (identificacion_demandado, nombre_demandado, nombre_codeudor, 
           identificacion_codeudor, division_reponsable, banca, obligaciones, estado_cartera, capital, abogado_externo,
 							casa_cobranza, cod, regional, fecha_entrega_degarantias_abogado, ciudad_juzgado, departamento, numero_juzgado,
 							tipo_juzgado, tipo_proceso, subtipo_proceso, numero_radicado, etapa_presencial, estado_procesal, fecha_presentacion_demanda,
 							causal_terminacion, fecha_ultima_actualizacion, fecha_admision, medida_solicitada, placa_vehiculo,
 							descripcion_medida, medidas_efectivas, descripcion_de_la_medida, tipo_notificacion, riesgo_juridico, 
							etapas_surtidas, observaciones, fng, procesos_con_garantias_fng_fag, valor_titulos, asigando_a, 
							pagares_fisicos_sede_alterna, actividad)
                            FROM '$url' DELIMITER ';' CSV HEADER ENCODING 'LATIN1'");

            $data2 = DB::connection('pgsql')->select("SELECT * FROM sys.insertarprocesos()");

            return ('Proceso Guardado');
        } catch (PDOException $th) {
            $returnedData[0] = $th->getMessage();
            die(json_encode($returnedData));
        }
    }
}
