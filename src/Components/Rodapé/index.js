import "./index.css";
import React from "react";

function Rodape() {
    return (
        <div className="rodapeCard">
            <div className="rodapeBox1">
                <div className="rodapeBox1Div">
                    <p className="rodapeTitle" id="rodapeTitle">MFG Representações</p>
                    <p className="rodapeTxt4">Rua L-23 Lt12 Qd46, Papilom Park</p>
                    <p className="rodapeTxt4">Aparecida de Goiania - GO</p>
                    <p className="rodapeTxt4">CEP:74950-290</p>
                    <p className="rodapeTxt4">CNPJ: 10.839.044/0001-63</p>
                    {/* Falta colocar CNPJ */}
                    <div className="rodapeSocialsDiv">
                    {/* Areá abaixo deverá ser colocada uma imgaem ao invés dos nosmes das redes sociais */}
                    <p className="rodapeSocials">Facebook</p>
                    <p className="rodapeSocials">Instagram</p>
                    <p className="rodapeSocials">Linkedin</p>
                    <p className="rodapeSocials">Youtube</p> 
                    </div>

                </div>

                <div className="rodapeBox1Div">
                    <div className="rodapeBox1DivApp">
                        <p className="rodapeTxt2">{/* Colocar uma imagem aqui com este titulo que pode ser criada com IA se n encontrar
                        */}Baixe o App</p>
                    </div>

                    <div className="rodapeBox1DivApp">
                        <p className="rodapeTxt5">Google Play</p>
                    </div>

                    <div className="rodapeBox1DivApp">
                        <p className="rodapeTxt5">App Store</p>
                    </div>
                    
                    
                    
                </div>

                <div className="rodapeBox1Div">
                    <p className="rodapeTxt4">Contatos no link abaixo</p>
                    <p className="rodapeTxt1">FALE CONOSCO --</p>
                    <p className="rodapeTxt4">Horário de atendimento: Segunda a sexta-feira das 9h ás 18h, exeto em feriados nacionais.</p>
                </div>

                <div className="rodapeBox1Div">
                    <div className="itensProcurados">
                        <p className="rodapeTxt3">Assembleias</p>
                    </div>
                    
                    <div className="itensProcurados">
                        <p className="rodapeTxt3">Pagamentos</p>
                    </div>

                    <div className="itensProcurados">
                        <p className="rodapeTxt3">Grupos encerrados</p>
                    </div>

                    <div className="itensProcurados">
                        <p className="rodapeTxt3">Valores a receber</p>
                    </div>

                    <div className="itensProcurados">
                        <p className="rodapeTxt3">Dúvidas frequentes</p>
                    </div>

                    <div className="itensProcurados">
                        <p className="rodapeTxt3">regulamentos</p>
                    </div>
                </div>
            </div>

            <div div className="rodapeBox2">
                <div className="rodapeBox2Div">
                    <a className="rodapeSubBottons">Portal de Privacidade</a>
                    <a className="rodapeSubBottons">Política de Privacidade</a>
                    <a className="rodapeSubBottons">Política de Segurança Cibernética</a>
                    <a className="rodapeSubBottons">Código de Ética</a>
                    <a className="rodapeSubBottons">Canal do Fornecedor</a>
                    <a className="rodapeSubBottons">Canal de Denúncias</a>
                    <a className="rodapeSubBottons">Segurança</a>
                    <a className="rodapeSubBottons">Procon Goiania</a>
                    <a className="rodapeSubBottons">Ouvidoria</a>
                    <a className="rodapeSubBottons">Negociar Dívidas</a>
                    <a className="rodapeSubBottons">Gerenciar Cookies</a>
                    <a className="rodapeSubBottons">Termos de uso sites e Apps</a>
                </div>

            </div>
        </div>
    );
}

export default Rodape;