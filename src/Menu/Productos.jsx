import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState({
        Nombre: '',
        Precio: '',
        Descripcion: '',
        CategoriaID: '',
    });

    const [editProducto, setEditProducto] = useState(null);

    // Función para obtener todos los productos
    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/listarp');
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener productos", error);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    // Función para manejar el cambio en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editProducto) {
            setEditProducto({ ...editProducto, [name]: value });
        } else {
            setNuevoProducto({ ...nuevoProducto, [name]: value });
        }
    };

    // Función para insertar un producto
    const handleInsert = async (e) => {
      e.preventDefault();
      console.log('Datos a enviar:', nuevoProducto);  // Verifica los datos antes de enviarlos
      try {
          await axios.post('http://localhost:3000/producto', nuevoProducto);
          fetchProductos();
          setNuevoProducto({ Nombre: '', Precio: '', Descripcion: '', CategoriaID: '' });
      } catch (error) {
          console.error('Error al agregar el producto', error);
      }
  };
  

    // Función para activar el modo de edición
    const handleEditClick = (producto) => {
        setEditProducto(producto);
    };

    // Función para actualizar un producto
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
          await axios.put(`http://localhost:3000/producto/${editProducto.ProductoID}`, editProducto);
          fetchProductos();  // Actualiza la lista de productos después de actualizar
          setEditProducto(null);
      } catch (error) {
          console.error('Error al actualizar el producto', error);
      }
  };

    // Función para eliminar un producto
    const handleDelete = async (productoID) => {
      try {
          await axios.delete(`http://localhost:3000/producto/${productoID}`);
          fetchProductos();  // Actualiza la lista de productos después de eliminar
      } catch (error) {
          console.error('Error al eliminar el producto', error);
      }
  };

    return (
        <div className="container">
            <h1>Gestión de Productos</h1>
            {/* Formulario para insertar o editar */}
            <form onSubmit={editProducto ? handleUpdate : handleInsert}>
                <input
                    type="text"
                    name="Nombre"
                    placeholder="Nombre"
                    value={editProducto ? editProducto.Nombre : nuevoProducto.Nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="Precio"
                    placeholder="Precio"
                    value={editProducto ? editProducto.Precio : nuevoProducto.Precio}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Descripcion"
                    placeholder="Descripción"
                    value={editProducto ? editProducto.Descripcion : nuevoProducto.Descripcion}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="CategoriaID"
                    placeholder="ID de Categoría"
                    value={editProducto ? editProducto.CategoriaID : nuevoProducto.CategoriaID}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{editProducto ? 'Actualizar Producto' : 'Agregar Producto'}</button>
                {editProducto && <button onClick={() => setEditProducto(null)}>Cancelar</button>}
            </form>

            {/* Tabla de productos */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>ID de Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.ProductoID}>
                            <td>{producto.Nombre}</td>
                            <td>{producto.Precio}</td>
                            <td>{producto.Descripcion}</td>
                            <td>{producto.CategoriaID}</td>
                            <td>
                                <button onClick={() => handleEditClick(producto)}>Editar</button>
                                <button onClick={() => handleDelete(producto.ProductoID)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Productos;
