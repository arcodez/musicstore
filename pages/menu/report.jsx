import React from "react";
import LayoutMenu from "../../components/Layout/LayoutMenu/LayoutMenu";

function report() {
  return (
    <LayoutMenu>
      <div className="container mt-5">
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
                    {/*musicas.map((m) => (
                      <tr key={m._id}>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">{m.name} </td>
                        <td>1,450</td>
                        <td>550</td>
                        <br />
                        <Link href={`/menu/${m._id}/edit`}>
                          <a>
                            <button>Edit</button>
                          </a>
                        </Link>
                        <td>
                          <button
                            onClick={() => deleteMusic(m._id)}
                            className="tm-product-delete-link"
                          >
                            <i className="far fa-trash-alt tm-product-delete-icon" />
                          </button>
                        </td>
                      </tr>
                    ))*/}
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
