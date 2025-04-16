import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './Contact.scss'; // O la ruta correspondiente a tu archivo SCSS

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes usar EmailJS o enviar los datos a una API
    console.log(formData);
    alert('Mensaje enviado con éxito!');
  };

  return (
    <section className="min-h-screen bg-white px-6 py-12 md:px-20 lg:px-40">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contáctanos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto */}
        <div className="contact-info">
          <div>
            <h2>Información de contacto</h2>
            <div className="address">
              <span>📍</span> <p>Quito, Ecuador</p>
            </div>
            <div className="phone">
              <span>📞</span> <p>+593 999 999 999</p>
            </div>
            <div className="email">
              <span>✉️</span> <p>contacto@aevision.com</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="social-links">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61575111474505" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/ae.vision_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/ae-vision9/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.tiktok.com/@ae.vision" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
