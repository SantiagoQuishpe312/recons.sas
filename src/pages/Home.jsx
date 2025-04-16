import './Home.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import p1 from '../assets/img/proyecto1.jpg';
import aiseLogo from '../assets/img/aise.png';
import asoLogo from '../assets/img/asociacion.png';
import laOfiLogo from '../assets/img/laofi.png';
function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__overlay">
          <div className="home__hero-content">
            {/* <h1>Bienvenido a un Futuro Ecológico</h1> */}
            {/* <p>Juntos podemos construir un mundo más sostenible 🌱</p> */}
            <br /><br />
            <h2>Te ayudamos desde la reparación de un interruptor hasta la construcción de la casa de tus sueños</h2>
            <Link to="/dashboards"><button className="home__btn">Nuestros Servicios</button></Link>

          </div>
        </div>
      </section>

      {/* Rentabilidad */}
      <section className="home__rentabilidad">
        <h2>Mejor rentabilidad para tu negocio</h2>
        <p>Incrementa la cantidad y la pureza del material seleccionado. Reduce las dificultades para la mano de obra y minimiza el gasto operativo.</p>
      </section>

      {/* IA */}
      <section className="home__ia">
        <h2>Soluciones basadas en IA</h2>
        <p>Robots con IA para la clasificación de residuos, adaptables, robustos y fiables.</p>
        <p><strong>Matías</strong> explica cómo la planta de RSU de Algimia, gestionada por Urbaser, automatizó la recuperación de reciclables en la línea de residuos.</p>
      </section>

      {/* Carrusel */}
      <section className="home__carrusel">
        <h2>Proyectos destacados</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img
              src={p1}
              alt="BIN"
            />
          </SwiperSlide>
          
        </Swiper>
      </section>

      {/* Casos prácticos */}
      <section className="home__materiales">
        <h2>Casos prácticos por material</h2>
        <p>Clases ilimitadas de residuos. Resuelto.</p>
        <div className="materiales-grid">
          <div className="material-card">📦 Papel y cartón</div>
          <div className="material-card">🔩 Metales no ferrosos</div>
          <div className="material-card">♻️ Plástico</div>
          <div className="material-card">📦 Envases de cartón</div>
          <div className="material-card">💻 RAEE</div>
        </div>
      </section>

      {/* Logos de aliados */}
      <section className="home__logos">
        <h2>Partnerships</h2>
        <div className="logos-grid">
          <a href='#'>
            <img
              src={aiseLogo}
              alt="Aliado 1 - AISE"
            />
          </a>
          <a href='https://ecuadoremprendedor.odoo.com/' target="_blank">
            <img
              src={asoLogo}
              alt="Aliado 2 - Asociación Ecuatoriana de Emprendedores"
            />
          </a>
          <a href='https://www.laofi.work/' target="_blank">
            <img
              src={laOfiLogo}
              alt="Aliado 3 - LaOfi"
            />
          </a>



        </div>


      </section>

      {/* CTA */}
      <section className="home__cta">
        <h2>¿Quieres explorar cómo la automatización podría mejorar el ambiente?</h2>
        <button className="home__btn">Habla con un experto</button>
      </section>
    </div>
  );
}

export default Home;
