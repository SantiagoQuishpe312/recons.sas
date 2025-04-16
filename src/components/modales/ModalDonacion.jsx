import React from 'react';
import './Modal.scss';

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h2>Información de la Cuenta Bancaria</h2>
        <p>Por favor, realiza tu donación utilizando los siguientes detalles:</p>
        <ul>
          <li><strong>Banco:</strong> Banco XYZ</li>
          <li><strong>Cuenta:</strong> 123-456-789</li>
          <li><strong>IBAN:</strong> ABCD123456789</li>
          <li><strong>SWIFT:</strong> XYZABCD</li>
        </ul>
        <p>Gracias por tu apoyo. Juntos podemos hacer un cambio.</p>
        {children}
        <button className="modal-close-btn" onClick={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
