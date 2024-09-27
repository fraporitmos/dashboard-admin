
function generarRegistroUI(order){
    return `
     <tr>
        <td>${order.id}</td>
        <td>${order.product}</td>
        <td>${order.names}</td>
        <td>${order.email}</td>
        <td>${order.price + order.cantidad}</td>
        <td>${order.fecha}</td>
        <td>
            <button>
                <i class="fa-solid fa-pencil"></i>
                Modificar
            </button>
            <button class="eliminar">
                <i class="fa-solid fa-trash"></i>
                Eliminar
            </button>
        </td>
    </tr
    `
}


const getOrders = () => {
    const container = document.getElementById("container")
    fetch("http://192.168.18.28:3000/api/orders")
    .then(resp => {
        if(!resp.ok){
            console.log("No se encontro data")
        }
        return resp.json()
    }).then(data=> {
        var arrayOrders = data.ventas
        arrayOrders.forEach( order => 
            container.innerHTML += generarRegistroUI(order)
        )

    })

}

getOrders()


