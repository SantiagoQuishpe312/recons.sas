import './About.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aiseLogo from '../assets/img/aise.png';
import asoLogo from '../assets/img/asociacion.png';
import laOfiLogo from '../assets/img/laofi.png';
import AlejandroFoto from '../assets/img/foto1.jpg'
import KathyFoto from '../assets/img/foto2.jpg'
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <header className="about__hero">
        <div className="about__hero-content" data-aos="fade-up">
          <h1>Convertir los residuos del mundo en recursos</h1>
          <p>
            Tradicionalmente, el coste de clasificar los recursos preciosos ha sido mayor que el valor obtenido de venderlos.
            Esto cambia hoy en día, gracias a la tecnología innovadora, basada en datos, que realiza la tarea de clasificar flujos de residuos – de forma más rápida, más inteligente y más fiable.
          </p>
        </div>
      </header>

      <main className="about__content">
        <section className="about__section" data-aos="fade-up">
          <div className="about__image">
            <img src={AlejandroFoto} alt="Clasificación de residuos" />
          </div>
          <div className="about__text">
            <h2>Clasificación inteligente de residuos</h2>
            <p>
              BIN El basurero con clasificación inteligente de residuos es
              un dispositivo innovador diseñado para facilitar el reciclaje mediante el uso de tecnologías avanzadas de reconocimiento acústico.
              Este sistema utiliza sensores de sonido y algoritmos de inteligencia artificial para identificar el tipo de residuo que se deposita,
              basándose en el sonido que produce al caer o al ser arrojado dentro del contenedor.
            </p>
          </div>
        </section>
        <section className="about__section" data-aos="fade-up">
        <div className="about__text">
            <h2>Clasificación inteligente de residuos</h2>
            <p>
              BIN El basurero con clasificación inteligente de residuos es
              un dispositivo innovador diseñado para facilitar el reciclaje mediante el uso de tecnologías avanzadas de reconocimiento acústico.
              Este sistema utiliza sensores de sonido y algoritmos de inteligencia artificial para identificar el tipo de residuo que se deposita,
              basándose en el sonido que produce al caer o al ser arrojado dentro del contenedor.
            </p>
          </div>
          <div className="about__image">
            <img src={KathyFoto} alt="Clasificación de residuos" />
          </div>
          
        </section>

        <section className="about__section about__mission" data-aos="fade-up">
          <div className="about__mission-content">
            <h2>Valores y misión</h2>
            <p>Desarrollar tecnologías avanzadas que impulsen
              un futuro más inteligente y sustentable,
              equilibrando el progreso con la responsabilidad
              ambiental, a través de productos y experiencias
              educativas</p>
            <p>
              Ser un referente global en
              soluciones tecnológicas
              sostenibles, liderando el cambio
              hacia un mundo más consciente
              mediante innovación, diseño
              funcional y educación ecológica
            </p>

            <a href="#contacto" className="btn-mission">
              Conozca más
            </a>
          </div>
        </section>

        <section className="about__section text__section" data-aos="fade-up">
          <h2>Partner de confianza. Resuelta.</h2>
          <p>
            En combinación con un apoyo continuo de principio a fin, le ayudaremos a beneficiarse de las soluciones correctas para sus necesidades.
          </p>
        </section>

        <section className="about__section text__section" data-aos="fade-up">
          <h2>Tecnología de vanguardia</h2>
          <p>
            Recycleye en WasteNet ayuda a modernizar y a optimizar las operaciones de su planta de reciclaje de materiales.
            Es rápida, fácil de renovar y con una buena relación coste-eficacia.
          </p>
        </section>

        <section className="about__section" data-aos="fade-up">
          <h2>Partnerships</h2>
          <div className="logos-grid">
            <a href="#">
              <img src={aiseLogo} alt="Aliado 1 - AISE" />
            </a>
            <a href="https://ecuadoremprendedor.odoo.com/" target="_blank" rel="noopener noreferrer">
              <img src={asoLogo} alt="Aliado 2 - Asociación Ecuatoriana de Emprendedores" />
            </a>
            <a href="https://www.laofi.work/" target="_blank" rel="noopener noreferrer">
              <img src={laOfiLogo} alt="Aliado 3 - LaOfi" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
