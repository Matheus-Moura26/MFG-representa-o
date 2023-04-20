import React, { Component } from 'react';
import './plataformaduvidas.css';

class PlataformaVendasDuvidas extends Component {
  render() {
    return (
      <div className="PlataformaVendasDuvidas-container">
        <p className="PlataformaVendasDuvidas-description">
          A plataforma de pedidos online permite que comerciantes comprem diretamente da indústria de forma conveniente e eficiente. O processo de compra é simples e fácil de usar. A plataforma é projetada para tornar o processo de compra rápido e fácil, ajudando os clientes a economizar tempo e dinheiro ao comprar diretamente da indústria.
        </p>
        <div className="PlataformaVendasDuvidas-steps-container">
          <p className="PlataformaVendasDuvidas-steps">
            1° Selecione a indústria com a qual desejam fazer negócio.
          </p>
          <p className="PlataformaVendasDuvidas-steps">
            2° Em seguida, escolha os itens que desejam comprar e adicionar ao carrinho. Quando o item é adicionado ao carrinho, o cliente pode clicar na foto do produto para adicionar a quantidade que desejam comprar. Uma vez que a quantidade é adicionada, o preço unitário aparece automaticamente, ou se preferir, o cliente pode adicionar o preço unitário e a quantidade aparecerá automaticamente. Esse processo se repete para cada item adicionado ao carrinho até que o cliente esteja satisfeito com a seleção.
          </p>
          <p className="PlataformaVendasDuvidas-steps">
            3° Quando todos os itens desejados estiverem no carrinho, o cliente pode verificar o total e concluir a compra. Escolher o método de pagamento adequado e pronto! Pedido finalizado.
          </p>
        </div>
      </div>
    );
  }
}

export default PlataformaVendasDuvidas;
