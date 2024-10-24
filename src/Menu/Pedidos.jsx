import React, { useEffect, useState } from 'react';
import './Pedidos.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:3000/listarpe"; 

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log("Pedidos recibidos:", response.data);
        setPedidos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los pedidos:", error);
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

      <div className="pedidos-container">
        <h1 className="title">Listado de Pedidos</h1>

        {pedidos.length > 0 ? (
          <table className="pedidos-table">
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>ID Cliente</th>
                <th>Fecha del Pedido</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido, index) => (
                <tr key={index}>
                  <td>{pedido.PedidoID}</td> 
                  <td>{pedido.ClienteID}</td>
                  <td>{new Date(pedido.FechaPedido).toLocaleDateString()}</td> 
                  <td>{pedido.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando pedidos...</p> 
        )}
      </div>
    </div>
  );
};

export default Pedidos;
