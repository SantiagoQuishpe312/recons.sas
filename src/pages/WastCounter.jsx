import React, { useEffect, useState } from 'react';
import './WastCounter.scss';

const items = [
  {
    label: 'PET',
    img: 'https://cdn-icons-png.flaticon.com/512/3553/3553549.png',
    value: 1240,
    factor: 1.5 // kg CO2 por kg reciclado (estimado)
  },
  {
    label: 'Papel/Cartón',
    img: 'https://cdn-icons-png.flaticon.com/512/4022/4022065.png',
    value: 980,
    factor: 1.3
  },
  {
    label: 'Aluminio',
    img: 'https://cdn-icons-png.flaticon.com/512/2329/2329853.png',
    value: 720,
    factor: 9.0
  }
];

const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 10));

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [end]);

  return <span className="counter">{count.toLocaleString()}</span>;
};

const WastCounter = () => {
  const totalCarbon = items.reduce((acc, item) => acc + item.value * item.factor, 0);

  return (
    <section className="wast-counter">
      <h2>♻ Nuestro Impacto Ambiental</h2>
      <div className="cards">
        {items.map((item, i) => (
          <div key={i} className="card">
            <div className="image-wrapper">
              <img src={item.img} alt={item.label} />
            </div>
            <div className="info">
              <AnimatedCounter end={item.value} />
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carbon-section">
        <h3>🌍 Huella de Carbono Evitada</h3>
        <p>
          Hemos evitado aproximadamente <strong>{totalCarbon.toFixed(2)}</strong> kg de CO<sub>2</sub> al reciclar estos materiales.
        </p>
        <small>
          Cálculo estimado: ∑ (kg reciclados × factor de CO₂ evitado por material)
        </small>
      </div>
    </section>
  );
};

export default WastCounter;
