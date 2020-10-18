import React from 'react';

const Titulo = ({ tipo, titulo }) => {
    switch(tipo){
        case 'h1':
    default:
        return( <h1 className="Titulo">{titulo}</h1>)
    }
}

export default Titulo;