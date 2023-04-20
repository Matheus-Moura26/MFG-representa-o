import React from 'react';
import './frete.css';

function Frete() {
  return (
    <div className="frete-container">
      <h1 className="frete-title">Serviços de Frete</h1>
      <p className="frete-description">Nós oferecemos serviços de frete de alta qualidade para empresas de todos os tamanhos. Com nossos serviços de frete, você pode ter a tranquilidade de saber que seus produtos serão entregues com segurança e no prazo.</p>
      <div className="frete-features">
        <div className="frete-feature">
          <i className="fas fa-check"></i>
          <p>Entrega rápida e segura</p>
        </div>
        <div className="frete-feature">
          <i className="fas fa-check"></i>
          <p>Rastreamento em tempo real</p>
        </div>
        <div className="frete-feature">
          <i className="fas fa-check"></i>
          <p>Equipe de suporte dedicada</p>
        </div>
      </div>
      <form className="frete-form">
        <h2 className="frete-form-title">Solicite uma cotação</h2>
        <input className="frete-form-input" type="text" placeholder="Nome da empresa" required />
        <input className="frete-form-input" type="email" placeholder="Email" required />
        <input className="frete-form-input" type="tel" placeholder="Telefone" required />
        <input className="frete-form-input" type="text" placeholder="Origem" required />
        <input className="frete-form-input" type="text" placeholder="Destino" required />
        <input className="frete-form-input" type="text" placeholder="Peso (kg)" required />
        <button className="frete-form-button" type="submit">Solicitar cotação</button>
      </form>
    </div>
  );
}

export default Frete;
