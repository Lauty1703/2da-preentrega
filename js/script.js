/*let formulario = document.getElementById("formulario");
let inputNombreProduto = document.getElementById("inputNombreProducto");
let inputCantidad = document.getElementById("inputCantidad");
let inputDireccion = document.getElementById("inputDireccion");
let submit=document.getElementById('submit');




let productos = [];

class Productos {
  constructor(
    nombreProducto,
    cantidad,
    direccion
  ) {
    this.nombreProducto = nombreProducto.toUpperCase();
    this.cantidad = cantidad;
    this.direccion = direccion;
  }
}

formulario.onsubmit = (event) => validarFormulario(event);

function validarFormulario(event) {
  event.preventDefault();
  let nombreProducto = (inputNombreProducto.value);
  let cantidad = parseInt(inputCantidad.value);
  let direccion = (inputDireccion.value);
 
  
  let producto = new Productos(
    nombreProducto,
    cantidad,
    direccion
  );
 
  productos.push(producto);
  sessionStorage.setItem('nombreProducto',  JSON.stringify(productos))


  console.log(productos);
}



let productmos=[{
  id: 1,
  nombre: 'helado de crema de oreo',
  codigo: '0111202',
  precio: 2500,
  imagen: './img/oferta1.jpg',
  descripcion_corta: 'helado de crema y oreo de 1 kilo',
  stock:100,
  alt: 'helado de crema y oreo de 1 kilo',
}, {
  id: 2,
  nombre: 'helado de dulce de leche ',
  codigo: '2100240',
  precio: 2000,
  imagen: './img/oferta2.jpg',
  descripcion_corta: 'helado cofler de 1 kilo',
  stock:100,
  alt: 'helado cofler de 1 kilo',
  
},{
  id: 3,
  nombre: 'helado de dulce de leche granizado ',
  codigo: '2195461',
  precio: 1850,
  imagen: './img/oferta3.jpg',
  descripcion_corta: 'helado cofler de 1 kilo',
  stock:100,
  alt: 'helado cofler de 1 kilo',
}
,{
  id: 4,
  nombre: 'helado de chocolate',
  codigo: '2192034',
  precio: 2000,
  imagen: './img/oferta4.jpg',
  descripcion_corta: 'helado coffee de 1 kilo',
  stock:100,
  alt: 'helado coffe de 1 kilo chocolate',
}
,{
  id: 5,
  nombre: 'galletas de chocolate',
  codigo: '1694810',
  precio: 1850,
  imagen: './img/oferta5.jpg',
  descripcion_corta: 'helado de galletas de chocolate 1 kilo',
  stock:100,
  alt: 'galletas heladas de 1 kilo',
}
,{
  id: 6,
  nombre: 'helado de galleta de chocolate',
  codigo: '1964785',
  precio: 1900,
  imagen: './img/oferta6.jpg',
  descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',
  stock:100,
  alt: 'helado de galleta nestle 1 kilo',
}];


const contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of productmos) {
  let column = document.createElement("div");
  column.id = `columna-${producto.id}`;
  column.innerHTML = `
<div class="col-12 justify-content-center text-center m-3 px-5 ">
  <div class="card mb-3" >
    <div class="row g-0 bg-white rounded">
      <div class="col-12 ">
        <img src="${producto.imagen}" class="img-fluid rounded-start " alt="${producto.alt}">
      </div>
      <div class="col-12 ">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion_corta}</p>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">stock:${producto.stock}</p>
          <button type="button" class=" w-100  btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  contenedorProductos.append(column);
}

*/
/*
function entrada(){
  return prompt("INGRESAR DATO");
}

function procesamiento(valor){
  return "LA ENTRADA ES "+valor
}

function salida(valor){
  alert(valor);
}
salida(procesamiento(entrada()));*/
/*
function redondeado(valor) {
  return Math.round(valor)
}

for (let i = 0; i <5; i++) {
    let ingreso=prompt('ingrese un numero')
    alert(redondeado(ingreso))
}
*/
/*

function inpuesto(precio,porcentaje) {
    return precio+porcentaje;
}

for (let i = 0; i <5; i++) {
    let precio=parseFloat(prompt('ingrese el precio'))
    let porcentaje=parseFloat(prompt('ingrese el porcentaje'))

    alert(`el precio final es de ${inpuesto(precio,porcentaje)}`)
}

function impuesto(precio, porcentaje){
  return precio + ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index++) {
  let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
,parseFloat(prompt("INGRESAR %")));
  alert(resultado);
}
*/
/*
const COTIZACION_DOLAR = 150;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}
*/
/*
function validacion(cadena){
  return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
  alert(validacion(entrada));
  entrada = prompt("INGRESAR CADENA");
}*/
/*
class tienda{
  constructor(nombre,direccion,propietaria,rubro){
    this.nombre=nombre
    this.direccion=direccion
    this.propietaria=propietaria
    this.rubro=rubro
  }

  mostraTienda(){
    return`
    el nombre: ${this.nombre}
    el direccion: ${this.direccion}
    el propietario: ${this.propietaria}
    el rubro: ${this.rubro}`
  }

}

const tienda1=new tienda("superchino","varela 18/15","apu","supermercado");
const tienda2=new tienda("leo","varela 18/15","leo","carniceria");
const tienda3=new tienda("los hermanos","quilmes 15","dlia","ferreteria");

alert(tienda1.mostraTienda())
alert(tienda2.mostraTienda())
alert(tienda3.mostraTienda())*/


class Tienda {
  constructor(nombre, direccion, propietaria, rubro) {
    this.nombre = nombre
    this.direccion = direccion
    this.propietaria = propietaria
    this.rubro = rubro
  }

  mostraTienda() {
    return `
    el nombre: ${this.nombre}
    el direccion: ${this.direccion}
    el propietario: ${this.propietaria}
    el rubro: ${this.rubro}`
  }

}
let ingresados = '';
for (let index = 0; index < 5; index++) {
  let tienda = new Tienda(prompt("NOMBRE"),
    prompt("DIRECCION"),
    prompt("PROPIETARIO"),
    prompt("RUBRO"));

  ingresados += "Tienda: " + tienda.nombre + " " +
    "Direccion: " + tienda.direccion + " " +
    "Propitario: " + tienda.propietario + " " +
    "rubro: " + tienda.rubro + "\n";
}
alert(ingresados);