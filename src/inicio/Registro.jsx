import React from 'react';
import './Registro.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const url = "http://localhost:3000/registro";

const Registro = () => {
  const formRef = React.useRef();
  const navigate = useNavigate();
    const navegacion = (ruta) =>{
        navigate(ruta);
    }
  const register = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    alert (data)
    if (data.password = data.repassword){
      axios.post(url,{data}).then((response)=>{
        console.log(response.data,"registro")
      }).catch((error)=>{
        console.log(error)
      })
    }else{
      console.log('las contraseñas no son parecidas')
    }

  }
  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title" style={{ textDecoration: 'underline' }}>Registro</h3>
        <form ref={formRef} onSubmit={register}>
          <div className="input-group">
            <strong><label>Usuario</label></strong>
            <input type="text" name='user'/>
          </div>
          <div className="input-group">
            <strong><label>Contraseña</label></strong>
            <input type="password" name='password'/>
          </div>
          <div className="input-group">
            <strong><label>Confirme su contraseña</label></strong>
            <input type="password" name='repassword'/>
          </div>
          <strong>
          <div className="input-group">
            <strong><label>Rol:</label></strong>
            <select name="roles" id="lang">
            <option value="Admin">Admin</option>
            <option value="User1">User</option>
            </select>
          </div>
            <button type="button" className="login-button">
              <a onClick={()=>navegacion("/acceder")}>Iniciar Sesión</a>
            </button>
            <button type="submit" className="login-button">
              Registrar
            </button>
          </strong>
        </form>
      </div>
    </div>
  );
};

export default Registro;
