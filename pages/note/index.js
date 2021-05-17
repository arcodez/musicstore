import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/note");
    const { data } = await res.json();
    return {
      props: { notes: data },
    };
  } catch (error) {
    console.log(error);
  }
};

function notas({ notes }) {
  return (
    <Layout>
      <br />
      <br />
      <br />

      <div className="container">
        {notes.map((note) => (
          <div key={note._id} className="container mt-5">
            <Link href={`/note/${note._id}`}>
              <a>
                <h3>{note.title}</h3>
              </a>
            </Link>
            <p>{note.description}</p>
            <Link href={`/note/${note._id}`}>
              <button>View</button>
            </Link>
            <Link href={`/note/${note._id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default notas;
