import { Fragment } from "react"
import ReactDOM from 'react-dom'
import Cards from "./Cards"
import { useModalContext } from "../context/modal-context"
import './modal.css'



const Modal = ({className, children}) => {
    const {showModal, closeModalHandler} = useModalContext();

  return (
    <Fragment>
        {
            showModal && ReactDOM.createPortal(<>
                <section id="backdrop" onClick={closeModalHandler}></section>
                <Cards className={className}>{children}</Cards>
                </>, document.querySelector('#overlays'))
        }
    </Fragment>
  )
}

export default Modal