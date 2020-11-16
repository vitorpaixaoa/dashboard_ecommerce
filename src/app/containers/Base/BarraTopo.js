import React from 'react';

const BarraTopo = ({handleLogout})=> (
    <div className="Barra-topo flex horizontal  full-width">
        <div className="flex-1 flex flex-start">
                <a href="/" >Ver loja</a>
        </div>
        <div className="flex-1 flex flex-end"> 
            <a href="/" onClick={() => handleLogout()} > Sair </a>
        </div>
    </div>
)

export default BarraTopo;