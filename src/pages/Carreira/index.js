import { Link } from "react-router-dom";
import "./index.css";
import React from "react";

function Carreira() {
    return (
        <div>
            <div className="carreiraBloco1">
                <h1>Seja parte de um time que faz a diferença e alcance seus objetivos profissionais!</h1>
                <h2>Canditate-se a nossas vagas</h2>
            </div>
            
            <div className="carreiraBloco1">
                <p>Venha se juntar ao nosso time de campeões na MFG e trilhar um caminho de sucesso na sua carreira!</p>
            </div>
            
            <div className="carreiraBloco1">
                <p>Se você é uma pessoa dinâmica, inovadora e busca por uma empresa que valorize seus talentos, reconheça sua performance e ofereça um ambiente de aprendizado contínuo, a MFG é o lugar certo para você! Aqui, você terá a chance de participar de projetos incríveis, contribuindo para a transformação da vida de milhares de pessoas e se desenvolvendo profissionalmente.</p>
            </div>

            <div className="carreiraBloco1">
                <Link to="/carreira/canditatarse">Canditatar-se</Link>
            </div>
            
        </div>

        
    );
}

export default Carreira;