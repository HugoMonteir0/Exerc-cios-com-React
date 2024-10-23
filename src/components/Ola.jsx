import React from "react"

class Ola extends React.Component {
    render() {
        return (<>
            <h1>1 - Bem Vindo ao React!</h1>
            <h2>2 - Ola {this.props.nome}</h2>
        </>

        )

    }
}

export default Ola
