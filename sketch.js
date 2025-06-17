let perguntas = [
  {
    pergunta: "O que caracteriza a vida no campo?",
    alternativas: ["Fazendas e agricultura", "Muitos prédios", "Tecnologia avançada", "Transporte público"],
    resposta: 0
  },
  {
    pergunta: "Qual é o principal produto agrícola cultivado no Brasil?",
    alternativas: ["Café", "Carne", "Milho", "Azeite"],
    resposta: 0
  },
  {
    pergunta: "Qual é a principal atividade econômica das cidades?",
    alternativas: ["Indústria e serviços", "Agricultura", "Pesca", "Artesanato"],
    resposta: 0
  },
  {
    pergunta: "Qual a principal diferença entre o campo e a cidade?",
    alternativas: ["No campo há mais natureza e menos prédios", "Na cidade há mais animais", "No campo há mais fábricas", "Na cidade o clima é melhor"],
    resposta: 0
  },
  {
    pergunta: "O que é agricultura sustentável?",
    alternativas: ["Práticas agrícolas que preservam o meio ambiente", "Agricultura com uso intensivo de agrotóxicos", "Agricultura em grandes fazendas", "Uso de máquinas pesadas"],
    resposta: 0
  },
  {
    pergunta: "Qual é um benefício de morar no campo?",
    alternativas: ["Ar puro e tranquilidade", "Mais empregos", "Mais opções de lazer", "Maior segurança pública"],
    resposta: 0
  },
  {
    pergunta: "Como a urbanização afeta o meio ambiente?",
    alternativas: ["Causa poluição e diminui áreas verdes", "Aumenta a produção de alimentos", "Diminui o consumo de energia", "Melhora a qualidade do ar"],
    resposta: 0
  },
  {
    pergunta: "Qual é a função principal de uma cidade?",
    alternativas: ["Prover infraestrutura e serviços para os habitantes", "Produzir alimentos", "Produzir energia elétrica", "Proteger o meio ambiente"],
    resposta: 0
  },
  {
    pergunta: "Como as pessoas do campo costumam se transportar?",
    alternativas: ["Cavalo, bicicleta, transporte rural", "Carros e ônibus", "Aviões", "Trem subterrâneo"],
    resposta: 0
  },
  {
    pergunta: "O que é um ‘agricultor familiar’?",
    alternativas: ["Alguém que trabalha em pequena propriedade rural", "Um grande empresário rural", "Quem trabalha em plantações comerciais", "Um trabalhador urbano"],
    resposta: 0
  }
];

let perguntaAtual = 0;
let acertos = 0;
let escolhida = -1;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  background(150, 255, 150);  // Fundo "campo", pode ser alterado para cidade dependendo da pergunta

  // Exibe a pergunta atual
  textSize(24);
  text(perguntas[perguntaAtual].pergunta, width / 2, 80);
 
  // Exibe as alternativas
  textSize(18);
  for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
    let y = 150 + i * 40;
    if (escolhida === i) {
      fill(200, 255, 0);  // Destaque para a escolha
    } else {
      fill(255);
    }
    rect(150, y - 20, 300, 40, 10);
    fill(0);
    text(perguntas[perguntaAtual].alternativas[i], width / 2, y);
  }

  // Exibe o número de acertos
  textSize(20);
  fill(0);
  text("Acertos: " + acertos, width / 2, height - 40);
}

function mousePressed() {
  for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
    let y = 150 + i * 40;
    if (mouseX > 150 && mouseX < 450 && mouseY > y - 20 && mouseY < y + 20) {
      escolhida = i;
      verificarResposta();
      break;
    }
  }
}

function verificarResposta() {
  if (escolhida === perguntas[perguntaAtual].resposta) {
    acertos++;
  }
 
  perguntaAtual++;
 
  if (perguntaAtual >= perguntas.length) {
    perguntaAtual = 0;  // Recomeça o quiz
    acertos = 0;  // Zera o contador de acertos
  }
 
  escolhida = -1;
  redraw();
}