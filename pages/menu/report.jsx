import React from "react";
import LayoutMenu from "../../components/Layout/LayoutMenu/LayoutMenu";
import { server } from "../../config";
import Link from "next/link";

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${server}/api/factura`);
    const facturas = await res.json();
    const { data } = facturas;

    return {
      props: { facturas: data },
    };
  } catch (error) {
    console.log(error);
  }
};

function report({ facturas }) {
  console.log(facturas);
  return (
    <LayoutMenu>
      <div className="container mt-5">
        <h1 className="text-white">Facturas o Reportes</h1>
        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-products">
              <div className="tm-product-table-container">
                <table className="table table-hover tm-table-small tm-product-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">PRODUCT NAME</th>
                      <th scope="col">UNIT SOLD</th>
                      <th scope="col">IN STOCK</th>
                      <th scope="col">EXPIRE DATE</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facturas.map((f) => (
                      <tr key={f._id}>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">{f.productos.name} </td>
                        <td>1,450</td>
                        <td>550</td>
                        <br />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href="/musica"
                className="btn btn-primary btn-block text-uppercase mb-3"
              >
                Todas las Facturas
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutMenu>
  );
}

export default report;
