import React from 'react'

const Checkbox = ({ label, value, onChange }) =>(
    <div className="Checkbox">
        <input  type="checkbox" checked={value} onChange={onChange}/>
        <span>{label}</span>

    </div>
)

export default Checkbox