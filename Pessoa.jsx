import React from "react"

const Pessoa = (props) => {

    if(props.Idade >= 18) {
        return <p>Vc é adulto</p>

    }else  {
        return ("Vc é menor de idade")
    }
        
    }

    export default Pessoa