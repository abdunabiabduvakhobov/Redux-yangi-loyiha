import React from 'react'

const TextArea = ({ label, state, setState, height = '100px' }) => {
    return (
        <div className="form-floating">
            <textarea
                className="form-control"
                value={state}
                onChange={e => setState(e.target.value)}
                placeholder={label}
                style={{ height: height }}
                id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea">{label}</label>
        </div>
    )
}

export default TextArea