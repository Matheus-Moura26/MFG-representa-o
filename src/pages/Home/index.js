import { Link } from "react-router-dom";
import "./index.css";
import React from "react";
 
 function Home() {
    return (
        <div className="homeBody">
            <div className="homeContent">
                <div className="homeBloco1">
                    <p className="homeSlogan">
                        Qualidade, agilidade, preço justo com produtos direto da industria para sua loja.
                    </p>
                </div>

                <div className="homeBloco1">
                    <div>
                        <p>Nós da MFG estamos a mais de 25 anos fazendo parcerias entre comerciantes e industrias, levando bons negócios para todos sempre com
                            integridade, transparência, responsabilidade e comprometimento; Levando produtos de alta qualidade para sua loja. Oferecemos o melhor
                            em agilidade e eficiência em vendas no atacado, com preços justos e excelência no atendimento personalisado.</p>
                    </div>
 
                    <div>
                        <p> nossos clientes recebem entregas rapidas com facilidade de pagamento, suporte tecnico e atendimento personalizado</p>
                    </div>
                    
                </div>

                <div className="homeBloco1">
                        <p>
                            Presente na região de Goiás, no entanto, podemos lhe atender mesmo sendo de outro estado.
                        </p>
                </div>
                    
                <div className="homeBloco1">
                        <div>
                            <p>Se deseja deseja ter acesso a produtos diretos da industria para seu comercio ou Se deseja que sua industria seja representada por nós entre em contato conosco</p>
                        </div>
                </div>
                        
                <div className="homeBloco1">
                    <div>
                        <Link to="/home/produtos">Conheça alguns de nossos produtos</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
 }
 
 export default Home;