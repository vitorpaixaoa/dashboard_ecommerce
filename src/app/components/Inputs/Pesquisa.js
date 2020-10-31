import React from 'react'

const Pesquisa = ({valor, onChange, placeholder, onClick}) =>(
    <div className="Pesquisa flex horizontal">
        <input value={valor} onChange={onChange} placeholder={placeholder}></input>
        <button>
            <i className="fas fa-search" onClick={onClick}></i>
        </button>

    </div>
)
export default Pesquisa;