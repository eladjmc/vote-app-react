const Modal = ({ closeModal, messages }) => {

  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h2>Error</h2>
        <h3>{`${messages.join(', ')}`}.</h3>
        <button className='btn close-modal-btn' onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
