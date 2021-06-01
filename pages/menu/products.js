import LayoutMenu from "../../components/Layout/LayoutMenu/LayoutMenu";
import useHandleMusic from "../../hooks/useHandleMusic";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/musica");
    const { data } = await res.json();
    return {
      props: { musicas: data },
    };
  } catch (error) {
    console.log(error);
  }
};

function products({ musicas }) {
  const { deleteMusic } = useHandleMusic();
  console.log(musicas);
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
                    {musicas.map((m) => (
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
                    ))}
                  </tbody>
                </table>
              </div>
              {/* table container */}
              <a
                href="/musica/new"
                className="btn btn-primary btn-block text-uppercase mb-3"
              >
                Add new Music
              </a>
              <button className="btn btn-primary btn-block text-uppercase">
                Delete selected products
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
              <h2 className="tm-block-title">Product Categories</h2>
              <div className="tm-product-table-container">
                <table className="table tm-table-small tm-product-table">
                  <tbody>
                    <tr>
                      <td className="tm-product-name">Product Category 1</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 2</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 3</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 4</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 5</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 6</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 7</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 8</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 9</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 10</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 11</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* table container */}
              <button className="btn btn-primary btn-block text-uppercase mb-3">
                Add new category
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutMenu>
  );
}

export default products;
