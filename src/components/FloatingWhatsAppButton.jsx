import './FloatingWhatsAppButton.scss';

function FloatingWhatsAppButton() {
  return (
    <div className="whatsapp-float">
      <a
        href="https://wa.me/593999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <div className="whatsapp-message">
          ¿Te gustaría conocer más de nuestros servicios?
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default FloatingWhatsAppButton;
