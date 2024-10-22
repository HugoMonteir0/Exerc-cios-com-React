import React from "react"

const Exercicio5 = (props) => {

    if (props.Estudante) {
        return <p>Vc é um estudante</p>

    } else  {
        return <p>Vc não é um estudante</p>
    }
}

export default Exercicio5