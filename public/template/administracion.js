
function deshabilitarperfil(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/deshabilitarperfil',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultarperfil',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_admin_perfil tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['id'] != 43){

                            if (result[index2]['idestatus'] == 1) {
                                campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarperfil(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                            } else {
                                campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarperfil(" + result[index2]['id'] + "))'>Habilitar</button>";
                            }
                        }
                        campos2 += '</td>';

                        campos2 += '</tr>';
                    }
                    $('#table_admin_perfil tbody').append(campos2);
                }
            });
        }
    });
}
function habilitarperfil(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/habilitarperfil',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultarperfil',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_admin_perfil tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['id'] != 43){

                            if (result[index2]['idestatus'] == 1) {
                                campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarperfil(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                            } else {
                                campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarperfil(" + result[index2]['id'] + "))'>Habilitar</button>";
                            }
                        }
                        campos2 += '</td>';

                        campos2 += '</tr>';
                    }
                    $('#table_admin_perfil tbody').append(campos2);
                }
            });
        }
    });
}
function deshabilitaraccion(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/deshabilitaraccion',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultaraccion',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_admin_accion tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaraccion(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                        } else {
                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaraccion(" + result[index2]['id'] + "))'>Habilitar</button>";
                        }
                        campos2 += '</td>';

                        campos2 += '</tr>';
                    }
                    $('#table_admin_accion tbody').append(campos2);
                }
            });
        }
    });
}
function habilitaraccion(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/habilitaraccion',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultaraccion',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_admin_accion tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaraccion(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                        } else {
                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaraccion(" + result[index2]['id'] + "))'>Habilitar</button>";
                        }
                        campos2 += '</td>';

                        campos2 += '</tr>';
                    }
                    $('#table_admin_accion tbody').append(campos2);
                }
            });
        }
    });
}
function deshabilitaretapa(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/deshabilitar',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultaretapas',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_admin_etapas tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaretapa(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                        } else {
                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaretapa(" + result[index2]['id'] + "))'>Habilitar</button>";
                        }
                        campos2 += '</td>';

                        campos2 += '</tr>';
                    }
                    $('#table_admin_etapas tbody').append(campos2);
                }
            });
        }
    });
}
function habilitaretapa(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/habilitar',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultaretapas',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_admin_etapas tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaretapa(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                        } else {
                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaretapa(" + result[index2]['id'] + "))'>Habilitar</button>";
                        }
                        campos2 += '</td>';

                        campos2 += '</tr>';
                    }
                    $('#table_admin_etapas tbody').append(campos2);
                }
            });
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultaretapas',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_edit_etapas tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                        campos2 += '<td class="text-center"><input type="number" name="orden[]" id="orden" class="form-control" value ="'+ result[index2]['orden'] +'"></td>';
                        campos2 += '<td class="text-center"><input type="color" name="color[]" id="color" class="form-control" value ="'+ result[index2]['bg'] +'"></td>';
                        campos2 += '<td class="text-center"><button type="button" onclick="eliminar_etapa('+result[index2]['id']+')" class="btn btn-danger">Eliminar</button></td>';
                        campos2 += '<input type="hidden" value="'+result[index2]['id']+'" name="id[]" id="id[]">';
                        campos2 += '</tr>';
                    }
                    $('#table_edit_etapas tbody').append(campos2);
                }
            });
        }
    });
}

function guardarEtapa() {

    $('#form_etapas .form-control:visible:not(.noFilt)').each(function () {
        if ($(this).val() == '') {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            a++;
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
        }
    });


    nombre = $('#nombre_etapa').val();
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/insertaretapa',
        type: 'POST',
        data: {
            type: 'agregaretapa',
            nombre: nombre,
        },
        dataType: 'html',
        success: function (e) {

            if (e == 1) {
                Swal.fire({
                    title: 'Etapa Guardada',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultaretapas',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_etapas tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                                    } else {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                                    }
                                    campos2 += '</td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaretapa(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                                    } else {
                                        campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaretapa(" + result[index2]['id'] + "))'>Habilitar</button>";
                                    }
                                    campos2 += '</td>';

                                    campos2 += '</tr>';
                                }
                                $('#table_admin_etapas tbody').append(campos2);
                            }
                        });
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultaretapas',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_edit_etapas tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center"><input type="number" name="orden[]" id="orden" class="form-control" value ="'+ result[index2]['orden'] +'"></td>';
                                    campos2 += '<td class="text-center"><input type="color" name="color[]" id="color" class="form-control" value ="'+ result[index2]['bg'] +'"></td>';
                                    campos2 += '<td class="text-center"><button type="button" onclick="eliminar_etapa('+result[index2]['id']+')" class="btn btn-danger">Eliminar</button></td>';
                                    campos2 += '<input type="hidden" value="'+result[index2]['id']+'" name="id[]" id="id[]">';
                                    campos2 += '</tr>';
                                }
                                $('#table_edit_etapas tbody').append(campos2);
                            }
                        });
                    }
                })
            }
        }
    });
}
function guardarPerfil() {

    $('#form_etapas .form-control:visible:not(.noFilt)').each(function () {
        if ($(this).val() == '') {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            a++;
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
        }
    });


    nombre = $('#nombre_perfil_add').val();
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/insertarperfil',
        type: 'POST',
        data: {
            type: 'agregaretapa',
            nombre: nombre,
        },
        dataType: 'html',
        success: function (e) {

            if (e == 1) {
                Swal.fire({
                    title: 'Perfil Guardado',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultarperfil',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_perfil tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                                    } else {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                                    }
                                    campos2 += '</td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['id'] != 43){

                                        if (result[index2]['idestatus'] == 1) {
                                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarperfil(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                                        } else {
                                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarperfil(" + result[index2]['id'] + "))'>Habilitar</button>";
                                        }
                                    }
                                    campos2 += '</td>';

                                    campos2 += '</tr>';
                                }
                                $('#table_admin_perfil tbody').append(campos2);
                            }
                        });
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultarperfil',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_edit_perfil tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    if(result[index2]['id'] != 43){
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center"><input class="form-control" type="text" name="nombre_perfil_edit" id="nombre_perfil_edit" value="'+result[index2]['nombre']+'" ></td>';
                                    campos2 += '<td class="text-center"><input class="form-control" type="number" name="peso_perfil_edit" id="peso_perfil_edit" value="'+result[index2]['peso']+'" ></td>';
                                    campos2 += '<td class="text-center"><button class="btn btn-danger" type="button" onclick="eliminar_perfil('+result[index2]['id']+')">Eliminar</button></td>';
                                    campos2 += '</tr>';
                                    }
                                }
                                $('#table_edit_perfil tbody').append(campos2);
                            }
                        });
                    }
                })
            }
        }
    });
}
function actualizar_etapas() {

    $('#form_etapas .form-control:visible:not(.noFilt)').each(function () {
        if ($(this).val() == '') {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            a++;
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
        }
    });

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/actualizaretapa',
        type: 'POST',
        data: $('#form_edit_etapas').serialize(),
        dataType: 'html',
        success: function (e) {
            if (e == 1) {
                Swal.fire({
                    title: 'Etapa Actualizada',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {

                })
            }

        }
    });

}
function eliminar_etapa(value) {

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/eliminar_etapa',
        type: 'POST',
        data: {
            id: value
        },
        dataType: 'html',
        success: function (e) {
            if (e == 1) {
                Swal.fire({
                    title: 'Etapa Eliminada',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultaretapas',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_edit_etapas tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center"><input type="number" name="orden[]" id="orden" class="form-control" value ="'+ result[index2]['orden'] +'"></td>';
                                    campos2 += '<td class="text-center"><input type="color" name="color[]" id="color" class="form-control" value ="'+ result[index2]['bg'] +'"></td>';
                                    campos2 += '<td class="text-center"><button type="button" onclick="eliminar_etapa('+result[index2]['id']+')" class="btn btn-danger">Eliminar</button></td>';
                                    campos2 += '<input type="hidden" value="'+result[index2]['id']+'" name="id[]" id="id[]">';
                                    campos2 += '</tr>';
                                }
                                $('#table_edit_etapas tbody').append(campos2);
                            }
                        });
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultaretapas',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_etapas tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                                    } else {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                                    }
                                    campos2 += '</td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaretapa(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                                    } else {
                                        campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaretapa(" + result[index2]['id'] + "))'>Habilitar</button>";
                                    }
                                    campos2 += '</td>';
            
                                    campos2 += '</tr>';
                                }
                                $('#table_admin_etapas tbody').append(campos2);
                            }
                        });
                    }
                })
            }

        }
    });

}
function eliminar_perfil(value) {

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/eliminar_perfil',
        type: 'POST',
        data: {
            id: value
        },
        dataType: 'html',
        success: function (e) {
            if (e == 1) {
                Swal.fire({
                    title: 'Perfil Eliminado',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultarperfil',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_edit_perfil tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    if(result[index2]['id'] != 43){
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center"><input class="form-control" type="text" name="nombre_perfil_edit" id="nombre_perfil_edit" value="'+result[index2]['nombre']+'" ></td>';
                                    campos2 += '<td class="text-center"><input class="form-control" type="number" name="peso_perfil_edit" id="peso_perfil_edit" value="'+result[index2]['peso']+'" ></td>';
                                    campos2 += '<td class="text-center"><button class="btn btn-danger" type="button" onclick="eliminar_perfil('+result[index2]['id']+')">Eliminar</button></td>';
                                    campos2 += '</tr>';
                                    }
                                }
                                $('#table_edit_perfil tbody').append(campos2);
                            }
                        });
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultarperfil',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_perfil tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                                    } else {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                                    }
                                    campos2 += '</td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarperfil(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                                    } else {
                                        campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarperfil(" + result[index2]['id'] + "))'>Habilitar</button>";
                                    }
                                    campos2 += '</td>';
            
                                    campos2 += '</tr>';
                                }
                                $('#table_admin_perfil tbody').append(campos2);
                            }
                        });
                    }
                })
            }

        }
    });

}
function eliminaraccion(value) {

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/eliminar_perfil',
        type: 'POST',
        data: {
            id: value
        },
        dataType: 'html',
        success: function (e) {
            if (e == 1) {
                Swal.fire({
                    title: 'Perfil Eliminado',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultarperfil',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_edit_perfil tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    if(result[index2]['id'] != 43){
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center"><input class="form-control" type="text" name="nombre_perfil_edit" id="nombre_perfil_edit" value="'+result[index2]['nombre']+'" ></td>';
                                    campos2 += '<td class="text-center"><input class="form-control" type="number" name="peso_perfil_edit" id="peso_perfil_edit" value="'+result[index2]['peso']+'" ></td>';
                                    campos2 += '<td class="text-center"><button class="btn btn-danger" type="button" onclick="eliminar_perfil('+result[index2]['id']+')">Eliminar</button></td>';
                                    campos2 += '</tr>';
                                    }
                                }
                                $('#table_edit_perfil tbody').append(campos2);
                            }
                        });
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultarperfil',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_perfil tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                                    } else {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                                    }
                                    campos2 += '</td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarperfil(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                                    } else {
                                        campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarperfil(" + result[index2]['id'] + "))'>Habilitar</button>";
                                    }
                                    campos2 += '</td>';
            
                                    campos2 += '</tr>';
                                }
                                $('#table_admin_perfil tbody').append(campos2);
                            }
                        });
                    }
                })
            }

        }
    });

}

function deshabilitarmodulo(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/deshabilitarmodulos',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultarmodulos',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_modulos tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['modulo'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarmodulo(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                        } else {
                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarmodulo(" + result[index2]['id'] + "))'>Habilitar</button>";
                        }
                        campos2 += '</td>';
                        campos2 += '</tr>';
                    }
                    $('#table_modulos tbody').append(campos2);
                }
            });
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultarmodulosactivos',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    console.log(f);
                    var response = JSON.parse(f);
                    $('#modulos_activos').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                      campos2 += '<li class="nav-item"><a class="nav-link " data-toggle="tab" href="#'+result[index2]['href']+'">'+result[index2]['modulo']+'</a></li>';
                    }
                    $('#modulos_activos').append(campos2);
                }
            });
        }
    });
}
function habilitarmodulo(value) {

    console.log(value);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/habilitarmodulos',
        type: 'POST',
        data: {
            type: 'cambiarestatusobligacion',
            id: value,
        },
        dataType: 'html',
        success: function (e) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultarmodulos',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    var response = JSON.parse(f);
                    $('#table_modulos tbody').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                        campos2 += '<tr>';
                        campos2 += '<td class="text-center">' + result[index2]['modulo'] + '</strong></td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                        } else {
                            campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                        }
                        campos2 += '</td>';
                        campos2 += '<td class="text-center">';
                        if (result[index2]['idestatus'] == 1) {
                            campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitarmodulo(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                        } else {
                            campos2 += "<button type='button' class='btn btn-success' onclick='(habilitarmodulo(" + result[index2]['id'] + "))'>Habilitar</button>";
                        }
                        campos2 += '</td>';
                        campos2 += '</tr>';
                    }
                    $('#table_modulos tbody').append(campos2);
                }
            });
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/consultarmodulosactivos',
                type: 'POST',
                dataType: 'html',
                success: function (f) {
                    console.log(f);
                    var response = JSON.parse(f);
                    $('#modulos_activos').empty();
                    campos2 = "";
                    result = response;
                    for (let index2 = 0; index2 < result.length; index2++) {
                      campos2 += '<li class="nav-item"><a class="nav-link " data-toggle="tab" href="#'+result[index2]['href']+'">'+result[index2]['modulo']+'</a></li>';
                     
                    }
                    $('#modulos_activos').append(campos2);
                }
            });
        }
    });
}

function guardarAccion() {

    $('#form_etapas .form-control:visible:not(.noFilt)').each(function () {
        if ($(this).val() == '') {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            a++;
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
        }
    });


    nombre = $('#nombre_accion_add').val();
    
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/insertaraccion',
        type: 'POST',
        data: {
            type: 'agregaraccion',
            nombre: nombre,
        },
        dataType: 'html',
        success: function (e) {

            if (e == 1) {
                Swal.fire({
                    title: 'Accion Guardada',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16CE46',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultaraccion',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_accion tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center">' + result[index2]['nombre'] + '</strong></td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"fill="green" /></svg>';
                                    } else {
                                        campos2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="red" /</svg>';
                                    }
                                    campos2 += '</td>';
                                    campos2 += '<td class="text-center">';
                                    if (result[index2]['idestatus'] == 1) {
                                        campos2 += "<button type='button' class='btn btn-danger' onclick='(deshabilitaretapa(" + result[index2]['id'] + "))'>Deshabilitar</button>";
                                    } else {
                                        campos2 += "<button type='button' class='btn btn-success' onclick='(habilitaretapa(" + result[index2]['id'] + "))'>Habilitar</button>";
                                    }
                                    campos2 += '</td>';

                                    campos2 += '</tr>';
                                }
                                $('#table_admin_accion tbody').append(campos2);
                            }
                        });
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/consultaraccion',
                            type: 'POST',
                            dataType: 'html',
                            success: function (f) {
                                var response = JSON.parse(f);
                                $('#table_admin_accion_edicion tbody').empty();
                                campos2 = "";
                                result = response;
                                for (let index2 = 0; index2 < result.length; index2++) {
                                    campos2 += '<tr>';
                                    campos2 += '<td class="text-center"><input name="nombre_accion" id="nombre_accion" value="'+result[index2]['nombre']+'" class="form-control"></td>';
                                    campos2 += '<td class="text-center" id="boton_estado"><button type="button" onclick="eliminaraccion('+result[index2]['id']+')" class="btn btn-danger" >Eliminar</button>'; 
                                    campos2 += '</tr>';
                                }
                                $('#table_admin_accion_edicion tbody').append(campos2);
                            }
                        });
                       
                    }
                })
            }
        }
    });
}