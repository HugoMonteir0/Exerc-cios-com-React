import React from "react"

const Saudacao = (props) => {
    if(props.condicao) {
        return <p>Ola, usuário</p>

    }else {
        return ("")
    }
}

export default Saudacao