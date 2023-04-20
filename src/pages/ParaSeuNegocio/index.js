import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

function ParaSeuNegocio() {
  return (
      <div className="paraSeuNegocioContainer">
          
        <div className="paraSeuNegocioSection">
            <h2 className="paraSeuNegocioSubTitle">Para seu mercado</h2>
            <ul className="paraSeuNegocioContent">
            <li className="paraSeuNegocioButtonsBox">
                <Link className="paraSeuNegocioButtons" to="/para-seu-negocio/plataformadecompras">
                Tenha acesso a produtos diretos da indústria
                </Link>
            </li>
            <li className="paraSeuNegocioButtonsBox">
                <Link className="paraSeuNegocioButtons" to="/para-seu-negocio/frete">
                Contrate serviços de frete
                </Link>
            </li>
            <li className="paraSeuNegocioButtonsBox">
                <Link className="paraSeuNegocioButtons" to="/para-seu-negocio/painelsolar">
                Instale painéis solares e reduza seu custo mensal de energia
                </Link>
            </li>
            <li className="paraSeuNegocioButtonsBox">
                <Link  className="paraSeuNegocioButtons" to="/para-seu-negocio/precatorio">
                Precatório (deduzir impostos)
                </Link>
            </li>
            </ul>
        </div>
        <div className="paraSeuNegocioSection">
            <h2  className="paraSeuNegocioSubTitle">Para sua indústria</h2>
            <ul  className="paraSeuNegocioContent">
            <li className="paraSeuNegocioButtonsBox">
                <Link  className="paraSeuNegocioButtons" to="/para-seu-negocio/contratarservicos">
                Deseja que representemos sua indústria
                </Link>
            </li>
            <li className="paraSeuNegocioButtonsBox">
                <Link className="paraSeuNegocioButtons" to="/para-seu-negocio/frete">
                Contrate serviços de frete
                </Link>
            </li>
            <li className="paraSeuNegocioButtonsBox">
                <Link className="paraSeuNegocioButtons" to="/para-seu-negocio/painelsolar">
                Instale painéis solares e reduza seu custo mensal de energia
                </Link>
            </li>
            <li className="paraSeuNegocioButtonsBox">
                <Link className="paraSeuNegocioButtons" to="/para-seu-negocio/precatorio">
                Precatório (deduzir impostos)
                </Link>
            </li>
            </ul>
        </div>
    </div>
  );
}

export default ParaSeuNegocio;
