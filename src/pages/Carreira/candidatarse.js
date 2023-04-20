import React, { useState } from 'react';
import './candidatarse.css';

function CandidatarSe() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sobreMim, setSobreMim] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email, telefone, sobreMim);
    alert('Obrigado por se candidatar como nosso parceiro. Seu cadastro foi registrado e entraremos em contato caso tenhamos uma oportunidade adequada para você!');
  }

  return (
    <div className="parceiro-container">
      <h1 className="parceiro-title">Seja um Parceiro</h1>
      <p className="parceiro-description">Estamos sempre em busca de pessoas talentosas para se juntar à nossa equipe. Se você está interessado em trabalhar conosco, preencha o formulário abaixo e nós entraremos em contato se tivermos uma oportunidade adequada para você.</p>
      <form onSubmit={handleSubmit} className="parceiro-form">
        <label htmlFor="nome" className="parceiro-label">
          Nome:
          <input type="text" id="nome" className="parceiro-input" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label htmlFor="email" className="parceiro-label">
          Email:
          <input type="email" id="email" className="parceiro-input" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label htmlFor="telefone" className="parceiro-label">
          Telefone:
          <input type="tel" id="telefone" className="parceiro-input" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </label>
        <label htmlFor="sobre-mim" className="parceiro-label">
          Conte-nos um pouco sobre você:
          <textarea id="sobre-mim" className="parceiro-textarea" value={sobreMim} onChange={e => setSobreMim(e.target.value)} />
        </label>
        <button type="submit" className="parceiro-button">Enviar</button>
      </form>
    </div>
  );
}

export default CandidatarSe;
