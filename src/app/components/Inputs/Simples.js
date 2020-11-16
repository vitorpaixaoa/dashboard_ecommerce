import React from 'react'

const InputSimples = ({ type, label, value, onChange, error }) =>(
    <div className="Input-Simples flex vertical">
       {label && (<label>{label}</label>)}
            { error && ( <small className="small-danger">{error}</small>) }
        <input
            type={type}
            value={value}
            className={`${error ? "input-error": "" }`}
            onChange={onChange}/>
    </div>
)

export default InputSimples