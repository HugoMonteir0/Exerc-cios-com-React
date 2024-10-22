import React from "react"

const Exerc6 = (props) => {
    if(props.nota >= 90) {
        return <p>Excelente!</p>
    } else if (props.nota > 69 ) {
        return <p>Bom!</p>
    } else {
        return <p>Precisa melhorar!</p>
    }
}

export default Exerc6