import React from "react"

const Exerc9 = (props) => {
    return (
        <>
            <p>{props.nivel === "Iniciante" ? "Bem Vindo, iniciante" : props.nivel === "Intermediario" ? "Está progredindo" : "Parabens especialista!"}</p>
        </>
    )
}

export default Exerc9