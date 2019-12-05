$(document).ready(function() {
miDataTable();
} );




function  miDataTable(){
    $('#miTabla').DataTable({
        /*
    }
      "dom": 'Bfrtip',
    "buttons": [
            'pageLength',
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ],
      "language": {
      "emptyTable":			"<i>No hay datos disponibles en la tabla.</i>",
      "info":		   		"Del _START_ al _END_ de _TOTAL_ ",
      "infoEmpty":			"Mostrando 0 registros de un total de 0.",
      "infoFiltered":			"(filtrados de un total de _MAX_ registros)",
      "infoPostFix":			"(actualizados)",
      "lengthMenu":			"Mostrar _MENU_ registros",
      "loadingRecords":		"Cargando...",
      "processing":			"Procesando...",
      "search":			"<span style='font-size:15px;'>Buscar:</span>",
      "searchPlaceholder":		"Dato para buscar",
      "zeroRecords":			"No se han encontrado coincidencias.",
      "paginate": {
        "first":			"Primera",
        "last":				"Última",
        "next":				"Siguiente",
        "previous":			"Anterior"
      },
      "aria": {
        "sortAscending":	"Ordenación ascendente",
        "sortDescending":	"Ordenación descendente"
      }
    },
    
    "lengthMenu":		[[3,5,7, 10, 20, 25, 50, -1], [3,5,7, 10, 20, 25, 50, "Todos"]],
    "iDisplayLength":	3,
     "buttons": {
        "pageLength": {
            _: "Mostrar %d Registros"
        }
    },*/
        "dom": 'Bfrtip',
    "buttons": [
            'pageLength',
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ],
    "lengthMenu": [
            [ 10, 25, 50, -1 ],
            [ '10 Resultados', '25 Resultados', '50 Resultados', 'Motrar Todos' ]
        ],
    "buttons": {
        "pageLength": {
            _: "Mostrar %d Registros"
        }
    },
    "language": {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Documentos",
        "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Documentos",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    }

    });
}
