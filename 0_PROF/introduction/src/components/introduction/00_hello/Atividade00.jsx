import React, { Component } from 'react'

const Atividade00Function = () => {
    return (
        <div>
            <table border='1px'>
                <tbody>
                    <tr>
                        <td>Nome</td>
                        <td>Jefferson de Carvalho</td>
                    </tr>
                    <tr>
                        <td>Curso</td>
                        <td>Sistemas de Informação</td>
                    </tr>
                    <tr>
                        <td>Cidade</td>
                        <td>Natal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

class Atividade00Class extends Component {

    render() {
        return (
            <div>
                <table border='2px'>
                    <tbody>
                        <tr>
                            <td>Nome</td>
                            <td>Jefferson de Carvalho</td>
                        </tr>
                        <tr>
                            <td>Curso</td>
                            <td>Sistemas de Informação</td>
                        </tr>
                        <tr>
                            <td>Cidade</td>
                            <td>Natal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Atividade00Class