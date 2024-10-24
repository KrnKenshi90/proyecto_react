import React from 'react';
import './Acceder.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const url = "http://localhost:3000/listarc"

const Acceder = () => {
  const formRef = React.useRef()
  const navigate = useNavigate();
    const navegacion = (ruta) =>{
        navigate(ruta);
    }
const login = (e) => {
  e.preventDefault()
  const formData = new FormData(formRef.current)
  const data = Object.fromEntries(formData)
  alert (data.user)
  axios.post(url,{data:"Se envio datos"}).then((response)=>{
    console.log(response.data)
  }).catch((error)=>{
    console.log(error)
  })
}
  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title" style={{ textDecoration: 'underline' }}>Inicio de Sesión</h3>
        <form ref={formRef} onSubmit={login}>
          <div className="input-group">
            <strong><label>Usuario</label></strong>
            <input type="text" name='user' />
          </div>
          <div className="input-group">
            <strong><label>Contraseña</label></strong>
            <input type="password" name='password'/>
          </div>
          <div className="input-group">
            <strong><center><label>¿No tienes una cuenta?</label></center></strong>
            <strong><center><a onClick={()=>navegacion("/registro")} className="enlace">Regístrate</a></center></strong>
          </div>
          <strong>
            <button type='submit' className="login-button" >
              Ingresar
            </button>
          </strong>
        </form>
      </div>
    </div>
  );
};

export default Acceder;
