import "./index.css";
import {React,  useState } from "react";

function Parceiros() {
    
    const [softysActive, setSoftysActive] = useState(false);
    const [doceMineirosActive, setdoceMineiroActive] = useState(false);
    const [roanAlimentossActive, setRoanAlimentossActive] = useState(false);

    

    return (
        <div className="parceirosContent">
                <p className="industryName" onClick={() => setSoftysActive(!softysActive)}>Softys</p>
                {softysActive &&
                    <div className={softysActive ? 'softysCard softysActive' : 'softysCard'}>
                        <div className="parceirosBloco1">
                            <p className="SubTitle">História da empresa</p>
                            <div className="parceirosBloco2">
                                <p>A Softys foi fundada em 2003 no Chile, com o objetivo de oferecer produtos de higiene e cuidado pessoal de qualidade para o mercado latino-americano.
                                    A empresa cresceu rapidamente e expandiu sua presença para outros países, como Brasil, Argentina, Peru e Uruguai.
                                    Em 2011, a Softys se juntou ao grupo CMPC, um dos maiores conglomerados industriais da América Latina.</p>
                            </div>
                        </div>

                        <div className="parceirosBloco1">
                            <p className="SubTitle">Produtos e serviços</p>
                            <div className="parceirosBloco2">
                                <p>A Softys possui uma ampla linha de produtos de higiene e cuidado pessoal, incluindo fraldas, lenços umedecidos, papel higiênico, guardanapos, entre outros.
                                    A empresa é conhecida por oferecer produtos de qualidade e inovadores, sempre buscando atender às necessidades dos seus clientes.
                                    Além disso, a Softys também oferece serviços de reciclagem de papel, ajudando a preservar o meio ambiente e promovendo a sustentabilidade.</p>
                            </div>
                        </div>

                        <div className="parceirosBloco1">
                            <p className="SubTitle">Sustentabilidade</p>
                            <div className="parceirosBloco2">
                                <p>A Softys é uma empresa comprometida com a sustentabilidade e o meio ambiente.
                                    A empresa utiliza materiais de origem responsável em seus produtos, e possui certificações de sustentabilidade, como a FSC e a ISO 14001.
                                    Além disso, a Softys investe em iniciativas de reciclagem e redução de resíduos, contribuindo para a preservação do meio ambiente.</p>
                            </div>
                        </div>

                        <div className="parceirosBloco1">
                            <p className="SubTitle">Responsabilidade social</p>
                            <div className="parceirosBloco2">
                                <p>A Softys é uma empresa socialmente responsável, que contribui para o desenvolvimento das comunidades onde atua.
                                    A empresa apoia diversas iniciativas sociais, como projetos de educação e saúde, e investe em programas de capacitação profissional para jovens e adultos.
                                    Além disso, a Softys também promove a inclusão social e a diversidade em seu ambiente de trabalho.</p>
                            </div>
                        </div>

                        <div className="parceirosBloco1">
                            <p className="SubTitle">Visão e valores</p>
                            <div className="parceirosBloco2">
                                <p>A Softys tem como visão ser uma empresa líder em produtos de higiene e cuidado pessoal na América Latina, sempre comprometida com a qualidade, a inovação e a sustentabilidade.
                                    Os valores da Softys incluem o comprometimento com o cliente, a excelência, a integridade, a sustentabilidade e o respeito às pessoas.
                                    A empresa busca sempre colocar seus valores em prática em todas as suas operações, e promover uma cultura de ética e responsabilidade em seus colaboradores.</p>
                            </div>
                        </div>
                    </div>
                }
                <p className="industryName" onClick={() => setdoceMineiroActive(!doceMineirosActive)}>Doce Mineiro</p>
                {doceMineirosActive &&
                    <div className={doceMineirosActive ? 'doceMineiroCard doceMineirosActive' : 'doceMineiroCard'}>
                        <div className="parceirosBloco1">
                            <p className="SubTitle">História da empresa</p>
                            <div className="parceirosBloco2">
                                <p>A Doce Mineiro foi fundada em 2001, na cidade de Belo Horizonte, com o objetivo de levar aos consumidores os sabores e tradições da culinária mineira.
                                    Desde então, a empresa vem se destacando pela qualidade e autenticidade de seus produtos.</p>
                            </div>
                        </div>
                    
                        <div className="parceirosBloco1">
                            <p className="SubTitle">Produtos oferecidos</p>
                            <div className="parceirosBloco2">
                                <p>A Doce Mineiro é especializada em doces e sobremesas típicas da culinária mineira, como doces de leite, goiabada. Além disso, a empresa também trabalha no ramo de lacticínios com leite condesado, mistura láctea, creme de leite, bebidas lácteas, leites, base culinárea, composto lácteo, leite em pó e creme de avelã</p>
                            </div>
                        </div>
                        
                        <div className="parceirosBloco1">
                            <p className="SubTitle">Qualidade dos produtos</p>
                            <div className="parceirosBloco2">
                                <p>A Doce Mineiro utiliza ingredientes naturais e selecionados em seus produtos, sem adição de conservantes ou corantes artificiais em seus doces. A empresa também
                                    investe em processos de produção artesanais e em equipamentos modernos, garantindo a qualidade e a segurança dos seus produtos.</p>
                            </div>
                        </div>

                        <div className="parceirosBloco1">
                            <p className="SubTitle">Compromisso com a sustentabilidade</p>
                            <div className="parceirosBloco2">
                                <p>A Doce Mineiro tem um compromisso com a sustentabilidade e a responsabilidade social, investindo em iniciativas como a coleta seletiva de resíduos,
                                    a utilização de energia solar em sua fábrica, e o apoio a projetos sociais em comunidades carentes.</p>
                            </div>
                        </div>
                        
                        <div className="parceirosBloco1">
                            <p className="SubTitle">Expansão da empresa</p>
                            <div className="parceirosBloco2">
                                <p>A Doce Mineiro vem expandindo seus negócios, oferecendo seus produtos em diversos estados do Brasil e também no mercado internacional. A empresa busca levar
                                    seus sabores e tradições para cada vez mais consumidores, mantendo sempre o compromisso com a qualidade e a autenticidade de seus produtos.</p>
                            </div>
                        </div>
                    </div>
                }
            
            <p className="industryName" onClick={() => setRoanAlimentossActive(!roanAlimentossActive)}>Roan Alimentos</p>
                {roanAlimentossActive &&
                <div className={roanAlimentossActive ? 'roanAlimentosCard roanAlimentossActive' : 'roanAlimentosCard'}>
    
                    <div className="parceirosBloco1">
                        <p className="SubTitle">História da empresa</p>
                        <div className="parceirosBloco2">
                            <p>A Roan alimentos foi fundada em 1894 na cidade de Ribeirão Preto, em São Paulo, por imigrantes italianos. Desde então, a empresa vem se destacando no mercado de alimentos como uma das principais referências em qualidade e inovação.</p>
                        </div>
                    </div>
                
                    <div className="parceirosBloco1">
                        <p className="SubTitle">Portfólio de produtos</p>
                            <div className="parceirosBloco2">
                                <p>A empresa oferece uma ampla gama de produtos de alta qualidade, incluindo farinhas de trigo, pré-misturas para pães, bolos, massas, entre outros. Todas as farinhas produzidas pela empresa são feitas a partir de grãos selecionados, e passam por rigorosos processos de moagem e aprimoramento para garantir a excelência em sabor e textura.</p>
                            </div>
                    </div>
                        
                    <div className="parceirosBloco1">
                        <p className="SubTitle">Certificações de qualidade</p>
                            <div className="parceirosBloco2">
                                <p>A Roan Alimentos possui diversas certificações de qualidade, como a ISO 9001 e a FSSC 22000, que atestam o compromisso da empresa em oferecer produtos seguros e de alta qualidade.</p>
                            </div>
                    </div>
                        
                    <div className="parceirosBloco1">
                        <p className="SubTitle">Responsabilidade social e ambiental</p>
                            <div className="parceirosBloco2">
                                <p>A empresa tem um forte compromisso com a sustentabilidade e responsabilidade social. A empresa usa energia limpa em suas fábricas e investe em projetos sociais para ajudar a comunidade local.</p>
                            </div>
                    </div>
                        
                    <div className="parceirosBloco1">
                        <p className="SubTitle">Inovação</p>
                            <div className="parceirosBloco2">
                                <p>A Roan Alimentos investe constantemente em tecnologia e inovação para desenvolver novos produtos e aprimorar seus processos produtivos. A empresa está sempre em busca de novas soluções para atender as necessidades dos seus clientes e do mercado em geral.</p>
                            </div>
                    </div>
                        
                    <div className="parceirosBloco1">
                        <p className="SubTitle">Parcerias e reconhecimento</p>
                            <div className="parceirosBloco2">
                                <p>A Roan Alimentos tem uma ampla rede de parceiros e clientes em todo o Brasil e no exterior. A empresa já foi reconhecida por diversas entidades do setor alimentício e de negócios, o que demonstra a qualidade e excelência dos seus produtos.</p>
                            </div>
                    </div>
                </div>
                }
        </div>
    );
}

export default Parceiros;


/* 

             */