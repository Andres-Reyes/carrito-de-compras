document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});

// Or with jQuery

$('.dropdown-trigger').dropdown();
// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

if (localStorage.getItem('positions')) {
    var positions = [JSON.parse(localStorage.getItem('positions'))];
} else {
    var positions = [];
}

//DIVS
var DIVISION = document.getElementById('DIVISION');
var DIVISION2 = document.getElementById('DIVISION2');
var ROPADIV = document.getElementById('ROPADIV');

// informacion
var BALL = [{
        id: 1,
        cart: false,
        img: 'img/balones/bal.jpg',
        quantity: 1,
        total: 0,
        name: 'balon',
        price: 30
    },
    {
        id: 2,
        cart: false,
        img: 'img/balones/bal1.jpg',
        quantity: 1,
        total: 0,
        name: 'balon dos',
        price: 40
    },
    {
        id: 3,
        cart: false,
        img: 'img/balones/bal2.jpg',
        quantity: 1,
        total: 0,
        name: 'balon tres',
        price: 20
    },
    {
        id: 4,
        cart: false,
        img: 'img/balones/bal3.jpg',
        quantity: 1,
        total: 0,
        name: 'balon cuatro',
        price: 10
    },
    {
        id: 5,
        cart: false,
        img: 'img/balones/bal4.jpg',
        quantity: 1,
        total: 0,
        name: 'balon cinco',
        price: 15
    },
    {
        id: 6,
        cart: false,
        img: 'img/balones/bal5.jpg',
        quantity: 1,
        total: 0,
        name: 'balon seis',
        price: 12
    }
]

var CANAS = [{
        id: 7,
        cart: false,
        img: 'img/cañas/cañ.jpg',
        quantity: 1,
        total: 0,
        name: 'caña',
        price: 20
    },
    {
        id: 8,
        cart: false,
        img: 'img/cañas/cañ1.jpg',
        quantity: 1,
        total: 0,
        name: 'caña dos',
        price: 30
    },
    {
        id: 9,
        cart: false,
        img: 'img/cañas/cañ2.jpg',
        quantity: 1,
        total: 0,
        name: 'caña tres',
        price: 10
    },
    {
        id: 10,
        cart: false,
        img: 'img/cañas/cañ3.jpg',
        quantity: 1,
        total: 0,
        name: 'caña cuatro',
        price: 15
    },
    {
        id: 11,
        cart: false,
        img: 'img/cañas/cañ4.jpg',
        quantity: 1,
        total: 0,
        name: 'caña cinco',
        price: 5
    },
    {
        id: 12,
        cart: false,
        img: 'img/cañas/cañ5.jpg',
        quantity: 1,
        total: 0,
        name: 'caña seis',
        price: 29
    }
]

var ROPA = [{
        id: 13,
        cart: false,
        img: 'img/ropa/rop.jpg',
        quantity: 1,
        total: 0,
        name: 'ropa',
        price: 20
    },
    {
        id: 14,
        cart: false,
        img: 'img/ropa/rop1.jpg',
        quantity: 1,
        total: 0,
        name: 'ropa dos',
        price: 25
    },
    {
        id: 15,
        cart: false,
        img: 'img/ropa/rop2.jpg',
        quantity: 1,
        total: 0,
        name: 'ropa tres',
        price: 10
    },
    {
        id: 16,
        cart: false,
        img: 'img/ropa/rop3.jpg',
        quantity: 1,
        total: 0,
        name: 'ropa cuatro',
        price: 16
    },
    {
        id: 17,
        cart: false,
        img: 'img/ropa/rop4.jpg',
        quantity: 1,
        total: 0,
        name: 'ropa cinco',
        price: 18
    },
    {
        id: 18,
        cart: false,
        img: 'img/ropa/rop5.jpg',
        quantity: 1,
        total: 0,
        name: 'ropa seis',
        price: 6
    }
]

//HTML

function HTMLBALLProduct(con) {
    let btn = `btnBall${con}`;
    if (BALL[con - 1].cart) {
        return `
		<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
			<div class="card">
				<div class="card-image">
					<img src="${BALL[con-1].img}">
					<a onclick="alertCart()" class="btn-floating halfway-fab
					waves-effect waves-light green">
						<i class="material-icons">shopping_cart</i>
					</a>
				</div>
			<div class="card-content">
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<span class="card-title">${BALL[con-1].name}</span>
			<p>Price: $${BALL[con-1].price}.00</p>
			</div>
				</div>
		</div>
		`

    } else {
        return `
			<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
			<div class="card">
				<div class="card-image">
					<img src="${BALL[con-1].img}">

					<a id="${btn}" onclick="cart('${BALL[con-1].id}','${BALL[con-1].cart}',
					'${BALL[con-1].img}','${BALL[con-1].quantity}','${BALL[con-1].total}',
					'${BALL[con-1].name}','${BALL[con-1].price}','${btn}')"
					class="btn-floating halfway-fab waves-effect waves-light red"><i
					class="material-icons">add_shopping_cart</i></a>
					<a id="${btn}alert" style="display:none" onclick="alertCart()"
					class="btn-floating halfway-fab waves-effect waves-light green"><i
					class="material-icons">shopping_cart</i></a>
					</div>
					<div class="card-content">
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<span class="card-title">${BALL[con-1].name}</span>
					<p>Price: $${BALL[con-1].price}.00</p>

					</div>
				</div>
			</div>
		`
    }
}

function HTMLCANASProduct(con) {
    let btn = `btncanas${con}`;
    if (CANAS[con - 1].cart) {
        return `
		<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
			<div class="card">
				<div class="card-image">
					<img src="${CANAS[con-1].img}">

					<a id="${btn}alert" onclick="alertCart()" class="btn-floating 
					halfway-fab waves-effect waves-light green"><i 
					class="material-icons">shopping_cart</i>
					</a>
				</div>
			<div class="card-content">
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<span class="card-title">${CANAS[con-1].name}</span>
			<p>Price: $${CANAS[con-1].price}.00</p>
			</div>
				</div>
		</div>
		`

    } else {
        return `
			<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
			<div class="card">
				<div class="card-image">
					<img src="${CANAS[con-1].img}">

					<a id="${btn}" onclick="cart('${CANAS[con-1].id}','${CANAS[con-1].cart}',
					'${CANAS[con-1].img}','${CANAS[con-1].quantity}','${CANAS[con-1].total}',
					'${CANAS[con-1].name}','${CANAS[con-1].price}','${btn}')"
					class="btn-floating halfway-fab waves-effect waves-light red"><i
					class="material-icons">add_shopping_cart</i></a>
					<a id="${btn}alert" style="display:none" onclick="alertCart()"
					class="btn-floating halfway-fab waves-effect waves-light green"><i
					class="material-icons">shopping_cart</i></a>
					</div>
					<div class="card-content">
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<span class="card-title">${CANAS[con-1].name}</span>
					<p>Price: $${CANAS[con-1].price}.00</p>

					</div>
				</div>
			</div>
		`
    }
}


function HTMLROPAProduct(con) {
    let btn = `btnropa${con}`;
    if (ROPA[con - 1].cart) {
        return `
		<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
			<div class="card">
				<div class="card-image">
					<img src="${ROPA[con-1].img}">
					<a id="${btn}alert" onclick="alertCart()" class="btn-floating 
					halfway-fab	waves-effect waves-light green"><i
					class="material-icons">shopping_cart</i>
					</a>
				</div>
			<div class="card-content">
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<i style="color:orange;" class="fa fa-star" ></i>
			<span class="card-title">${ROPA[con-1].name}</span>
			<p>Price: $${ROPA[con-1].price}.00</p>
			</div>
				</div>
		</div>
		`

    } else {
        return `
			<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
			<div class="card">
				<div class="card-image">
					<img src="${ROPA[con-1].img}">

					<a id="${btn}" onclick="cart('${ROPA[con-1].id}','${ROPA[con-1].cart}',
					'${ROPA[con-1].img}','${ROPA[con-1].quantity}','${ROPA[con-1].total}',
					'${ROPA[con-1].name}','${ROPA[con-1].price}','${btn}')"
					class="btn-floating halfway-fab waves-effect waves-light red"><i
					class="material-icons">add_shopping_cart</i></a>
					<a id="${btn}alert" style="display:none" onclick="alertCart()"
					class="btn-floating halfway-fab waves-effect waves-light green"><i
					class="material-icons">shopping_cart</i></a>
					</div>
					<div class="card-content">
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<i style="color:orange;" class="fa fa-star" ></i>
					<span class="card-title">${ROPA[con-1].name}</span>
					<p>Price: $${ROPA[con-1].price}.00</p>

					</div>
				</div>
			</div>
		`
    }
}
//ANIMACION
function animation() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
    });

    Toast.fire({
        icon: 'success',
        title: 'añadido al carrito'
    })
}
//ALERT CART
function alertCart() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
    });

    Toast.fire({
        icon: 'info',
        title: 'producto fue añadido al carrito'
    })
}
//CART FUNCTIONS 
function cart(id, cart, img, quantity, total, name, price, btncart) {
    var item = {
        id: id,
        cart: true,
        img: img,
        quantity: quantity,
        total: total,
        name: name,
        price: price
    }
    positions.push(id);
    localStorage.setItem("positions", JSON.stringify(positions));
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    document.getElementById(btncart + 'alert').style.display = "block";
    animation();
}
//RENDER
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
$(document).ready(function() {
    $('.modal').modal();
});

function render() {
    new WOW().init();
    if (localStorage.getItem('positions')) {
        var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    } else {
        var localProductsCart = [];
        localStorage.setItem('positions', JSON.stringify(localProductsCart));
        var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    }
    for (let index = 0; index < localProductsCart.length; index++) {
        //BALL
        for (let index2 = 0; index2 < BALL.length; index2++) {
            if (localProductsCart[index] == BALL[index2].id) {
                BALL[index2].cart = true;
            } else {

            }
        } //CAÑAS
        for (let index2 = 0; index2 < CANAS.length; index2++) {
            if (localProductsCart[index] == CANAS[index2].id) {
                CANAS[index2].cart = true;
            } else {

            }
        }
        //ROPA
        for (let index2 = 0; index2 < ROPA.length; index2++) {
            if (localProductsCart[index] == ROPA[index2].id) {
                ROPA[index2].cart = true;
            } else {

            }
        }
    }

    for (let index = 1; index <= 6; index++) {
        DIVISION.innerHTML += `${HTMLBALLProduct(index)}`;
    }
    for (let index = 1; index <= 6; index++) {
        DIVISION2.innerHTML += `${HTMLCANASProduct(index)}`;
        ROPADIV.innerHTML += `${HTMLROPAProduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }


}