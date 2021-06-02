import LayoutMenu from "../../components/Layout/LayoutMenu/LayoutMenu";
import useHandleMusic from "../../hooks/useHandleMusic";
import Link from "next/link";
import { server } from "../../config/index";

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${server}/api/musica`);
    const { data } = await res.json();
    console.log("Sucess");
    return {
      props: { musicas: data },
    };
  } catch (error) {
    console.log(error);
  }
};

function products({ musicas }) {
  const { deleteMusic } = useHandleMusic();
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
        </div>
      </div>
    </LayoutMenu>
  );
}

export default products;
