import React, { useState } from 'react';
import "./precatorio.css";

const Precatorios = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Aqui você pode adicionar o código para enviar o formulário para o seu servidor ou outra ação desejada.
  };


  return (
    <div className="precatorios-container">
      <div className="precatorios-header">
        <h1>Precatórios</h1>
        <p>Invista com segurança e obtenha alto potencial de retorno.</p>
      </div>
      <div className="precatorios-section">
        <h2>Potencial de Retorno Elevado</h2>
        <p>Os precatórios são uma forma de investimento de renda fixa que podem oferecer retornos elevados.</p>
      </div>
      <div className="precatorios-section">
        <h2>Baixo Risco de Inadimplência</h2>
        <p>Os precatórios são emitidos pelo governo e possuem garantia constitucional, o que garante baixo risco de inadimplência.</p>
      </div>
      <div className="precatorios-section">
        <h2>Diversificação da Carteira de Investimentos</h2>
        <p>Os precatórios são uma forma de diversificar a carteira de investimentos da sua empresa, com um investimento de baixo risco.</p>
      </div>
      <div className="precatorios-section">
        <h2>Possibilidade de Utilização para Quitação de Dívidas</h2>
        <p>Os precatórios podem ser utilizados para quitar dívidas com o governo, como tributos e impostos.</p>
      </div>
      <div className="precatorios-section">
        <h2>Facilidade de Negociação</h2>
        <p>Os precatórios são negociados em um mercado secundário, o que oferece facilidade de negociação para o investidor.</p>
        </div>
        <div className="precatorios-container-form">
      {/* Adicione as seções do seu conteúdo aqui */}

      <div className="contact-form-section">
        <h2>Entre em contato conosco</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
          </div>

          <button className='precatorioButton' type="submit">Enviar</button>
        </form>
      </div>
    </div>
        
    </div>
  );
};

export default Precatorios;
