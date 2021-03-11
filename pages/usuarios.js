import React from 'react'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: {usuarios: data}
    }
}

function usuarios({usuarios}) {
    return (
        <div>
            <h1>Todos Los Usuarios</h1>
            {usuarios.map(usuario => (
                <div key={usuario.id}>
                    <h2>Nombre</h2>
                    <h3>{usuario.name}</h3>
                    <h2>Email</h2>
                    <h3>{usuario.email}</h3>
                </div>
            ))}
        </div>
    )
}

export default usuarios
