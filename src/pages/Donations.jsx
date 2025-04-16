import React, { useState } from 'react';
import Modal from '../components/modales/ModalDonacion';
import './Donations.scss';

function Donations() {
  // Estado para manejar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="donations" id="donaciones">
      <section className="donations__hero">
        <div className="donations__hero-content">
          <h1>Haz la Diferencia: Dona Hoy</h1>
          <p>Tu donación ayudará a crear un mundo más sostenible, contribuyendo al reciclaje y reutilización de materiales.</p>
          {/* Botón que abre el modal */}
         
        </div>
      </section>
      <div className="donations__content">
        <h2>Elige tu Monto de Donación</h2>

        <div className="donations__options">
          <button className="donations__btn">10 USD</button>
          <button className="donations__btn">50 USD</button>
          <button className="donations__btn">100 USD</button>
        </div>

        <p>O ingresa el monto que deseas donar:</p>
        <input type="number" placeholder="Monto en USD" className="donations__input" />

        <div className="donations__cta">
        <button className="donations__cta-btn" onClick={openModal}>
            Dona Ahora
          </button>        </div>

        <div className="donations__impact">
          <h3>¿Cómo se Usarán tus Donaciones?</h3>
          <p>Con tu contribución, ayudamos a mejorar la tecnología de clasificación de residuos y promover la sostenibilidad en todo el mundo.</p>
        </div>
        
      </div>
      {/* Usar el componente Modal y pasarle la información de la cuenta bancaria */}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>

      </Modal>
    </div>
  );
}

export default Donations;
