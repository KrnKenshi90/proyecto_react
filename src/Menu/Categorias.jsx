import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categorias.css';
import { useNavigate } from 'react-router-dom';

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [nuevaCategoria, setNuevaCategoria] = useState({
        Nombre: '',
        Descripcion: '',
    });
    const [editCategoria, setEditCategoria] = useState(null);
    const navigate = useNavigate();

    const fetchCategorias = async () => {
        try {
            const response = await axios.get('http://localhost:3000/listarc');
            setCategorias(response.data);
        } catch (error) {
            console.error("Error al obtener categorías", error);
        }
    };

    useEffect(() => {
        fetchCategorias();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editCategoria) {
            setEditCategoria({ ...editCategoria, [name]: value });
        } else {
            setNuevaCategoria({ ...nuevaCategoria, [name]: value });
        }
    };

    const handleInsert = async (e) => {
        e.preventDefault();
        console.log('Datos a enviar:', nuevaCategoria);
        try {
            await axios.post('http://localhost:3000/categoria', nuevaCategoria);
            fetchCategorias();  
            setNuevaCategoria({ Nombre: '', Descripcion: '' });
        } catch (error) {
            console.error('Error al agregar la categoría', error);
        }
    };

    const handleEditClick = (categoria) => {
        setEditCategoria(categoria);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/categoria/${editCategoria.CategoriaID}`, editCategoria);
            fetchCategorias();
            setEditCategoria(null);
        } catch (error) {
            console.error('Error al actualizar la categoría', error);
        }
    };

    const handleDelete = async (categoriaID) => {
        try {
            await axios.delete(`http://localhost:3000/categoria/${categoriaID}`);
            fetchCategorias();
        } catch (error) {
            console.error('Error al eliminar la categoría', error);
        }
    };

    const volverAPaginaPrincipal = () => {
        navigate('/');
    };

    return (
        <div className="full-screen-container">
            <button className="back-button" onClick={volverAPaginaPrincipal}>
                Volver a la página principal
            </button>

            <div className="container">
                <h1 className="title">Gestión de Categorías</h1>

                <form onSubmit={editCategoria ? handleUpdate : handleInsert}>
                    <input
                        type="text"
                        name="Nombre"
                        placeholder="Nombre"
                        value={editCategoria ? editCategoria.Nombre : nuevaCategoria.Nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="Descripcion"
                        placeholder="Descripción"
                        value={editCategoria ? editCategoria.Descripcion : nuevaCategoria.Descripcion}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">{editCategoria ? 'Actualizar Categoría' : 'Agregar Categoría'}</button>
                    {editCategoria && <button onClick={() => setEditCategoria(null)}>Cancelar</button>}
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Categoría</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.CategoriaID}>
                                <td>{categoria.CategoriaID}</td>
                                <td>{categoria.Nombre}</td>
                                <td>{categoria.Descripcion}</td>
                                <td>
                                    <button onClick={() => handleEditClick(categoria)}>Editar</button>
                                    <button onClick={() => handleDelete(categoria.CategoriaID)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Categorias;
