<?php

namespace App\Http\Controllers;

use App\Models\ModelClientes;
use Illuminate\Http\Request;
use App\Models\ModelProceso;
use App\Models\ModelGestion;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\VarDumper\VarDumper;

class Controllerprocesos extends Controller
{

    public  function procesouploadfile()
    {
        return view('upload.upload');
    }
    public  function proceso_table_schema()
    {
        $table = $_POST['tipo_cargue'];
        $ArrayCampos = ModelProceso::proceso_table_schema();
        $dir = "$_SERVER[DOCUMENT_ROOT]filesUpload/Porceso" . date('Y-m-d-h-m-s') . "-Proceso.csv";
        $moveFile = move_uploaded_file($_FILES['csv']['tmp_name'], $dir);
        $file_handle = fopen($dir, 'r');

        while (!feof($file_handle)) {
            $linea_de_texto[] = fgetcsv($file_handle, 0, ';');
        }
     
        $totalRegistros = count($linea_de_texto);
        $filas = explode(";", $linea_de_texto[0][0]);
        $datos = explode(";", $linea_de_texto[1][0]);

        $table = '<div class="col-6 card">';
        $table .= '<h3 class="text-center">Info. del Archivo</h3>';
        $table .= '<table class="table body">';


        for ($i = 0; $i < count($filas); $i++) {

            $table .= "<tr>";
            $table .= "<th>" . $filas[$i] . "</th>";
            $table .= "<th>" . $datos[$i] . "</th>";
            // $table .= "<td> asdfasdfasdf</td>";
            $table .= "</tr>";
        }

        $table .= '</table>';
        $table .= '</div>';
        $table .= '<div class="col-6 card">';
        $table .= '<form method="POST" id="formUploadFile">';
        $table .= '<div class="form-group text-center">';
        $table .= '<input type="hidden" name="uploadFile" value="uploadFile">';
        $table .= '<input type="hidden" name="tipo_cargue" value=' . $table . '>';
        $table .= "<input type='hidden' name='dataFile' value='" . $dir . "'>";
        $table .= "<input type='hidden' name='url' value='" . $dir . "'>";
        $table .= '<h5>Total de los registros del archivo:' . $totalRegistros . '</h5><br>';
        $table .= '<button class="btn btn-primary text-white" type="button" onclick="sendData()"><i class="fa fa-upload"></i>&nbsp;Cargar Data</button>';
        $table .= '<br>';
        $table .= '<span class="progresocargadatos"></span>';
        $table .= '</div>';
        $table .= '</form>';
        $table .= '</div>';
        fclose($file_handle);
        die(print($table));
    }

    public function uploadfile()
    {

        if (isset($_POST['tipo_cargue']) == "banco_occidente")
            $file = ModelProceso::InsertarProceso($_POST['url']);
        $alert = '<div class="alert alert-success" role="alert">
        ' . $file . '
        </div>';
        die(print($alert));
    }
    public function buscarReporteProcesos()
    {

        $body2 = json_decode($_POST['json']);
        $body = implode(",", $body2);
        $reporte = ModelProceso::getProcesos($body);
        foreach ($reporte as $key) {
            $report = json_encode($key);
            $array[] = json_decode($report, true);
        }
        foreach ($array as $key2) {
            $reportes34[] = (array_values($key2));
        }
        return $reportes34;
    }
    public function buscarReporteProcesosfiltro()
    {
        $nombre = $_POST['nombre'];
        $identificacion = $_POST['identificacion'];
        $fecha_desde = $_POST['fecha_limite_desde'];
        $fecha_hasta = $_POST['fecha_limite_hasta'];
        $estado = $_POST['estado'];
        $procesos = ModelProceso::getProcesosfiltro($nombre, $identificacion, $fecha_desde, $fecha_hasta, $estado);
        foreach ($procesos as $key) {
            $report = json_encode($key);
            $array[] = json_decode($report, true);
        }

        if (!empty($array)) {
            return $array;
        } else {
            return false;
        }
    }

    public function buscarProcesoId()
    {

        $identificacion = $_POST['value'];
        $procesos = ModelProceso::getProcesosIdentificacion($identificacion);
        $clientes = ModelClientes::getClientesIdentificacion($identificacion);
        $accion = ModelGestion::getAccion();
        $accion = ModelGestion::getAccion();
        $mtvonopago = ModelGestion::getMtvonoPago();
        $actividad = ModelGestion::getActividadEconomica();
        $tipocontacto = ModelGestion::getTipoContacto();
        $historico = ModelGestion::getHistorico($identificacion);
        $etapa = ModelGestion::getEtapa();
        $ultimaetapa = ModelGestion::getUltimaEtapa($identificacion);
     
        return view('gestion.gestion_procesos')->with(['procesos' => $procesos])
            ->with(['clientes' => $clientes])
            ->with(['mtvonopago' => $mtvonopago])
            ->with(['actividad' => $actividad])
            ->with(['tipocontacto' => $tipocontacto])
            ->with(['historico' => $historico])
            ->with(['etapa' => $etapa])
            ->with(['ultimaetapa' => $ultimaetapa])
            ->with(['accion' => $accion]);
    }

    
}
