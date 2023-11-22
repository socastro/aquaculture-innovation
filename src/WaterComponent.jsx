import React, { useEffect, useState } from 'react';
import './stylesheets/waterwidget.css' // Asegúrate de ajustar el nombre del archivo de estilos

const WaveProgress = ({ count }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 1;
        if (newPercent === count) {
          clearInterval(interval);
        }
        return newPercent;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box">
      <div className="percent">
        <div className="percentNum" id="count">
          {percent}
        </div>
        <div className="percentB">%</div>
      </div>
      <div id="water" className="water">
        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
          <use xlinkHref="#wave"></use>
        </svg>
      </div>
    </div>
  );
};

export default WaveProgress;
