import "./principal2.css"
import { useNavigate } from "react-router-dom";

const Principal = () =>{
    const navigate = useNavigate();
    const navegacion = (ruta) =>{
        navigate(ruta);
    }
    return (
        <>
        <div className="wrap-header-hero">
        <header className="main-header">
            <div className="wrap-logo-header">
                <div className="logo-header">
                    <img src="img/logo peruchi.png" alt="Logo Chifa Peruchi"/>
                </div>
            </div>
            <div className="header-wrap">
                <div className="wrap-nav-header">
                    <nav className="nav-header">
                        <input type="checkbox" id="check"/>
                        <label for="check" className="checkbtn">
                            <i className="toggle-menu">
                                <img src="data:image/svg+xml;base64..." />
                            </i>
                        </label>
                        <ul className="main-menu">
                            <li className="menu-item"><a onClick={()=>navegacion("/categorias")}>Categorias</a></li>
                            <li className="menu-item"><a onClick={()=>navegacion("/productos")}>Productos</a></li>
                            <li className="menu-item"><a onClick={()=>navegacion("/pedidos")}>Pedidos</a></li>
                            <li className="menu-item"><a onClick={()=>navegacion("/carta")}>Menú</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <section className="hero-home-page">
                <div className="wrap-hero-home-page">
                    <h1>Chifa Peruchi</h1>
                    <p>Historia, Sabro y Tradición eso aqui en Chifa Peruchi</p>
                </div>
            </section>

        </div>
        <main className="main-section">
            
        
   
    <section className="wrap section">
        <div className="wrap-title-section">
            <h2>Comida Exquisita</h2>
        </div>
        <div className="column-4 columns">
            <div style={{background:"url(img/tallarin.jpg)center", backgroundSize:"cover" }} className="tarjeta-rest">
                <div className="wrap-text_tarjeta-rest">
                    <h3>Tallarines</h3>
                    <p>Tallarin de Pollo, Chancho, mixto y entre otros.</p>
                    <div className="cta-wrap_tarjeta-rest">
                        <div className="precio_tarjeta-rest">
                            <span>S/20.00</span>
                        </div>
                        <div className="cta_tarjeta-rest">
                            <a href="pedidos.html">Pedir Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"url(img/chaufa.jpg)center", backgroundSize: "cover"}} className="tarjeta-rest">
                <div className="wrap-text_tarjeta-rest">
                    <h3>Chaufas</h3>
                    <p>Chaufa de pollo, chancho, res y pato.</p>
                    <div className="cta-wrap_tarjeta-rest">
                        <div className="precio_tarjeta-rest">
                            <span>S/15.00</span>
                        </div>
                        <div className="cta_tarjeta-rest">
                            <a href="pedidos.html">Pedir Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"url(img/chancho.jpg)center", backgroundSize: "cover"}} className="tarjeta-rest">
                <div className="wrap-text_tarjeta-rest">
                    <h3>Chanchos</h3>
                    <p>Chancho al ajo, asado y con nabo.</p>
                    <div className="cta-wrap_tarjeta-rest">
                        <div className="precio_tarjeta-rest">
                            <span>S/20.00</span>
                        </div>
                        <div className="cta_tarjeta-rest">
                            <a href="pedidos.html">Pedir Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="wrap section">
        <div className="wrap-title-section">
            <h2>Platos Más Buscados</h2>
        </div>
        <div className="column-3 columns">
            <div style={{background: "url(img/prueba.jpg) center", backgroundSize:"cover"}} className="menu-restaurante">
                <br/>
                <h3>Piqueos</h3>
                <hr/>
                <h4>Primeros Platos</h4>
                <p>Piqueo de Criadilla</p>
                <p>Piqueo de Res</p>
                <br/>
                <h4>Chanchos</h4>
                <p>Chancho al Ajo</p>
                <p>Chancho con Tamarindo</p>
                <br/>
                <p className="precio-menu">
                    <span>S/20.00</span>
                </p>
        
            </div>
            <div style={{background: "url(img/prueba.jpg) center", backgroundSize:"cover"}} className="menu-restaurante">
                <br/>
                <h3>Chaufas</h3>
                <hr/>
                <h4>Primeros Platos</h4>
                <p>Chaufa con Chancho</p>
                <p>Chaufa con Pollo</p>
                <br/>
                <h4>Balsamina</h4>
                <p>Balsamina con Pollo</p>
                <p>Balsamina con Chancho</p>
                <br/>
                <p className="precio-menu">
                    <span>S/25.00</span>
                </p>
            </div>
            <div style={{background: "url(img/prueba.jpg) center", backgroundSize:"cover" }}className="menu-restaurante">
                <br/>
                <h3>Platos Especiales</h3>
                <hr/>
                <h4>Primeros Platos</h4>
                <p>Chi Jau Kay</p>
                <p>Wantan Kam lu</p>
                <br/>
                <h4>Pollos</h4>
                <p>Gallina Enrollada</p>
                <p>Gallina Cinco Sabores</p>
                <br/>
                <p className="precio-menu">
                    <span>S/15.00</span>
                 </p>
            </div>

        </div>
    </section>

    <section className="wrap section">
        <div className="wrap-title-section">
            <h2>Galería de Imagenes</h2>
        </div>
        <div className="container">
        <div className="column-4 galeria-platos">
            <div className="imagen-galeria">
                <img src="img2/chancho al ajo.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/chancho con verdura.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/arrebosado de criadilla.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/balsamina.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/gallina chijaukay.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/chaufa mixto.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/chancho con tamarindo.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/pollo con curry.jpg" alt=""/>
            </div>
            <div className="imagen-galeria">
                <img src="img2/galline taypa.jpg" alt=""/>
            </div>
        </div>

        </div>
    </section>


    </main>



    <footer className="footer">
        <div className="wrap-footer">
            <div className="text-element-footer element-footer">
                <h3>Chifa Peruchi</h3>
                <p>Chifa Peruchi, el restaurante que cocina con amor y pasión cada uno de sus platos, como el chaufa,
                    platos especiales, chanchos, pollos y entre muchas cosas más.</p>
            </div>
            <div className="text-element-footer element-footer">
                <h5>Dirección</h5>
                <ul>
                    <li>Calle Cualquiera</li>
                    <li>Ciudad</li>
                    <li>Mvl: (+51) 12 2345</li>
                    <li>Tel: (+51) 111 222 333 5</li>
                    <li>Tel: (+51) 111 222 333 4</li>
                </ul>
            </div>
            <div className="text-element-footer element-footer">
                <h5>Más Información</h5>
                <ul>
                    <li><a onClick={()=>navegacion("/")}>Inicio</a></li>
                    <li><a href="quienes.html">Quienes Somos</a></li>
                    <li><a onClick={()=>navegacion("/carta")}>Carta Chifa Peruchi</a></li>
                </ul>
            </div>
            <div className="rrss-element-footer element-footer">
                <h5>Redes Sociales</h5>
                <ul>
                    <li><a href="https://www.facebook.com/"><img
                                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNTEyIDc1djM2MmMwIDQxLjM5ODQzOC0zMy42MDE1NjIgNzUtNzUgNzVoLTEyMWwtMzAtMzBoLTMwbC0zMCAzMGgtMTUxYy00MS4zOTg0MzggMC03NS0zMy42MDE1NjItNzUtNzV2LTM2MmMwLTQxLjM5ODQzOCAzMy42MDE1NjItNzUgNzUtNzVoMzYyYzQxLjM5ODQzOCAwIDc1IDMzLjYwMTU2MiA3NSA3NXptMCAwIiBmaWxsPSIjNzk4NGViIi8+PHBhdGggZD0ibTUxMiA3NXYzNjJjMCA0MS4zOTg0MzgtMzMuNjAxNTYyIDc1LTc1IDc1aC0xMjFsLTMwLTMwaC0xNXYtNDgyaDE2NmM0MS4zOTg0MzggMCA3NSAzMy42MDE1NjIgNzUgNzV6bTAgMCIgZmlsbD0iIzQ2NjFkMSIvPjxwYXRoIGQ9Im0zMTYgMTgwdjYwaDkwbC0xNSA5MGgtNzV2MTgyaC05MHYtMTgyaC02MHYtOTBoNjB2LTYwYzAtMzMuMzAwNzgxIDE4LjMwMDc4MS02Mi40MDIzNDQgNDUtNzggMTMuMTk5MjE5LTcuNSAyOC44MDA3ODEtMTIgNDUtMTJoOTB2OTB6bTAgMCIgZmlsbD0iI2VjZWNmMSIvPjxwYXRoIGQ9Im0zMTYgMTgwdjYwaDkwbC0xNSA5MGgtNzV2MTgyaC00NXYtNDEwYzEzLjE5OTIxOS03LjUgMjguODAwNzgxLTEyIDQ1LTEyaDkwdjkwem0wIDAiIGZpbGw9IiNlMmUyZTciLz48L3N2Zz4="
                                alt="icono redes sociales"/></a></li>
                    <li><a href="https://www.whatsapp.com/"> <img
                                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjU2IDBjLTE0MC42OTkyMTkgMC0yNTYgMTE1LjMwMDc4MS0yNTYgMjU2IDAgNDYuNSAxMi41OTc2NTYgOTEuNSAzNi4zMDA3ODEgMTMxLjEwMTU2MmwtMzYuMzAwNzgxIDEyNC44OTg0MzggMTI0Ljg5ODQzOC0zNi4zMDA3ODFjMzkuNjAxNTYyIDIzLjY5OTIxOSA4NC42MDE1NjIgMzYuMzAwNzgxIDEzMS4xMDE1NjIgMzYuMzAwNzgxIDE0MC42OTkyMTkgMCAyNTYtMTE1LjMwMDc4MSAyNTYtMjU2cy0xMTUuMzAwNzgxLTI1Ni0yNTYtMjU2em0wIDAiIGZpbGw9IiMwMGRkN2IiLz48cGF0aCBkPSJtNTEyIDI1NmMwIDE0MC42OTkyMTktMTE1LjMwMDc4MSAyNTYtMjU2IDI1NnYtNTEyYzE0MC42OTkyMTkgMCAyNTYgMTE1LjMwMDc4MSAyNTYgMjU2em0wIDAiIGZpbGw9IiMwMGNjNzEiLz48cGF0aCBkPSJtNDE3LjE5OTIxOSAzNjQuMzAwNzgxLTEyIDExLjY5OTIxOWMtMTYuODAwNzgxIDE2LjgwMDc4MS01NS44MDA3ODEgMTUuNTk3NjU2LTgwLjY5OTIxOSAxMC44MDA3ODEtMjIuMTk5MjE5LTQuMTk5MjE5LTQ2LTE0LjEwMTU2Mi02OC41LTI3LjkwMjM0My02MS4xOTkyMTktMzcuMTk5MjE5LTExNi42OTkyMTktMTAzLjE5OTIxOS0xMzAuMTk5MjE5LTE2Mi41OTc2NTctOS4zMDA3ODEtNDAuMjAzMTI1LTQuMTk5MjE5LTc1IDktODguNWwxMi0xMmM2LjYwMTU2My02LjMwMDc4MSAxNy4wOTc2NTctNi4zMDA3ODEgMjMuNjk5MjE5IDBsNDcuNjk5MjE5IDQ3LjY5OTIxOWMzLjMwMDc4MSAzLjMwMDc4MSA1LjEwMTU2MiA3LjUgNS4xMDE1NjIgMTJzLTEuODAwNzgxIDguNjk5MjE5LTUuMTAxNTYyIDEybC0xMiAxMS42OTkyMTljLTEyLjg5ODQzOCAxMy4xOTkyMTktMTIuODk4NDM4IDM0LjUgMCA0Ny42OTkyMTlsNDkuODAwNzgxIDQ4LjkwMjM0MyAyOS4wOTc2NTYgMjguODAwNzgxYzEzLjIwMzEyNSAxMy4xOTkyMTkgMzUuNTAzOTA2IDEzLjE5OTIxOSA0OC43MDMxMjUgMGwxMS42OTkyMTktMTIuMDAzOTA2YzYuMzAwNzgxLTYgMTcuNjk5MjE5LTYgMjQgMGw0Ny42OTkyMTkgNDcuNzAzMTI1YzYuMzAwNzgxIDYuNTk3NjU3IDYuNjAxNTYyIDE3LjA5NzY1NyAwIDI0em0wIDAiIGZpbGw9IiNlY2VjZjEiLz48cGF0aCBkPSJtNDE3LjE5OTIxOSAzNjQuMzAwNzgxLTEyIDExLjY5OTIxOWMtMTYuODAwNzgxIDE2LjgwMDc4MS01NS44MDA3ODEgMTUuNTk3NjU2LTgwLjY5OTIxOSAxMC44MDA3ODEtMjIuMTk5MjE5LTQuMTk5MjE5LTQ2LTE0LjEwMTU2Mi02OC41LTI3LjkwMjM0M3YtODMuMDk3NjU3bDI5LjA5NzY1NiAyOC44MDA3ODFjMTMuMjAzMTI1IDEzLjE5OTIxOSAzNS41MDM5MDYgMTMuMTk5MjE5IDQ4LjcwMzEyNSAwbDExLjY5OTIxOS0xMi4wMDM5MDZjNi4zMDA3ODEtNiAxNy42OTkyMTktNiAyNCAwbDQ3LjY5OTIxOSA0Ny43MDMxMjVjNi4zMDA3ODEgNi41OTc2NTcgNi42MDE1NjIgMTcuMDk3NjU3IDAgMjR6bTAgMCIgZmlsbD0iI2UyZTJlNyIvPjwvc3ZnPg=="
                                alt="icono redes sociales"/></a></li>
                </ul>
            </div>
        </div>
        <div className="footer-creds">
            <div className="copy-creds">
                <p>©2024 . Todos los Derechos Reservados.</p>
            </div>
        </div>
    </footer>

        </>
    )
}

export default Principal;
