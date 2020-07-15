import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';


const Errors = () => {
    const alert = useAlert()
    useEffect(() => {
        alert.show('hello')
    })
    return (
        <></>
    )
}

export default Errors;
