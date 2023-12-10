// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

const listaDeProductos = document.getElementById("lista-de-productos")// get element by id, no name, cambie nombre de variable li por listDeProductos

function displayProductos(productos) {//se estructuro la funcion display products, estaba sin definir como funcion

  for (let i = 0; i < productos.length; i++) {
    var contenedorDeProducto = document.createElement("div");//cambie nombre de variable d por contenedorDeProducto para más legibilidad
    contenedorDeProducto.classList.add("producto");

    var descripcionDeProducto = document.createElement("p");//cambie nombrede variable ti por descripcionDeProductopara más legibilidad
    descripcionDeProducto.classList.add("titulo");
    descripcionDeProducto.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    contenedorDeProducto.appendChild(descripcionDeProducto);
    contenedorDeProducto.appendChild(imagen);

    listaDeProductos.appendChild(contenedorDeProducto);
  }
}

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  const elementoFiltro = document.querySelector('filtroInput');//id se movio de linea12, estaba en otra funcion, se cambio nombre de la variable para más legibilidad, se quito .input

  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const textoFiltro = elementoFiltro.value.toLocaleLowerCase();// se agrega metodo to lower case para distincion minusculas y mayusculas, se cambia nombre de la variable para más legibilidad
  console.log(textoFiltro);
  const productosFiltrados = filtrado(productos, textoFiltro);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var contenedorDeProducto = document.createElement("div");
    contenedorDeProducto.classList.add("producto");

    var descripcionDeProducto = document.createElement("p");
    descripcionDeProducto.classList.add("titulo");
    descripcionDeProducto.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    contenedorDeProducto.appendChild(descripcionDeProducto);
    contenedorDeProducto.appendChild(imagen);

    listaDeProductos.appendChild(contenedorDeProducto);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

displayProductos(productos);// llamada de funcion para desplegar productos