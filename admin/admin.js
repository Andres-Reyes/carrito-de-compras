/*función de formateo para detalles de fila*/
function format ( d ){
	//`d` es el original objecto de datos para la fila
	return `<table>
	<tr>
	<td>Cliente:</td>
	<td> ${d.userName}</td>
	</tr>
	<tr>
	<td>E-mail</td>
	<td> ${d.userEmail}</td>
	</tr>
	<tr>
	<td>Año:</td>
	<td> ${d.userYear}</td>
	</tr>
	<tr>
	<td>Fecha:</td>
	<td> ${d.userDate}</td>
	</tr>
	<tr>
	<td>Hora:</td>
	<td> ${d.hour}</td>
	</tr>
	<tr>
	<td>Metodo de pago:</td>
	<td> ${d.payment}</td>
	</tr>
	<tr>
	<td>Orden:</td>
	<td> ${d.userOrder}</td>
	</tr>
	<tr>
	<td>Id:</td>
	<td> ${d.id}</td>
	</tr>
	<tr>
	<td>Total:</td>
	<td> ${d.total}</td>
	</tr>
	<tr>
	<td> Productos: </td>
	<td>
	${d.products.map(function(products){
		console.log(d.products)
		return `<ul >
		<li>Producto: ${products.name}</li>
		<li>Precio: ${products.price}</li>
		<li>Cantidad: ${products.quantity}</li>
		<li>Total: ${products.total}</li>

		</ul>`;
	})}</td>
	<tr>


	</table>`;
}//fin del formato

$(document).ready(function(){
	setTimeout(function(){
		var table = $('#tableAdmin').DataTable({
			"data": finaldata,
			select: "single",
			"columns": [
			{
				"className": 'details-control',
				"orderable": false,
				"data": null,
				"defaultContent": '',
				"render": function(){
					return '<i style="hover:pointer" class=" fa fa-plus-square" aria-hidden="true"></i>';
				},
				width:"15px"
			},
			{"data": "id"},
			{"data": "userOrder"},
			{"data": "userDate"},
			{"data": "userName"},
			{"data": "payment"},
			{"data": "total"}

			],
			"order": [[1,'asc']]
		});

		//agregar escucha de eventos para detalles de apertura y cierre
		$('#tableAdmin tbody').on('click', 'td.details-control', function(){
			var tr = $(this).closest('tr');
			var tdi = tr.find("i.fa");
			var row = table.row(tr);

			if(row.child.isShown() ){
				//esta fila ya está abierta - ciérrela
 				row.child.hide();
 					tr.removeClass('shown');
 					tdi.first().removeClass(' fa-minus-square');
 					tdi.first().addClass(' fa-plus-square');
			}
			else{
				// abrir esta fila
				row.child(format(row.data()) ).show();
				tr.addClass('shown');
				tdi.first().removeClass(' fa-plus-square');
				tdi.first().addClass(' fa-minus-square');
			}
		} );
	},4000)
} );

//------------------------------
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMpAsMCdWOVFlJwlgvxtoqqivfiSfgg4s",
    authDomain: "prueba-55cc4.firebaseapp.com",
    databaseURL: "https://prueba-55cc4.firebaseio.com",
    projectId: "prueba-55cc4",
    storageBucket: "prueba-55cc4.appspot.com",
    messagingSenderId: "380171607584",
    appId: "1:380171607584:web:15cab3db8a13a7aade2645"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  	var sales= []
  firebase.firestore().collection("sales")
  .onSnapshot(function(querySnapshot){

  	querySnapshot.forEach(function(doc){
  		console.log(doc.data())
  		sales.push(doc.data())
  	})
  	finaldata = sales
  });