import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return (
        <div onClick={props.onClickCloseButton} className={classes.backdrop} />
    )
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal} >
            <div className={classes.content} >{props.children}</div>
        </div>
    )
}

const Modal = (props) => {

    const portalElement = document.getElementById('overlay')

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClickCloseButton={props.onClickCloseButton} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;