//Sin Json
export function renderizadoProductos(productos, contenedor) {
    productos.forEach(producto => {
        const productoHTML = `
            <article class="carta__producto">
                <div>
                    <img src="${producto.imagen}" alt="Producto: ${producto.nombre}" />
                    <h3>${producto.nombre}</h3>
                </div>
                <data value="${producto.precio}" type="number">$ ${producto.precio}</data>
            </article>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

//Con Json
/*
export function renderizadoProductos(contenedor) {

    fetch('/recursos/datos/tienda.json')
        .then((respuesta) => {
            const datosJson = respuesta.json()
            return datosJson
        }).then((datosFinales) => {
            let innerHTML = "";
            datosFinales.productos.forEach(producto => {
                const productoHTML = `
                    <article class="carta__producto">
                        <div>
                            <img src="${producto.imagen}" alt="Producto: ${producto.nombre}" />
                            <h3>${producto.nombre}</h3>
                        </div>
                        <data value="${producto.precio}" type="number">$ ${producto.precio}</data>
                    </article>
                `;
                contenedor.innerHTML += productoHTML;
            });
        })
}
*/