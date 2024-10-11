
const caixaPrincipal =  document.querySelector(".caixa-principal");
const caixaPerguntas =  document.querySelector(".caixa-perguntas");
const caixaAlternativas =  document.querySelector(".caixa-alternativas");
const caixaResultado =  document.querySelector(".caixa-resultado");
const textoResultado =  document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado: "Qual bebida é considerada a bebida nacional do Brasil?",
        alternativas: [
            {   
                texto:"Caipirinha",    
                afirmacao:"A caipirinha é um coquetel brasileiro, de origem paulista, criado no interior de São Paulo, feito com cachaça, açúcar, limão e gelo."    
            },
            {   
                texto:"Cachaça",   
                afirmacao:"Cachaça, pinga, cana ou caninha é a aguardente de cana-de-açúcar produzida no Brasil. É usada no preparo do coquetel mundialmente conhecido caipirinha. É obtida através da fermentação e destilação do caldo de cana ou do melaço." 
            }
        ]
    },
    {
        enunciado: "Qual festa popular é famosa por suas comidas típicas, como pamonha e canjica?",
        alternativas: [
            {   
                texto:"Carnaval",    
                afirmacao:"Carnaval é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como Tempo da Septuagésima (ou pré-quaresma). O Carnaval normalmente envolve uma festa pública e/ou desfile combinando alguns elementos circenses, máscaras e uma festa de rua pública. As pessoas usam trajes durante muitas dessas celebrações, permitindo-lhes perder a sua individualidade cotidiana e experimentar um sentido elevado de unidade social"  
            },
            {   
                texto:"Festa Junina",    
                afirmacao:"Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa."  
            }
        ]
    },
    {
        enunciado: "O que é a tapioca?",
        alternativas: [
            {   
                texto:"Um tipo de sobremesa feita com leite condensado",  
                afirmacao:"O brigadeiro é um doce típico da culinária brasileira, de origem paulista, que rapidamente se difundiu pelo resto do país, tornando-se comum em todo o país a sua presença em festas de aniversário, junto com doces como o cajuzinho e o beijinho. É conhecido também no Rio Grande do Sul pelo nome de negrinho. Feito com leite condensado."    
            },
            {   
                texto:"Uma iguaria feita com goma de mandioca, geralmente recheada",    
                afirmacao:"A tapioca ou goma é o amido extraído da planta mandioca, usualmente preparada em forma granulada, sendo o ingrediente principal de algumas iguarias típicas do Brasil."   
            }
        ]
    },
    {
        enunciado: "Qual é o prato típico do Nordeste brasileiro?",
        alternativas: [
            {   
                texto:"Feijoada",   
            afirmacao:"Feijoada é uma designação portuguesa a um prato da culinária transmontana que se popularizou também nos demais países lusófonos como Brasil, Angola, Moçambique, Timor-Leste e Macau. Consiste num guisado de feijão, normalmente com carne, e quase sempre acompanhado com arroz."   
            },

            {   
                texto:"Baião de Dois",   
            afirmacao:"Baião de dois é um prato tipico da região Nordeste. Consiste num preparado de arroz e feijão, de preferência o feijão verde ou feijão novo. É frequente adicionar-se queijo coalho e nata. Não se adiciona carne-seca no Ceará."  
            }

        ]
    },
 ];
 
 
let atual = 0 ;
let perguntaAtual;
 let historiaFinal = "";
 
function mostraPergunta() {
    if (atual>= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
 
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada (opcaoSelecionada) {
    const afirmacoes=opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent ="";
}

 mostraPergunta (); 
