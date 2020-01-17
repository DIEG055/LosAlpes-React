import React from 'react';

import Modal from './Modal';

function DeleteCattleModal(props) {
  return (
    <Modal isOpen={props.modalIsOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Estas Seguro?</h1>
        <p>Vas a eliminar el Animal #111</p>

        <div>
          <button onClick={props.onDeleteTrip} className="btn btn-danger mr-4">
            Eliminar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteCattleModal;
