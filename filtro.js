// Array de productos (li de productos)
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// contenedor de  productos filtrados
const li = document.getElementById("lista-de-productos"); // Cambié de getElementsByName a getElementById para que funcione bien
const $i = document.querySelector('.input'); // Seleccion de imput html

// Creee la función paea mostrar los productos
function displayProductos(productos) {
  
/*Use forEach para ver cada producto y cambio de las palabras var por cons o let ya que var esta en desuso
 cambio de variable*/

  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto"); 

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre; 
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    // título e imagen del contenedor del producto
    d.appendChild(ti);
    d.appendChild(imagen);

    
    li.appendChild(d);
  });
}


displayProductos(productos);

// filto productos
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value; 
  console.log(texto); // Muestra de consola de mi texto

  // Filtrado de productos
  const productosFiltrados = filtrado(productos, texto);

  // Hago llamado de mi función
  displayProductos(productosFiltrados);
}


const filtrado = (productos = [], texto) => {
  // Filtra los productos de acuerdo a mi texto
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

