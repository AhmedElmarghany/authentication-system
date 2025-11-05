import styles from "../styles/Modal.module.css";


const Modal = ({ open, onClose, children }) => {
  if(!open) return null;
  return (
    <>
      {/* Overlay - clicking it closes the modal */}
      <div className={styles.overlay} onClick={onClose}/>
      {/* Modal content - prevents closing when clicking inside */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
         <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        {children}
      </div>
    </>
  )
}

export default Modal;