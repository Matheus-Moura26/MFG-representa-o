import React from 'react';
import "./contratarservicos.css";

function ContratarServicos() {
  return (
    <div className="contratar-servicos-container">
        <h1 className='contratar-servicos-title'>Por que escolher nossa empresa?</h1>
        <p className='contratarServicosText'>Na nossa empresa, temos anos de experiência em representação comercial e sabemos exatamente como ajudar nossos clientes a aumentar o faturamento em suas regiões de atuação.</p>
        <h2 className='contratar-servicos-subtitle'>Como podemos ajudar a aumentar o faturamento da sua empresa?</h2>
        <p className='contratarServicosText'>Nós temos uma equipe de profissionais altamente qualificados e experientes, prontos para trabalhar em conjunto com sua empresa para desenvolver estratégias eficazes e personalizadas de representação comercial.</p>
        <h2 className='contratar-servicos-subtitle'>Entre em contato conosco</h2>
        <div className='formularioContent'>
            <form className='contratar-servicos-form'>
            <label>Nome:</label>
            <input className='contratar-servicos-input' type="text" name="name" />
            <label>Email:</label>
            <input className='contratar-servicos-input' type="email" name="email" />
            <label>Mensagem:</label>
            <textarea className='contratar-servicos-textarea' name="message" />
            <button className='contratar-servicos-submit' type="submit">Enviar</button>
            </form>
        </div>

    </div>
  );
}

export default ContratarServicos;
