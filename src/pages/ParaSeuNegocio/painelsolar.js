import React from "react";
import "./painelsolar.css";

function PainelSolar() {
  return (
    <div className="painel-solar">
      <h1 className="painel-solar-title">Instalação de Painéis Solares</h1>
      <p className="painel-solar-description">
        Economize dinheiro e ajude o meio ambiente! A instalação de painéis
        solares é a solução sustentável e econômica para a geração de energia
        elétrica em sua empresa. Além de reduzir a sua conta de luz, você ainda
        contribui para a preservação do planeta.
      </p>
      <div className="painel-solar-contact">
        <p>Entre em contato e agende uma visita técnica:</p>
        <div className="painel-solar-contact-info">
          <span>Telefone:</span>
          <a href="tel:999999999">(99) 9999-9999</a>
          <span>WhatsApp:</span>
          <a href="https://wa.me/5566999999999">+55 (66) 99999-9999</a>
          <span>E-mail:</span>
          <a href="mailto:contato@paineissolaresempresa.com">
            contato@paineissolaresempresa.com
          </a>
        </div>
      </div>
      <form className="painel-solar-form">
        <h2>Peça já o seu orçamento:</h2>
        <div className="painel-solar-form-inputs">
          <div className="painel-solar-form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="painel-solar-form-group">
            <label htmlFor="empresa">Empresa:</label>
            <input type="text" id="empresa" name="empresa" required />
          </div>
          <div className="painel-solar-form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required />
          </div>
          <div className="painel-solar-form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="painel-solar-form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default PainelSolar;

