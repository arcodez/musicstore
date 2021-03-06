import useHandleMusic from "../../../hooks/useHandleMusic";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/Input";
import { server } from "../../../config/index";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/api/musica/${id}`);
  const music = await res.json();
  const { data } = music;

  return { props: { music: data } };
}

function EditMusic({ music }) {
  const formValue = {
    name: music.name,
    autor: music.autor,
    price: music.price,
    album: music.album,
    audioUrl: music.audioUrl,
    audioUrlCompleto: music.audioUrlCompleto,
    imageUrl: music.imageUrl,
  };

  const { form, handleSubmit, handleChange, isSubmitting } =
    useHandleMusic(formValue);

  return (
    <Layout>
      <div className="container my-3 py-5">
        <center>
          <h1>Actulizar Musica</h1>
          <div>
            {isSubmitting ? (
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form- group">
                  <Input name="name" value={form.name} change={handleChange} />
                  <Input
                    name="autor"
                    value={form.autor}
                    change={handleChange}
                  />
                  <Input
                    name="price"
                    value={form.price}
                    change={handleChange}
                  />
                  <Input
                    name="album"
                    value={form.album}
                    change={handleChange}
                  />
                  <Input
                    name="audioUrl"
                    value={form.audioUrl}
                    change={handleChange}
                  />
                  <Input
                    name="audioUrlCompleto"
                    value={form.audioUrlCompleto}
                    change={handleChange}
                  />
                  <Input
                    name="imageUrl"
                    value={form.imageUrl}
                    change={handleChange}
                  />
                </div>
                <br />
                <center>
                  <button type="submit" className="btn btn-danger">
                    Update
                  </button>
                </center>
              </form>
            )}
          </div>
        </center>
      </div>
    </Layout>
  );
}

export default EditMusic;
