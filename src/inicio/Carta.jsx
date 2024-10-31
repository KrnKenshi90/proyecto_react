import React from 'react';
import './Carta.css';
import { useNavigate } from "react-router-dom";

const Carta = () => {
    const navigate = useNavigate();
    const navegacion = (ruta) =>{
        navigate(ruta);
    }
  return (
    <div className="wrap">
      <button className="back-button" onClick={()=>navegacion("/")}>
        Volver a la página principal
      </button>

      <section className="wrap-title-section">
        <h2>SOPAS</h2>
      </section>
      <div className="wrap column-2 carta">
        <Plato nombre="Sopa Simple" precio="S/10.00" imagen="img2/sopa simple.jpg" />
        <Plato nombre="Sopa de Pato Especial" precio="S/17.00" imagen="img2/pato especial.jpg" />
        <Plato nombre="Sopa Wantán Especial" precio="S/12.00" imagen="img2/wantan especial.jpg" />
        <Plato nombre="Sopa Pac Pow" precio="S/12.00" imagen="img2/pac pow.jpg" />
        <Plato nombre="Sopa Fuchifú" precio="S/11.00" imagen="img2/fuchifu.jpg" />
        <Plato nombre="Sustancia Especial" precio="S/13.00" imagen="img2/sustancia especial.jpg" />
        <Plato nombre="Sustancia de Pollo" precio="S/11.00" imagen="img2/sustancia de pollo.jpg" />
        <Plato nombre="Sustancia de Criadilla" precio="s/15.00" imagen="img2/sustancia de criadilla.jpg"/>
      </div>

      <section className="wrap-title-section">
        <h2>TALLARINES</h2>
      </section>
      <div className="wrap column-2 carta">
        <Plato nombre="Tallarín con Pollo" precio="S/20.00" imagen="img2/tallarin con pollo.jpg" />
        <Plato nombre="Tallarín con Chancho" precio="S/20.00" imagen="img2/tallarin con chancho.jpg" />
        <Plato nombre="Tallarín con Res" precio="S/20.00" imagen="img2/tallarin con res.jpg" />
        <Plato nombre="Tallarín Mixto" precio="S/22.00" imagen="img2/tallarin mixto.jpg" />
        <Plato nombre="Combinado" precio="S/25.00" imagen="img2/combinado.jpg" />
        <Plato nombre="Tallarín con Fideo Especial" precio="S/25.00" imagen="img2/tallarin.jpg" />
      </div>

      <section className="wrap-title-section">
        <h2>CHANCHO</h2>
      </section>
      <div className="wrap column-2 carta">
        <Plato nombre="Chancho Asado con Nabo" precio="S/22.00" imagen="img2/chancho.jpg" />
        <Plato nombre="Chancho con Verdura" precio="S/20.00" imagen="img2/chancho con verdura.jpg" />
        <Plato nombre="Chancho al Ajo" precio="S/20.00" imagen="img2/chancho al ajo.jpg" />
        <Plato nombre="Chancho con Tamarindo" precio="S/22.00" imagen="img2/chancho con tamarindo.jpg" />
      </div>

      <section className="wrap-title-section">
        <h2>POLLO</h2>
      </section>
      <div className="wrap column-2 carta">
        <Plato nombre="Pollo con Verdura" precio="S/20.00" imagen="img2/pollo.jpg" />
        <Plato nombre="Pollo con Orejas Chinas" precio="S/25.00" imagen="img2/pollo con verdura.jpg" />
        <Plato nombre="Pollo con Tausí" precio="S/20.00" imagen="img2/pollo con tausi.jpg" />
        <Plato nombre="Pollo con Mensí" precio="S/20.00" imagen="img2/pollo con mensi.jpg" />
        <Plato nombre="Pollo Entomatado" precio="S/20.00" imagen="img2/pollo entomatado.jpg" />
        <Plato nombre="Pollo con Curri" precio="S/20.00" imagen="img2/pollo con curry.jpg" />
      </div>

      <section className="wrap-title-section">
        <h2>TORTILLAS</h2>
      </section>
      <div className="wrap column-2 carta">
        <Plato nombre="Tortilla de Res" precio="S/15.00" imagen="img2/tortilla de res.jpg" />
        <Plato nombre="Tortilla de Pollo" precio="S/15.00" imagen="img2/tortilla de pollo.jpg" />
        <Plato nombre="Tortilla de Chancho" precio="S/15.00" imagen="img2/tortilla.png" />
      </div>

    </div>
  );
};

const Plato = ({ nombre, precio, imagen }) => {
  return (
    <div className="plato-carta">
      <div className="img-plato-carta">
        <img src={imagen} alt={nombre} width="200" height="150" />
      </div>
      <div className="title-plato-carta">
        <h4>{nombre}</h4>
      </div>
      <div className="precio-plato-carta">
        <span>{precio}</span>
      </div>
    </div>
  );
};

export default Carta;
