import React from 'react';

export const TextoDados = ({ chave, valor }) =>(
    <div className="Texto-Dados">
        <strong> {chave}:&nbsp;</strong>
        <span>{valor}</span>
    </div>
)
