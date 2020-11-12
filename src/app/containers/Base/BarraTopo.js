import React from 'react';
import { Link } from 'react-router-dom';

const BarraTopo = ()=> (
    <div className="Barra-topo flex horizontal  full-width">
        <div className="flex-1 flex flex-start">
                <a href="/">Ver loja</a>
        </div>
        <div className="flex-1 flex flex-end"> 
            <Link to="/login"> Sair </Link> <br/>
        </div>
    </div>
)

export default BarraTopo;