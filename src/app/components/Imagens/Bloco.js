import React from 'react';

class BlocoImagem extends React.Component {
    render(){
        const { handleSubmit, imagens, onRemove} = this.props
        return(
            <div className="Bloco-Imagem">
                <div>
                    <input type="file" onChange={handleSubmit}/>
                </div>
                <div className="imagens-container">
                    {
                        imagens.map((src, idx) => (
                            <div
                                className="imagem-container"
                                style={{backgroundImage: `url("${src}")`}}
                                key={idx}> 
                                    <div className="imagem-remover" onClick={()=> onRemove(idx)}>
                                        <span>{"-"}</span>
                                    </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BlocoImagem