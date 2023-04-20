import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

 
 function MenuBar() {
     return (
        <div className="barBox">
            <nav className="barContent">
                <Link className="title" to="/" >MFG Representações</Link>
                <div className="menuButtonsBar">
                    {/* <Link className="menuBottons" to="/para-voce">Para você</Link> */}
                    <Link className="menuButtons" to="/para-seu-negocio">Para seu negócio</Link>
                    <Link className="menuButtons" to="/sobre-nos">Sobre nós</Link>
                    <Link className="menuButtons" to="/carreira">Carreira</Link>
                    <Link className="menuButtons" to="/ajuda">Ajuda</Link>
                    <Link className="menuButtons" to="/blog">Blog</Link>
                    <Link className="menuButtons" to="/parceiros">Parceiros</Link> 
                </div>

            </nav>
        </div>
    );
 }
 
 export default MenuBar;