import React, { useState } from 'react'

function TemplateCard(props) {
    const [cantidad, setCantidad] = useState(0)
    return (
        <>
            <div className="col-sm-12  col-md-4">
                <div className="card">
                    <div className="card body">
                        <img src={props.image} alt="" className="img-thumbnail" />
                        <h2>{props.name}</h2>
                        <p>Id:{props.id}</p>
                        <h3>{props.price}</h3>
                        <h3>Cantidad {cantidad}</h3>
                        <p>{props.description}</p>
                        <button className="btn btn-dark" data-id="" 
                        onClick={() => setCantidad(cantidad + 1)}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function TemplateCarrito(props) {
    return (
        <div>
            <tr>
                <th scope="row">{'1' || props.id}</th>
                <td>{'Produto' || props.name}</td>
                <td>{'0' || props.cantidad}</td>
                <td>
                    <button className="btn btn-info btn-sm">
                        +
        </button>
                    <button className="btn btn-danger btn-sm">
                        -
        </button>
                </td>
                <td>$ <span>{'500' || props.total}</span></td>
            </tr>
        </div>
    )
}

function TemplateFooter() {
    return (
        <div id="template-footer">
            <th scope="row" colspan="2">Total Productos</th>
            <td>10</td>
            <td>
                <button className="btn btn-danger btn-sm" id="vaciar-carrito">
                    Vaciar Todo
    </button>
            </td>
            <td className="font-weigth-bold">$ <span>5000</span></td>
        </div>

    )
}

/* export { TemplateCard, TemplateCarrito, TemplateFooter }
export default { TemplateCard, TemplateCarrito, TemplateFooter } */