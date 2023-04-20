import { Route, Routes} from "react-router-dom";
import "../src/App.css";

import Rodape from "./Components/Rodapé";
import Plataformadecompras from "./Components/Plataformadecompras";
import MenuBar from "./Components/MenuBar";
import LoginButton from "./Components/Login";


import Home from "./pages/Home";
import Produtos from "./pages/Home/produtos";
import Ajuda from "./pages/Ajuda";
import SegundaViaBoletos from "./pages/Ajuda/segundaviaboletos";
import ParcelasAtraso from "./pages/Ajuda/parcelasatraso";
import AnteciparFuturas from "./pages/Ajuda/anteciparfuturas";
import PlataformaVendasDuvidas from "./pages/Ajuda/plataformaduvidas";
import SejaParceiro from "./pages/Ajuda/sejaparceiro";
import SolicitaAtendimento from "./pages/Ajuda/solicitaatendimento";
import Blog from "./pages/Blog";
import Carreira from "./pages/Carreira";
import CandidatarSe from "./pages/Carreira/candidatarse";
import ParaSeuNegocio from "./pages/ParaSeuNegocio";
import Frete from "./pages/ParaSeuNegocio/frete";
import Precatorio from "./pages/ParaSeuNegocio/precatorio.js";
import PainelSolar from "./pages/ParaSeuNegocio/painelsolar";
import ContratarServicos from "./pages/ParaSeuNegocio/contratarservicos";
/* import ParaVoce from "./pages/ParaVoce"; */
import Parceiros from "./pages/Parceiros";
import SobreNos from "./pages/SobreNos"; 
import LoginPage from "./Components/Login/login";




function App() {
  return (
    
      <div className="App">
      <header>
          <LoginButton />
          <MenuBar />
        </header>
      
        <body>
          
          <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/home/produtos" exact  Component={Produtos} />
          {/* <Route path="/para-voce" exact Component={ParaVoce} /> */}
          <Route path="/para-seu-negocio" exact Component={ParaSeuNegocio} />
          <Route path="/para-seu-negocio/plataformadecompras" exact Component={Plataformadecompras} />
          <Route path="/para-seu-negocio/frete" exact Component={Frete} />
          <Route path="/para-seu-negocio/painelsolar" exact Component={PainelSolar} />
          <Route path="/para-seu-negocio/precatorio" exact Component={Precatorio} />
          <Route path="/para-seu-negocio/contratarservicos" exact Component={ContratarServicos} />
          <Route path="/sobre-nos" exact  Component={SobreNos} />
          <Route path="/carreira" exact Component={Carreira} />
          <Route path="/carreira/canditatarse" exact  Component={CandidatarSe} />
          <Route path="/ajuda" exact Component={Ajuda} />
          <Route path="/ajuda/segundaviaboletos" exact Component={SegundaViaBoletos} />
          <Route path="/ajuda/parcelasatraso" exact Component={ParcelasAtraso} />
          <Route path="/ajuda/anteciparfuturas" exact Component={AnteciparFuturas} />
          <Route path="/ajuda/plataformaduvidas" exact Component={PlataformaVendasDuvidas} />
          <Route path="/ajuda/sejaparceiro" exact Component={SejaParceiro} />
          <Route path="/ajuda/Plataformadecompras" exact Component={Plataformadecompras} />
          <Route path="/ajuda/solicitaatendimento" exact Component={SolicitaAtendimento} />
          <Route path="/blog" exact  Component={Blog} />
          <Route path="/parceiros" exact Component={Parceiros} />
          <Route path="/login" exact Component={LoginPage} />
        </Routes>
        </body>
        
      
        <Rodape />
      </div>
    
  );
}

export default App;
