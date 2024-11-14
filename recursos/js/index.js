// 1 - Importar datos tienda
import { tienda } from "./tienda.js";
// 2 - Importamos las funciones
import { renderizadoProductos } from "./funciones.js";
// 3 - Referenciar elemento contenedor de los productos con .getElementById..
const contenedor = document.getElementById('carta-productos');
// 4 - Utilizar la función de renderizado
//Sin Json
renderizadoProductos(tienda.productos, contenedor);
//Con Json
/*
renderizadoProductos(contenedor);
*/
