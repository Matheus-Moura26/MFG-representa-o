import React, { useState } from "react";
import "./solicitaatendimento.css";

function SolicitaAtendimento() {
    const [cnpj, setCnpj] = useState("");
    const [clientType, setClientType] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar as informações do formulário
    };

    return (
    <div className="contact-page">
        <h2 className="contact-title">Entre em contato conosco</h2>
        <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="cnpj" className="form-label">
            CNPJ:
        </label>
        <input
            type="text"
            id="cnpj"
            name="cnpj"
            className="form-input"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
            required
        />

        <label htmlFor="client-type" className="form-label">
            Tipo de cliente:
        </label>
        <select
            id="client-type"
            name="client-type"
            className="form-select"
            value={clientType}
            onChange={(event) => setClientType(event.target.value)}
            required
        >
            <option value="">Selecione o tipo de cliente</option>
            <option value="atacado">Atacado</option>
            <option value="varejo">Varejo</option>
            <option value="distribuidor">Distribuidor</option>
        </select>

        <label htmlFor="city" className="form-label">
            Cidade:
        </label>
        <input
            type="text"
            id="city"
            name="city"
            className="form-input"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
        />

        <label htmlFor="street" className="form-label">
            Rua:
        </label>
        <input
            type="text"
            id="street"
            name="street"
            className="form-input"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            required
        />

        <label htmlFor="neighborhood" className="form-label">
            Bairro:
        </label>
        <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            className="form-input"
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            required
        />

        <button type="submit" className="form-button">
            Enviar
        </button>
        </form>
    </div>
    );
}

export default SolicitaAtendimento;
