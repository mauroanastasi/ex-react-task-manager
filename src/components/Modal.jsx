import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({
    title,
    content,
    show = false,
    onClose = () => { },
    onConfirm = () => { }
}) => {
    return show && createPortal(
        <>
            <h2>{title}</h2>
            {content}
            <button onClick={onClose} >Annulla</button>
            <button onClick={onConfirm} >Conferma</button>
        </>
        , document.getElementById('modal-root')
    )
}

export default Modal
