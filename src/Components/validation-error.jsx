import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ValidationError = () => {
    const { error } = useSelector(state => state.auth)

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(',')
            return `${name} - ${msg}`
        })
    }, [error])



    return (
        error !== null && errorMessage().map(error => (
            <div className="alert w-[320px] m-1 p-1 text-start alert-danger" key={error} role="alert">
                {error}
            </div>

        ))
    )


}

export default ValidationError