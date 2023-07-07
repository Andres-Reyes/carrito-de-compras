var x = document.getElementById("userName");
var p = document.getElementById("userPassword");

document.getElementById("formLogin").addEventListener("submit", (ee)=>{
	ee.preventDefault();
	console.log(x.value);
	console.log(p.value);
	if (x.value =="admin@gmail.com" && p.value=="facil123"){
		swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Bienvenido administrador',
			text: `Acesso garantizado`,
		});
		x.value='';
		p.value='';
		setTimeout(()=>{
			loadpage();
		}, 3000);
	}else {
		swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Error',
			text: `Acesso denegado`,
		});
		x.value='';
		p.value='';
	}
	function loadpage(){
		window.location.href="./admin/admin.html";
	}
});


var y = document.getElementById("userName2");
var z = document.getElementById("userPassword2");

document.getElementById("formLogin2").addEventListener("submit", (ee)=>{
	ee.preventDefault();
	console.log(y.value);
	console.log(z.value);
	if (y.value =="admin@gmail.com" && z.value=="facil123"){
		swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Bienvenido administrador',
			text: `Acesso garantizado`,
		});
		x.value='';
		p.value='';
		setTimeout(()=>{
			loadpage();
		}, 3000);
	}else {
		swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Error',
			text: `Acesso denegado`,
		});
		y.value='';
		z.value='';
	}
	function loadpage(){
		window.location.href="crud.html";
	}
});