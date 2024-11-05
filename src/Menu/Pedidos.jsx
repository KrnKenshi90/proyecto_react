import React, { useEffect, useState } from 'react';
import './Pedidos.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [nuevoPedido, setNuevoPedido] = useState({
    ClienteID: '',
    FechaPedido: '',
    Total: ''
  });
  const [editPedido, setEditPedido] = useState(null);
  const navigate = useNavigate();

  const fetchPedidos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/listarpe');
      setPedidos(response.data);
    } catch (error) {
      console.error("Error al obtener pedidos", error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editPedido) {
      setEditPedido({ ...editPedido, [name]: value });
    } else {
      setNuevoPedido({ ...nuevoPedido, [name]: value });
    }
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/pedido', nuevoPedido);
      fetchPedidos();
      setNuevoPedido({ ClienteID: '', FechaPedido: '', Total: '' });
    } catch (error) {
      console.error('Error al agregar el pedido', error);
    }
  };

  const handleEditClick = (pedido) => {
    setEditPedido(pedido);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/pedido/${editPedido.PedidoID}`, editPedido);
      fetchPedidos();
      setEditPedido(null);
    } catch (error) {
      console.error('Error al actualizar el pedido', error);
    }
  };

  const handleDelete = async (pedidoID) => {
    try {
      await axios.delete(`http://localhost:3000/pedido/${pedidoID}`);
      fetchPedidos();
    } catch (error) {
      console.error('Error al eliminar el pedido', error);
    }
  };

  const volverAPaginaPrincipal = () => {
    navigate('/');
  }

  return (
    <div className="full-screen-container">
      <button className="back-button" onClick={volverAPaginaPrincipal}>
        Volver a la página principal
      </button>

      <div className="pedidos-container">
        <h1 className="title">Gestión de Pedidos</h1>

        <form onSubmit={editPedido ? handleUpdate : handleInsert}>
          <input
            type="number"
            name="ClienteID"
            placeholder="ID Cliente"
            value={editPedido ? editPedido.ClienteID : nuevoPedido.ClienteID}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="FechaPedido"
            placeholder="Fecha del Pedido"
            value={editPedido ? editPedido.FechaPedido : nuevoPedido.FechaPedido}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="Total"
            placeholder="Total"
            value={editPedido ? editPedido.Total : nuevoPedido.Total}
            onChange={handleChange}
            required
          />
          <button type="submit">{editPedido ? 'Actualizar Pedido' : 'Agregar Pedido'}</button>
          {editPedido && <button onClick={() => setEditPedido(null)}>Cancelar</button>}
        </form>

        {pedidos.length > 0 ? (
          <table className="pedidos-table">
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>ID Cliente</th>
                <th>Fecha del Pedido</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.PedidoID}>
                  <td>{pedido.PedidoID}</td>
                  <td>{pedido.ClienteID}</td>
                  <td>{new Date(pedido.FechaPedido).toLocaleDateString()}</td>
                  <td>{pedido.Total}</td>
                  <td>
                    <button onClick={() => handleEditClick(pedido)}>Editar</button>
                    <button onClick={() => handleDelete(pedido.PedidoID)}>Eliminar</button>
                  </td>
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
