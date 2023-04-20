import React from 'react';

function AnteciparFuturas() {
    return (
        <div className="buscaBoletoContent">
            <div className="buscaBoletoTable">
                {/*Fazer aqui uma tabela com os ítens necessários para puxar os boletos ainda não pagos e deixar que o cliente selecione  */}
                <div>
                    <p>Precisamos de alguns dados para prosseguir</p>
                </div>
                <div>
                    <p className='buscaBoletoTableText'>CNPJ</p>
                    <input type="number" />
                </div>
                <div>
                    <p className='buscaBoletoTableText'>Nome do representante que o atende</p>
                    <input type="text" />
                </div>

                <div>
                    <button>Pesquisar</button>
                </div>
            </div>
 

        </div>
    );
}

export default AnteciparFuturas;