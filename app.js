// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAc1CfvGzMchCZ2-W6Iwi1Fcnx6U3LUZVM",
    authDomain: "papeleria-47929.firebaseapp.com",
    databaseURL: "https://papeleria-47929.firebaseio.com",
    projectId: "papeleria-47929",
    storageBucket: "papeleria-47929.appspot.com",
    messagingSenderId: "509033311528",
    appId: "1:509033311528:web:841b6bb2980aa8b776741d",
    measurementId: "G-ZTM28MC4JD"
};

var db = firebase.firestore();

//Convert Image to Base64
$(document).ready(function() {
    $("#inputFileToLoad").change(function() {
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                var base64value = fileLoadedEvent.target.result;
                console.log(base64value);
                $("#response").val(base64value);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    });
});

function guardar() {

    var producto = document.getElementById('producto').value;
    var precio = document.getElementById('precio').value;
    var tipo = document.getElementById('tipo').value;
    var cantidad = document.getElementById('cantidad').value;
    var foto = document.getElementById('response').value;
    db.collection("Productos").add({
            producto: producto,
            precio: precio,
            tipo: tipo,
            cantidad: cantidad,
            foto: foto
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('producto').value = '';
            document.getElementById('precio').value = '';
            document.getElementById('tipo').value = '';
            document.getElementById('cantidad').value = '';
            document.getElementById('response').value = '';

        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

var tabla = document.getElementById('tabla');

//eerl
db.collection("Productos").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';



    querySnapshot.forEach((doc) => {
        var x = doc.data().foto;
        $(document).ready(function() {
            document.getElementById('preview').setAttribute('src', x);
            $("#preview").show();

        });
        console.log(`${doc.id} => ${doc.data().producto}`);
        tabla.innerHTML += `
        	<tr>
	        <th scope="row">${doc.id}</th>
	        <td>${doc.data().producto}</td>
	        <td>${doc.data().precio}</td>
	        <td>${doc.data().tipo}</td>
	        <td>${doc.data().cantidad}</td>
	   
	        <td><br><img id="preview" class="card-img-top width="70px" height="70px"  alt="..."><br></td>
	        <td><button class="btn btn-danger" id="boton" onclick="eliminar('${doc.id}')">Eliminar</button></td>
	        <td><button class="btn btn-warning" id="boton" onclick="editar('${doc.id}','${doc.data().producto}','${doc.data().precio}','${doc.data().tipo}','${doc.data().cantidad}','${doc.data().foto}')">Editar</button></td>
	      	</tr>
        `
    });
});

//eliminar
function eliminar(id) {
    db.collection("Productos").doc(id).delete().then(function() {
            console.log("Document succesfully deleted");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById('producto').value = '';
            document.getElementById('precio').value = '';
            document.getElementById('tipo').value = '';
            document.getElementById('cantidad').value = '';
            document.getElementById('response').value = '';
        })
}

//editar
function editar(id, producto, precio, tipo, cantidad, foto) {

    document.getElementById('producto').value = producto;
    document.getElementById('precio').value = precio;
    document.getElementById('tipo').value = tipo;
    document.getElementById('cantidad').value = cantidad;
    document.getElementById('response').value = foto;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function() {
        var washingtonRef = db.collection("Productos").doc(id);

        var producto = document.getElementById('producto').value;
        var precio = document.getElementById('precio').value;
        var tipo = document.getElementById('tipo').value;
        var cantidad = document.getElementById('cantidad').value;
        var foto = document.getElementById('response').value;
        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
                producto: producto,
                precio: precio,
                tipo: tipo,
                cantidad: cantidad,
                foto: foto
            })
            .then(function() {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar';
                document.getElementById('producto').value = '';
                document.getElementById('precio').value = '';
                document.getElementById('tipo').value = '';
                document.getElementById('cantidad').value = '';
                document.getElementById('response').value = '';
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}