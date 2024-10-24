import React, { useEffect, useState } from 'react';
import './Productos.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:3000/listarp";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log("Productos recibidos:", response.data);
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
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
        <h1 className="title">Listado de Productos</h1>

        {productos.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID Producto</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.ProductoID}</td>
                  <td>{producto.Nombre}</td>
                  <td>{producto.Descripcion}</td>
                  <td>{producto.Precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </div>
  );
};

export default Productos;