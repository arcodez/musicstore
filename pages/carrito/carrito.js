import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { TemplateCard, TemplateCarrito, TemplateFooter } from './TemplatesC'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
    return {
        props: { productos: data }
    }
}
var numero = 0
function carrito({ productos }) {
    var contador = 0
    var carrito = [{}]
    const [precio, setPrecio] = useState(producto.price)
    const [title, setTitle] = useState(producto.name)
    const [description, setDescription] = useState(producto.description)
    const [cantidad, setCantidad] = useState(0)
    const setCarrito = objeto => {
    
       var id = producto._id
        return
    }

    const [agregrar, setAgregar] = useState(0)
    var productoCantidad = 0
    return (
        <Layout>
            <div className="container">
                <h1>Carrito de Compras {numero = agregrar}</h1>
                <div>
                    {
                        numero < 1 ? <h2>Es menor que 1 su valor es {numero}</h2>
                            : <h2>Es mayor que 1 su valor es {numero}</h2>
                    }
                </div>
                <hr />
                <button onClick={() => setAgregar(agregrar + 1)}>Incrementar</button>
                <button onClick={() => setAgregar(agregrar - 1)}>Decrementar</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div className="rows table">
                            {/* Template Carrito */}
                            <div id="template-carrito">
                                <tr>
                                    <th scope="row">{'1' || id}</th>
                                    <td>{'Produto' || title}</td>
                                    <td>{'0' || cantidad}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm">
                                            +
                                        </button>
                                        <button className="btn btn-danger btn-sm">
                                            -
                                        </button>
                                    </td>
                                    <td>$ <span>{'500' || precio}</span></td>
                                </tr>
                            </div>
                        </div>
                    </tbody>

                    <tfoot>
                        <tr>
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

                            {/* <TemplateFooter /> */}

                            <th scope="row" colspan="5">Carrito vacío - Comience a Comprar</th>
                        </tr>
                    </tfoot>
                </table>
                <h2 className="Display-2 text-center">Cards</h2>
                <div className="rows" id="cards">
                    {productos.map(producto => (
                        /* Template Card */
                        <div key={producto._id} className="col-sm-12  col-md-4">
                            <div className="card">
                                <div className="card body">
                                    <img src="" alt="" className="img-thumbnail" />
                                    <h2>{producto.name}</h2>
                                    <p>Id:{producto._id}</p>
                                    <h3>{producto.price}</h3>
                                    <h3>Cantidad {productoCantidad + cantidad}</h3>
                                    <p>{producto.description}</p>
                                    <button className="btn btn-dark" data-id={producto._id}
                                        onClick={() => setCarrito(producto)}>Comprar</button>
                                    <button className="btn btn-dark" data-id={producto._id}
                                        onClick={() => console.log(carrito)}>Mostrar</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default carrito
