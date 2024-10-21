import React from 'react';
import './Acceder.css';

const Acceder = () => {
  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title" style={{ textDecoration: 'underline' }}>Inicio de Sesión</h3>
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
            <strong><center><label>¿No tienes una cuenta?</label></center></strong>
            <strong><center><a href="Registro.html" className="enlace">Regístrate</a></center></strong>
          </div>
          <strong>
            <button type="submit" className="login-button">
              <a href="inicio.html">Ingresar</a>
            </button>
          </strong>
        </form>
      </div>
    </div>
  );
};

export default Acceder;
