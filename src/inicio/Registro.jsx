import React from 'react';
import './Registro.css';

const Registro = () => {
  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title" style={{ textDecoration: 'underline' }}>Registro</h3>
        <form>
          <div className="input-group">
            <strong><label>Usuario</label></strong>
            <input type="text" />
          </div>
          <div className="input-group">
            <strong><label>Contraseña</label></strong>
            <input type="password" />
          </div>
          <div className="input-group">
            <strong><label>Confirme su contraseña</label></strong>
            <input type="password" />
          </div>
          <strong>
            <button type="submit" className="login-button">
              <a href="Acceder.html">Iniciar Sesión</a>
            </button>
          </strong>
        </form>
      </div>
    </div>
  );
};

export default Registro;
