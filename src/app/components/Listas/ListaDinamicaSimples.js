import React  from 'react';
import InputSimples from '../Inputs/Simples'
import ButtonSimples from '../Button/Simples'



class ListaDinamicaSimples extends React.Component {
    state = { 
        texto: ""
    }
    
    onAdd(){
        const {texto} = this.state
        this.props.onAdd(texto)
        this.setState({ texto:""})
    }
    onChangeInput = (ev) => this.setState({texto: ev.target.value})

    render(){
            const { dados   , onRemove} = this.props
            return(
                <div className="flex vertical">
                    {
                        dados.map((item, idx) =>(
                            <div key={idx} className="flex horizontal"> 
                                 <div className="flex flex-start">
                                    <span>{item}</span>
                                 </div>
                                 {
                                    onRemove && 
                                        (
                                            <div className=" flex flex-center">
                                                <ButtonSimples 
                                                type="danger" 
                                                label=" - " 
                                                onClick={()=> onRemove(idx)} />
                                            </div>
                                        )
                                 }
                            </div>
                        ))
                    }
                    <div className="flex">
                        <div className="flex flex-start">
                            <InputSimples
                                type="text"
                                value={this.texto}
                                onChange={this.onChangeInput} 
                                />
                                
                        </div>
                        <div className=" flex flex-center">
                            <ButtonSimples
                                type="success"
                                onClick={this.onAdd}
                                label=" + " />
                        </div>
                    </div>
                </div>
            )
    }
}

export default ListaDinamicaSimples