
'use strict';

// Dados na mesma ordem dos cartões do HTML. Nenhuma API ou chave é necessária.
const personagens = [
  { nome: 'Tony Stark', heroi: 'Homem de Ferro', descricao: 'Inventor e empresário que usa sua inteligência para desenvolver armaduras e atuar ao lado dos Vingadores.', habilidades: 'Armaduras tecnológicas, voo e engenharia.' },
  { nome: 'Steve Rogers', heroi: 'Capitão América', descricao: 'Um supersoldado conhecido pela coragem e pela liderança, que combate usando seu escudo.', habilidades: 'Força e resistência aprimoradas, estratégia e combate com escudo.' },
  { nome: 'Thor', heroi: 'deus do Trovão', descricao: 'O deus do trovão de Asgard, que luta para proteger seu povo e seus aliados na Terra.', habilidades: 'Controle de raios, força sobre-humana e combate com armas asgardianas.' },
  { nome: 'Bruce Banner', heroi: 'Hulk', descricao: 'Cientista que se transforma no Hulk, uma poderosa criatura verde.', habilidades: 'Força extraordinária, resistência e grandes saltos.' },
  { nome: 'Natasha Romanoff', heroi: 'Viúva Negra', descricao: 'Uma espiã experiente e integrante dos Vingadores, especializada em missões de infiltração.', habilidades: 'Espionagem, artes marciais e estratégia.' },
  { nome: 'Clint Barton', heroi: 'Gavião Arqueiro', descricao: 'Um arqueiro de precisão excepcional que usa diferentes tipos de flechas em combate.', habilidades: 'Arco e flecha, pontaria e combate corpo a corpo.' },
  { nome: 'T’Challa', heroi: 'Pantera Negra', descricao: 'Herói de Wakanda que carrega o manto do Pantera Negra e protege sua nação.', habilidades: 'Agilidade e força aprimoradas, combate e traje de vibranium.' },
  { nome: 'Bucky Barnes', heroi: 'Soldado Invernal', descricao: 'Amigo de Steve Rogers e combatente que passa a ser conhecido como Soldado Invernal.', habilidades: 'Força aprimorada, braço mecânico e treinamento de combate.' },
  { nome: 'Stephen Strange', heroi: 'Doutor Estranho', descricao: 'Ex-cirurgião que aprende as artes místicas e enfrenta ameaças sobrenaturais.', habilidades: 'Magia, portais e proteção mística.' },
  { nome: 'Scott Lang', heroi: 'Homem-Formiga', descricao: 'Herói que utiliza um traje capaz de mudar seu tamanho com a tecnologia das partículas Pym.', habilidades: 'Redução e aumento de tamanho e comunicação com formigas.' },
  { nome: 'Heimdall', heroi: 'Heimdall', descricao: 'Guardião da Ponte Bifrost de Asgard, responsável por proteger os nove reinos e observar acontecimentos em diferentes lugares.', habilidades: 'Visão extraordinária, sentidos aguçados e combate com espada.' },
  { nome: 'Odin', heroi: 'Pai de Todos', descricao: 'Rei de Asgard e pai de Thor e Loki, conhecido por sua sabedoria e por governar os deuses asgardianos.', habilidades: 'Magia asgardiana, grande força, conhecimento e manipulação de energia.' },
  { nome: 'Ultron', heroi: 'Ultron', descricao: 'Inteligência artificial criada com o objetivo de proteger a humanidade, mas que passa a considerar os humanos uma ameaça.', habilidades: 'Controle tecnológico, força mecânica, voo e capacidade de transferir sua consciência.' },
  { nome: 'Peter Parker', heroi: 'Homem-Aranha', descricao: 'Jovem herói que ganha habilidades especiais após ser picado por uma aranha geneticamente modificada.', habilidades: 'Sentido aranha, agilidade, força aprimorada e lançamento de teias.' },
  { nome: 'Wanda Maximoff', heroi: 'Feiticeira Escarlate', descricao: 'Uma poderosa personagem capaz de manipular energias e alterar a realidade por meio de seus poderes mágicos.', habilidades: 'Telecinese, manipulação da realidade, magia do caos e projeção de energia.' },
  { nome: 'Drax', heroi: 'Drax', descricao: 'Guerreiro que busca vingança contra aqueles responsáveis pela destruição de sua família e se torna integrante dos Guardiões da Galáxia.', habilidades: 'Força sobre-humana, resistência e combate corpo a corpo.' },
  { nome: 'Gamora', heroi: 'Gamora', descricao: 'Guerreira habilidosa que foi criada por Thanos e posteriormente se junta aos Guardiões da Galáxia.', habilidades: 'Agilidade aprimorada, força, estratégia e domínio de armas.' },
  { nome: 'Peter Quill', heroi: 'Senhor das Estrelas', descricao: 'Aventureiro espacial e líder dos Guardiões da Galáxia, conhecido por seu humor e espírito de liderança.', habilidades: 'Combate com armas de energia, pilotagem de naves e estratégia.' },
  { nome: 'Rocket', heroi: 'Rocket', descricao: 'Guaxinim geneticamente modificado, especialista em tecnologia, armamentos e criação de equipamentos.', habilidades: 'Engenharia, estratégia, pontaria e conhecimento tecnológico.' },
  { nome: 'Groot', heroi: 'Groot', descricao: 'Ser de origem vegetal que acompanha os Guardiões da Galáxia e possui uma forte ligação com seus companheiros.', habilidades: 'Regeneração, crescimento de membros, manipulação de galhos e força física.' },
  { nome: 'Nebulosa', heroi: 'Nebulosa', descricao: 'Guerreira cibernética criada por Thanos, que passa por conflitos pessoais e acaba se tornando aliada dos Guardiões da Galáxia.', habilidades: 'Força aprimorada, implantes cibernéticos e treinamento de combate.' },
  { nome: 'Mantis', heroi: 'Mantis', descricao: 'Integrante dos Guardiões da Galáxia que possui habilidades empáticas capazes de influenciar as emoções de outras pessoas.', habilidades: 'Empatia, manipulação emocional e percepção de sentimentos.' },
  { nome: 'Thanos', vilão: 'Thanos', descricao: 'Titã poderoso que busca reunir as Joias do Infinito para alterar o equilíbrio do universo de acordo com sua visão.', habilidades: 'Força extraordinária, resistência, inteligência estratégica e domínio das Joias do Infinito.' },
  { nome: 'Visão', heroi: 'Visão', descricao: 'Androide criado a partir de tecnologia avançada e da Joia da Mente, que se torna aliado dos Vingadores.', habilidades: 'Intangibilidade, voo, força aprimorada e disparos de energia.' },
  { nome: 'JARVIS', IA: 'JARVIS', descricao: 'Assistente virtual desenvolvido por Tony Stark para auxiliar no controle de suas tecnologias, armaduras e sistemas.', habilidades: 'Inteligência artificial, análise de dados e controle de sistemas tecnológicos.' },
  { nome: 'James Rhodes', heroi: 'Máquina de Combate', descricao: 'Militar e grande amigo de Tony Stark, que utiliza uma armadura tecnológica equipada com armamentos pesados.', habilidades: 'Combate militar, pilotagem de armaduras e utilização de armas avançadas.' },
  { nome: 'Nick Fury', heroi: 'Nick Fury', descricao: 'Ex-diretor da S.H.I.E.L.D. e responsável por reunir diferentes heróis para enfrentar ameaças que colocam o mundo em perigo.', habilidades: 'Liderança, inteligência estratégica, espionagem e combate.' },
  { nome: 'Maria Hill', heroi: 'Agente Maria Hill', descricao: 'Agente de alto escalão da S.H.I.E.L.D., conhecida por sua competência em operações especiais e por trabalhar ao lado de Nick Fury.', habilidades: 'Estratégia, investigação, liderança e treinamento militar.' },
  { nome: 'Hela', heroi: 'Hela', descricao: 'Filha de Odin e poderosa deusa asgardiana que busca conquistar Asgard e expandir seu domínio.', habilidades: 'Criação de armas, força sobre-humana, regeneração e manipulação de energia.' },
  { nome: 'Loki', vilão: 'Loki', descricao: 'Irmão adotivo de Thor, conhecido por sua inteligência, ambição e habilidade de manipular situações por meio de ilusões.', habilidades: 'Magia, ilusões, transformação, teletransporte e manipulação.' },
  { nome: 'Pepper Potts', heroi: 'Pepper Potts', descricao: 'Parceira de Tony Stark e executiva que assume um papel importante na administração das empresas Stark.', habilidades: 'Liderança, inteligência administrativa e utilização da armadura Resgate.' },
  { nome: 'Brunhilde', heroi: 'Valquíria', descricao: 'Guerreira asgardiana que sobrevive à destruição de seu antigo grupo e posteriormente assume a liderança de Nova Asgard.', habilidades: 'Combate com espadas, força aprimorada, resistência e habilidades de guerreira.' },
  { nome: 'Killmonger', vilão: 'Killmonger', descricao: 'Ex-soldado com treinamento militar avançado que desafia T’Challa pelo trono de Wakanda.', habilidades: 'Combate corpo a corpo, estratégia militar e domínio de armas.' },
  { nome: 'Yondu Udonta', heroi: 'Yondu Udonta', descricao: 'Líder dos Devastadores e figura paterna de Peter Quill, conhecido por utilizar uma flecha controlada por assobios.', habilidades: 'Controle da flecha Yaka, pontaria e experiência em combate espacial.' },
  { nome: 'Sam Wilson', heroi: 'Falcão', descricao: 'Ex-paraquedista militar que utiliza um equipamento com asas mecânicas para voar e combater ao lado dos Vingadores.', habilidades: 'Voo, combate aéreo, treinamento militar e estratégia.' },
  { nome: 'Wade Wilson', heroi: 'Deadpool', descricao: 'Mercenário conhecido por seu humor irreverente, habilidades de combate e capacidade extraordinária de regeneração.', habilidades: 'Fator de cura acelerado, domínio de armas, artes marciais e resistência.' },
  { nome: 'Victor Von Doom', heroi: 'Doutor Destino', descricao: 'Gênio científico e governante da Latvéria, conhecido por combinar conhecimentos tecnológicos com poderes místicos.', habilidades: 'Inteligência científica, magia, armadura tecnológica e manipulação de energia.' },
  { nome: 'Norman Osborn', heroi: 'Duende Verde', descricao: 'Empresário e cientista que utiliza uma fórmula experimental para adquirir habilidades aprimoradas e assume a identidade do Duende Verde.', habilidades: 'Força aprimorada, inteligência científica, planador e armamentos explosivos.' },
  { nome: 'Caveira Vermelha', vilão: 'Caveira Vermelha', descricao: 'Antigo líder da organização Hidra e inimigo do Capitão América, conhecido por sua busca pelo poder do Tesseract.', habilidades: 'Estratégia militar, liderança, conhecimento científico e combate.' },
  { nome: 'Wong', heroi: 'Wong', descricao: 'Mestre das artes místicas e aliado do Doutor Estranho, responsável por proteger conhecimentos e artefatos mágicos.', habilidades: 'Magia, criação de portais, proteção mística e combate com armas mágicas.' }
];


const buscar = seletor => document.querySelector(seletor);
const lista = buscar('.main-container2');
const cartoes = Array.from(lista.querySelectorAll('.main-container'));
const dialogo = buscar('#character-dialog');
const chave = 'marvel-favoritos-v1';
let favoritos = [];
let somenteFavoritos = false;
let personagemAberto = 0;
let ultimoCartao;

try {
  const salvos = JSON.parse(localStorage.getItem(chave));
  if (Array.isArray(salvos)) favoritos = [...new Set(salvos.filter(id => Number.isInteger(id) && id >= 0 && id < personagens.length))];
} catch { /* O projeto funciona mesmo se o armazenamento estiver indisponível. */ }

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function atualizarLista() {
  const termo = normalizar(buscar('#search').value);
  const ordem = buscar('#sort').value;
  const indices = personagens.map((_, id) => id);
  if (ordem !== 'original') indices.sort((a, b) => personagens[a].nome.localeCompare(personagens[b].nome, 'pt-BR') * (ordem === 'az' ? 1 : -1));
  let quantidade = 0;
  indices.forEach(id => {
    const personagem = personagens[id];
    const visivel = normalizar(personagem.nome + ' ' + personagem.heroi).includes(termo) && (!somenteFavoritos || favoritos.includes(id));
    cartoes[id].hidden = !visivel;
    cartoes[id].querySelector('.favorite-mark').hidden = !favoritos.includes(id);
    lista.append(cartoes[id]);
    if (visivel) quantidade++;
  });
  buscar('#result-count').textContent = `${quantidade} de ${personagens.length} personagens`;
  buscar('#empty-state').hidden = quantidade > 0;
  buscar('#favorites-filter').textContent = `Meus favoritos (${favoritos.length})`;
  buscar('#favorites-filter').setAttribute('aria-pressed', String(somenteFavoritos));
}

function atualizarBotaoFavorito() {
  const favorito = favoritos.includes(personagemAberto);
  buscar('#toggle-favorite').textContent = favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
  buscar('#toggle-favorite').setAttribute('aria-pressed', String(favorito));
}

function abrirPersonagem(id) {
  personagemAberto = id;
  ultimoCartao = cartoes[id].querySelector('.cards');
  const personagem = personagens[id];
  buscar('#dialog-name').textContent = personagem.nome;
  buscar('#dialog-alias').textContent = personagem.heroi;
  buscar('#dialog-description').textContent = personagem.descricao;
  buscar('#dialog-abilities').textContent = personagem.habilidades;
  const imagem = buscar('#dialog-image');
  imagem.alt = personagem.nome;
  imagem.src = personagem.imagem;
  atualizarBotaoFavorito();
  dialogo.showModal();
}

cartoes.forEach((container, id) => {
  const cartao = container.querySelector('.cards');
  const fundo = cartao.style.backgroundImage;
  personagens[id].imagem = fundo.slice(4, -1).replace(/^["']|["']$/g, '');
  cartao.setAttribute('role', 'button');
  cartao.setAttribute('tabindex', '0');
  cartao.setAttribute('aria-haspopup', 'dialog');
  cartao.setAttribute('aria-label', `Ver detalhes de ${personagens[id].nome}, ${personagens[id].heroi}`);
  const marca = document.createElement('span');
  marca.className = 'favorite-mark';
  marca.textContent = '★ Favorito';
  cartao.append(marca);
  cartao.addEventListener('click', () => abrirPersonagem(id));
  cartao.addEventListener('keydown', evento => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      abrirPersonagem(id);
    }
  });
  // Se a imagem externa falhar, usa uma imagem que já veio no projeto.
  const testeImagem = new Image();
  testeImagem.onerror = () => { cartao.style.backgroundImage = 'url("./assets/logo-marvel.png")'; };
  testeImagem.src = personagens[id].imagem;
});

buscar('#dialog-image').addEventListener('error', evento => {
  const imagem = evento.currentTarget;
  const fallback = new URL('./assets/logo-marvel.png', document.baseURI).href;
  if (imagem.src !== fallback) imagem.src = fallback;
});
buscar('#search').addEventListener('input', atualizarLista);
buscar('#sort').addEventListener('change', atualizarLista);
buscar('#favorites-filter').addEventListener('click', () => { somenteFavoritos = !somenteFavoritos; atualizarLista(); });
buscar('#clear-filters').addEventListener('click', () => {
  buscar('#search').value = '';
  buscar('#sort').value = 'original';
  somenteFavoritos = false;
  atualizarLista();
});
buscar('#toggle-favorite').addEventListener('click', () => {
  if (favoritos.includes(personagemAberto)) favoritos = favoritos.filter(id => id !== personagemAberto);
  else favoritos.push(personagemAberto);
  try { localStorage.setItem(chave, JSON.stringify(favoritos)); } catch { /* Favoritos mantidos nesta sessão. */ }
  atualizarBotaoFavorito();
  atualizarLista();
});
buscar('#close-dialog').addEventListener('click', () => dialogo.close());
dialogo.addEventListener('close', () => {
  if (ultimoCartao && !ultimoCartao.parentElement.hidden) ultimoCartao.focus();
  else buscar('#favorites-filter').focus();
});
dialogo.addEventListener('click', evento => {
  const area = dialogo.getBoundingClientRect();
  if (evento.target === dialogo && (evento.clientX < area.left || evento.clientX > area.right || evento.clientY < area.top || evento.clientY > area.bottom)) dialogo.close();
});
atualizarLista();
