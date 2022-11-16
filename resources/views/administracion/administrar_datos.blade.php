<div id="main-content">
    <div class="block-header">
        <div class="row">
            <div class="col-lg-5 col-md-8 col-sm-12" style="padding-left: 50px;">
                <h1>
                    <li class=" fa fa-users"></li>&nbsp;Administracion
                </h1>
            </div>
            <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                <ul class="breadcrumb justify-content-end">
                    <li class="breadcrumb-item"><a href="index.php"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active">Administracion</li>
                    <li class="breadcrumb-item">Usuarios</li>
                </ul>
            </div>
        </div>
    </div>


    <div class="col-md-12">
        <div class="card">
            <div class="body">
                <!-- <div class="card"> -->
                <div class="body">
                    <button type="button" data-toggle="modal" data-target="#modulos" id="addusuarios" class="btn btn-success">
                        &nbsp; Modulos Gestion
                    </button>
                    <br>
                    <br>
                    <ul class="nav nav-tabs" id="modulos_activos">
                        @foreach ($modulos_activos as $modulos_activos)
                        <li class="nav-item"><a class="nav-link " data-toggle="tab" href="#<?php echo $modulos_activos->href ?>"><?php echo $modulos_activos->modulo ?></a>
                        </li>
                        @endforeach
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane show active" id="etapas">
                            <div class="">
                                <div class="card ">
                                    <button type="button" data-toggle="modal" data-target="#addEtapa" id="addusuarios" class="btn btn-success">
                                        <li class="fa fa-plus"></li> &nbsp; Agregar Etapa
                                    </button>
                                    <button type="button" data-toggle="modal" data-target="#editEtapa" id="addusuarios" class="btn btn-primary">
                                        <li class="fa fa-pencil-square-o"></li> &nbsp; Editar Etapa
                                    </button>
                                </div>
                            </div>

                            <table class="table" id="table_admin_etapas">
                                <thead>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Estado</th>
                                    <th class="text-center">Accion</th>
                                </thead>
                                <tbody>
                                    @foreach ($etapa as $data)
                                    <tr>
                                        <td class="text-center">{{$data->nombre}}</td>
                                        <td class="text-center" id="color_estado"> <?php if ($data->idestatus == 1) {
                                                                                        echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                               width="30" height="30" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50"
                                                    fill="green" />
                                          </svg>';
                                                                                    } else {
                                                                                        echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                            width="30" height="30" viewBox="0 0 120 120">
                                                                         <circle cx="60" cy="60" r="50"
                                                                                 fill="red" />
                                                                       </svg>';
                                                                                    } ?></td>
                                        <td class="text-center" id="boton_estado"> <?php if ($data->idestatus == 1) {
                                                                                        echo "<button type='button' class='btn btn-danger' onclick='(deshabilitaretapa($data->id))'>Deshabilitar</button>";
                                                                                    } else {
                                                                                        echo "<button type='button' class='btn btn-success' onclick='(habilitaretapa($data->id))'>Habilitar</button>";
                                                                                    } ?></td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane" id="acciones">
                            <div class="">
                                <div class="card ">
                                    <button type="button" data-toggle="modal" data-target="#addAccion" id="addusuarios" class="btn btn-success">
                                        <li class="fa fa-plus"></li> &nbsp; Agregar Accion
                                    </button>
                                    <button type="button" data-toggle="modal" data-target="#editAccion" id="addusuarios" class="btn btn-primary">
                                        <li class="fa fa-pencil-square-o"></li> &nbsp; Editar Accion
                                    </button>
                                </div>
                            </div>

                            <table class="table" id="table_admin_accion">
                                <thead>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Estado</th>
                                    <th class="text-center">Accion</th>
                                </thead>
                                <tbody>
                                    @foreach ($accion_admin as $accion_admin)

                                    <tr>
                                        <td class="text-center">{{$accion_admin->nombre}}</td>
                                        <td class="text-center" id="color_estado"> <?php if ($accion_admin->idestatus == 1) {
                                                                                        echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                               width="30" height="30" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50"
                                                    fill="green" />
                                          </svg>';
                                                                                    } else {
                                                                                        echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                            width="30" height="30" viewBox="0 0 120 120">
                                                                         <circle cx="60" cy="60" r="50"
                                                                                 fill="red" />
                                                                       </svg>';
                                                                                    } ?></td>
                                        <td class="text-center" id="boton_estado"> <?php if ($accion_admin->idestatus == 1) {
                                                                                        echo "<button type='button' class='btn btn-danger' onclick='(deshabilitaraccion($accion_admin->id))'>Deshabilitar</button>";
                                                                                    } else {
                                                                                        echo "<button type='button' class='btn btn-success' onclick='(habilitaraccion($accion_admin->id))'>Habilitar</button>";
                                                                                    } ?></td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane" id="perfil">
                            <div class="">
                                <div class="card ">
                                    <button type="button" data-toggle="modal" data-target="#addPerfil" id="addusuarios" class="btn btn-success">
                                        <li class="fa fa-plus"></li> &nbsp; Agregar Perfil
                                    </button>
                                    <button type="button" data-toggle="modal" data-target="#editPerfil" id="addusuarios" class="btn btn-primary">
                                        <li class="fa fa-pencil-square-o"></li> &nbsp; Editar Perfil
                                    </button>
                                </div>
                            </div>
                            <table class="table" id="table_admin_perfil">
                                <thead>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Estado</th>
                                    <th class="text-center">Accion</th>
                                </thead>
                                <tbody>
                                    @foreach ($perfil_admin as $perfil_admin)

                                    <tr>
                                        <td class="text-center">{{$perfil_admin->nombre}}</td>
                                        <td class="text-center" id="color_estado"> <?php if ($perfil_admin->idestatus == 1) {
                                                                                        echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                               width="30" height="30" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50"
                                                    fill="green" />
                                          </svg>';
                                                                                    } else {
                                                                                        echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                            width="30" height="30" viewBox="0 0 120 120">
                                                                         <circle cx="60" cy="60" r="50"
                                                                                 fill="red" />
                                                                       </svg>';
                                                                                    } ?></td>
                                                                                    <?php if($perfil_admin->id != 43){ ?>
                                        <td class="text-center" id="boton_estado"> <?php if ($perfil_admin->idestatus == 1) {
                                                                                        echo "<button type='button' class='btn btn-danger' onclick='(deshabilitarperfil($perfil_admin->id))'>Deshabilitar</button>";
                                                                                    } else {
                                                                                        echo "<button type='button' class='btn btn-success' onclick='(habilitarperfil($perfil_admin->id))'>Habilitar</button>";
                                                                                    } ?></td>
                                                                                     <?php } ?>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addEtapa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2>Agregar Etapa</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <form id="form_etapas" enctype="multipart/form-data" method="post">
                                        @csrf
                                        <div class="col-4 col-sm-4 col-md-4 col-md-12 col-lg-12" style="padding-top: 5px;">
                                            <label for="">Nombre </label>
                                            <input type="text" class="form-control" name="nombre_etapa" id="nombre_etapa">
                                        </div>
                                        &nbsp;
                                        <div class="col-4 col-sm-4 col-md-4 col-md-12 col-lg-12" style="padding-top: 5px;">
                                            <button type="button" id="btnGuardarUsuario" onclick="guardarEtapa()" class="btn btn-success">Guardar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="editEtapa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2>Editar Etapa</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <form method="POST" id="form_edit_etapas">
                                        <table class="table" id="table_edit_etapas">
                                            <thead>
                                                <th class="text-center">Nombre</th>
                                                <th class="text-center">Orden</th>
                                                <th class="text-center">Color</th>
                                                <th class="text-center">Accion</th>
                                            </thead>
                                            <tbody>
                                                @foreach ($etapa as $data)
                                                <tr>
                                                    <td class="text-center">{{$data->nombre}}</td>
                                                    <td class="text-center"><input type="number" value="{{$data->orden}}" name="orden[]" id="orden" class="form-control"></td>
                                                    <td class="text-center"><input type="color" name="color[]" id="color" value="{{$data->bg}}" class="form-control"></td>
                                                    <td class="text-center">
                                                        <?php echo "<button type='button' onclick='eliminar_etapa($data->id)' class='btn btn-danger'>Eliminar</button></td>"; ?>
                                                        <input type="hidden" value="{{$data->id}}" name="id[]" id="id[]">
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                        <button type="button" onclick="actualizar_etapas()" class="btn btn-success">Guardar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="editAccion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2>Editar Accion</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <table class="table" id="table_admin_accion_edicion">
                                        <thead>
                                            <th class="text-center">Nombre</th>
                                            <th class="text-center">Accion</th>
                                        </thead>
                                        <tbody>
                                            @foreach ($accion_admin2 as $accion_admin2)
                                            <tr>
                                                <td class="text-center"><input name="nombre_accion" id="nombre_accion" value="{{$accion_admin2->nombre}}" class="form-control"></td>
                                                <td class="text-center" id="boton_estado"><button type="button" onclick="eliminaraccion(<?php echo $accion_admin2->id ?>)" class="btn btn-danger">Eliminar</button>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                    <button type="button" onclick="editaraccion()" class="btn btn-success">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modulos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2> Modulos Gestion</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <form method="POST" id="form_edit_etapas">
                                        <table class="table" id="table_modulos">
                                            <thead>
                                                <th class="text-center">Nombre</th>
                                                <th class="text-center">Estado</th>
                                                <th class="text-center">Accion</th>
                                            </thead>
                                            <tbody>
                                                @foreach ($modulos as $modulos)
                                                <tr>
                                                    <td class="text-center">{{$modulos->modulo}}</td>
                                                    <td class="text-center" id="color_estado"> <?php if ($modulos->idestatus == 1) {
                                                                                                    echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                               width="30" height="30" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50"
                                                    fill="green" />
                                          </svg>';
                                                                                                } else {
                                                                                                    echo '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                            width="30" height="30" viewBox="0 0 120 120">
                                                                         <circle cx="60" cy="60" r="50"
                                                                                 fill="red" />
                                                                       </svg>';
                                                                                                } ?></td>
                                                    <td class="text-center" id="boton_estado"> <?php if ($modulos->idestatus == 1) {
                                                                                                    echo "<button type='button' class='btn btn-danger' onclick='(deshabilitarmodulo($modulos->id))'>Deshabilitar</button>";
                                                                                                } else {
                                                                                                    echo "<button type='button' class='btn btn-success' onclick='(habilitarmodulo($modulos->id))'>Habilitar</button>";
                                                                                                } ?></td>
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addAccion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2> Agregar Accion</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <form id="form_editar_acciones" enctype="multipart/form-data" method="post">
                                        @csrf
                                        <div class="col-4 col-sm-4 col-md-4 col-md-12 col-lg-12" style="padding-top: 5px;">
                                            <label for="">Nombre </label>
                                            <input type="text" class="form-control" name="nombre_accion_add" id="nombre_accion_add">
                                        </div>
                                        &nbsp;
                                        <div class="col-4 col-sm-4 col-md-4 col-md-12 col-lg-12" style="padding-top: 5px;">
                                            <button type="button" id="btnGuardarUsuario" onclick="guardarAccion()" class="btn btn-success">Guardar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addPerfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2> Agregar Perfil</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <form id="form_editar_acciones" enctype="multipart/form-data" method="post">
                                        @csrf
                                        <div class="col-4 col-sm-4 col-md-4 col-md-12 col-lg-12" style="padding-top: 5px;">
                                            <label for="">Nombre </label>
                                            <input type="text" class="form-control" name="nombre_perfil_add" id="nombre_perfil_add">
                                        </div>
                                        &nbsp;
                                        <div class="col-4 col-sm-4 col-md-4 col-md-12 col-lg-12" style="padding-top: 5px;">
                                            <button type="button" id="btnGuardarUsuario" onclick="guardarPerfil()" class="btn btn-success">Guardar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="editPerfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <div class="modal-header">
                                    <h2> Editar Perfil</h2>
                                </div>
                                <div class="body" style="width: 100%;">
                                    <form id="form_editar_acciones" enctype="multipart/form-data" method="post">
                                        <table class="table" id="table_edit_perfil">
                                            <thead>
                                                <th class="text-center">Nombre</th>
                                                <th class="text-center">Peso</th>
                                                <th class="text-center">Accion</th>
                                            </thead>
                                            <tbody>
                                                @foreach ($perfil_admin_edit as $perfil_admin_edit)

                                                <tr>
                                                    <?php if($perfil_admin_edit->id != 43) {
                                                        echo '<td class="text-center"><input class="form-control" type="text" name="nombre_perfil_edit" id="nombre_perfil_edit" value="'.$perfil_admin_edit->nombre.'" ></td>';
                                                        echo '<td class="text-center"><input class="form-control" type="number" name="peso_perfil_edit" id="peso_perfil_edit" value="'.$perfil_admin_edit->peso.'" ></td>';
                                                        echo '<td class="text-center"><button class="btn btn-danger" type="button" onclick="eliminar_perfil('.$perfil_admin_edit->id.')">Eliminar</button></td>';
                                                    }?>
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>