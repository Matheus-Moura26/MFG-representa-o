import { Link } from "react-router-dom";
import "./index.css";
import React from "react";

function Ajuda() {
    return (
        <div className="ajudaContent">
            <p className="ajudaTitle">Precisa de ajuda?</p>
            <div className="ajudaLinks">
                <div className="ajudaLinkItem">
                    <Link to="/ajuda/segundaviaboletos">Solicitar segunda via de boleto</Link>
                </div>
                
                <div className="ajudaLinkItem">
                    <Link to="/ajuda/parcelasatraso">Quitar parcelas em atraso</Link>
                </div>

                <div className="ajudaLinkItem">
                    <Link to="/ajuda/anteciparfuturas">Antecipar parcelas futuras</Link>
                </div>
            </div>

            <div className="ajudaLinks">
                <div className="ajudaLinkItem">
                    <Link to="/ajuda/plataformaduvidas">O que é e como funciona a plataforma de pedidos online?</Link>
                </div>
                
                <div className="ajudaLinkItem">
                    <Link to="/ajuda/sejaparceiro">Seja um parceiro</Link>
                </div>

                <div className="ajudaLinkItem">
                    <Link to="/ajuda/Plataformadecompras">Acesse a plataforma de compras</Link>
                </div>

                <div className="ajudaLinkItem">
                    <Link to="/ajuda/solicitaatendimento">Solicitar atendimento pessoal por um representante</Link>
                </div>            
            </div>
            
            <div className="ajudaContato">
                {/* Deve-se colocar o numero do telefone aqui */}
                <p>Fale conosco por whatsapp ou ligue</p>
                <p className="ajudaFone">Fone: (62) 99675-8872</p>
            </div>
            
            <div className="ajudaEmails">
                {/* Colocar os emails de atendimento e futuramente números de telefone específicos aqui */}
                <p>EMAILS ESPECÍFICOS</p>
            </div>
        </div>
    );
}

export default Ajuda;
