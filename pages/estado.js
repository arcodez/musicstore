import React, { useState, useEffect } from 'react'

/* Ejemplo de UseEffects */
function estado() {
    useEffect(() => {
        if(contador > 1) {
            alert("Es a Mayor a 1")
        }
        return () => {
            cleanup
        }
    }, [estado])
    

    /* Ejemplo de useState */
    const [contador, setContador] = useState(2)
    
    return (
        <div>
            <center>
                <h2>{contador}</h2>
                <button onClick={() => setContador(contador * 2)}>Incrementar</button>
                <button onClick={() => setContador(contador - 100)}>Quitar 100</button>
            </center>
        </div>
    )
}

export default estado
