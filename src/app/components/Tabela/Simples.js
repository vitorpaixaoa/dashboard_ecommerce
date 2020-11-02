import React from 'react'
import {Link} from 'react-router-dom'

const TabelaSimples = ({ cabecalho, dados}) =>(
    <div className="TabelaSimples">
        <table className="simples">
            <thead>
                <tr>
                    {
                        cabecalho.map((item, idx) =>(
                            <th key={idx}> {item}</th>
                        )) 
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dados.map((linha,idx)=>(
                        <tr key={idx}>
                            {
                               cabecalho.map((item, index) => (
                                    <td key={index}> {linha[item] || "" } </td>)
                                )
                            }
                            {
                                linha["botaoDeDetalhes"] && (
                                    <td>
                                        <Link to={linha["botaoDeDetalhes"]}>
                                            <button>
                                                DETALHES
                                            </button>
                                        </Link>
                                    </td>
                                )
                            }

                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
)

export default TabelaSimples