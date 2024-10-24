import React, { useEffect, useState } from 'react';
import './Categorias.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:3000/listarc";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log("Categorías recibidas:", response.data);
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  const volverAPaginaPrincipal = () => {
    navigate('/');
  }

  return (
    <div className="full-screen-container">
      <button className="back-button" onClick={volverAPaginaPrincipal}>
        Volver a la página principal
      </button>

      <div className="container">
        <h1 className="title">Listado de Categorías</h1>

        {categorias.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID Categoría</th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria, index) => (
                <tr key={index}>
                  <td>{categoria.CategoriaID}</td>
                  <td>{categoria.Nombre}</td>
                  <td>{categoria.Descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando categorías...</p>
        )}
      </div>
    </div>
  );
};

export default Categorias;