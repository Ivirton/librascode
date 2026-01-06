// Base de dados simples (site estático)
const sinais = [
  {
    id: 1,
    nome: "Backup",
    categoria: "Computação",
    descricao: "Cópia de segurança de dados para evitar perdas.",
    comoFazer: "Movimento de guardar algo para trás, indicando proteção.",
    curiosidade: "Muito usado em contextos de segurança da informação.",
    imagem: "assets/images/backup.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 2,
    nome: "Download",
    categoria: "Internet",
    descricao: "Ação de transferir dados da internet para o computador.",
    comoFazer: "Movimento da mão de cima para baixo.",
    curiosidade: "Representa trazer algo para si.",
    imagem: "assets/images/download.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 3,
    nome: "Upload",
    categoria: "Internet",
    descricao: "Envio de arquivos do computador para a internet.",
    comoFazer: "Movimento da mão de baixo para cima.",
    curiosidade: "É o oposto do download.",
    imagem: "assets/images/upload.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 4,
    nome: "Google",
    categoria: "Internet",
    descricao: "Ferramenta de busca amplamente utilizada na web.",
    comoFazer: "Sinal que representa pesquisa.",
    curiosidade: "É o buscador mais utilizado no mundo.",
    imagem: "assets/images/google.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 5,
    nome: "Google Chrome",
    categoria: "Software",
    descricao: "Navegador de internet desenvolvido pela Google.",
    comoFazer: "Sinal relacionado ao Google seguido de navegação.",
    curiosidade: "Um dos navegadores mais usados.",
    imagem: "assets/images/chrome.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 6,
    nome: "Hacker",
    categoria: "Segurança",
    descricao: "Pessoa que explora sistemas computacionais.",
    comoFazer: "Movimento que indica invasão ou quebra.",
    curiosidade: "Nem todo hacker atua de forma ilegal.",
    imagem: "assets/images/hacker.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 7,
    nome: "Hardware",
    categoria: "Hardware",
    descricao: "Parte física do computador.",
    comoFazer: "Sinal indicando algo concreto ou físico.",
    curiosidade: "Inclui peças como placa-mãe e processador.",
    imagem: "assets/images/hardware.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 8,
    nome: "HD Externo",
    categoria: "Armazenamento",
    descricao: "Dispositivo portátil para armazenamento de dados.",
    comoFazer: "Sinal de HD com movimento externo.",
    curiosidade: "Usado para backup de dados.",
    imagem: "assets/images/hd_externo.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 9,
    nome: "Linux",
    categoria: "Sistema Operacional",
    descricao: "Sistema operacional de código aberto.",
    comoFazer: "Sinal específico para Linux.",
    curiosidade: "Muito usado em servidores.",
    imagem: "assets/images/linux.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 10,
    nome: "Windows",
    categoria: "Sistema Operacional",
    descricao: "Sistema operacional desenvolvido pela Microsoft.",
    comoFazer: "Sinal representando janelas.",
    curiosidade: "Amplamente usado em computadores pessoais.",
    imagem: "assets/images/windows.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 11,
    nome: "Apple",
    categoria: "Tecnologia",
    descricao: "Empresa de tecnologia conhecida por seus dispositivos.",
    comoFazer: "Sinal associado à marca.",
    curiosidade: "Criadora do iPhone e Mac.",
    imagem: "assets/images/apple.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 12,
    nome: "Memória",
    categoria: "Hardware",
    descricao: "Componente responsável por armazenar dados temporários.",
    comoFazer: "Sinal que indica guardar informação.",
    curiosidade: "Essencial para desempenho do sistema.",
    imagem: "assets/images/memoria.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 13,
    nome: "Pendrive",
    categoria: "Armazenamento",
    descricao: "Dispositivo portátil para armazenamento de arquivos.",
    comoFazer: "Movimento de conectar algo pequeno.",
    curiosidade: "Utiliza tecnologia USB.",
    imagem: "assets/images/pendrive.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 14,
    nome: "Placa-mãe",
    categoria: "Hardware",
    descricao: "Componente principal que conecta todas as partes do computador.",
    comoFazer: "Sinal de base ou estrutura.",
    curiosidade: "Responsável pela comunicação dos componentes.",
    imagem: "assets/images/placa_mae.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 15,
    nome: "Processador",
    categoria: "Hardware",
    descricao: "Unidade responsável pelo processamento das informações.",
    comoFazer: "Sinal que indica pensamento ou cálculo.",
    curiosidade: "Conhecido como o cérebro do computador.",
    imagem: "assets/images/processador.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 16,
    nome: "Símbolo Arroba (@)",
    categoria: "Internet",
    descricao: "Símbolo utilizado em e-mails e redes sociais.",
    comoFazer: "Sinal circular indicando o símbolo.",
    curiosidade: "Muito usado em endereços eletrônicos.",
    imagem: "assets/images/arroba.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 17,
    nome: "Site",
    categoria: "Internet",
    descricao: "Conjunto de páginas disponíveis na web.",
    comoFazer: "Movimento indicando navegação.",
    curiosidade: "Pode ser estático ou dinâmico.",
    imagem: "assets/images/site.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 18,
    nome: "Software",
    categoria: "Software",
    descricao: "Parte lógica do computador, composta por programas.",
    comoFazer: "Sinal relacionado a programa.",
    curiosidade: "Pode ser livre ou proprietário.",
    imagem: "assets/images/software.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 19,
    nome: "Vírus",
    categoria: "Segurança",
    descricao: "Programa malicioso que pode causar danos ao sistema.",
    comoFazer: "Movimento que indica contaminação.",
    curiosidade: "Pode roubar dados ou danificar arquivos.",
    imagem: "assets/images/virus.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 20,
    nome: "USB",
    categoria: "Hardware",
    descricao: "Padrão de conexão para dispositivos.",
    comoFazer: "Movimento de encaixe.",
    curiosidade: "Usado em pendrives e periféricos.",
    imagem: "assets/images/usb.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 21,
    nome: "Webcam",
    categoria: "Hardware",
    descricao: "Câmera utilizada para captura de imagem e vídeo.",
    comoFazer: "Sinal indicando câmera.",
    curiosidade: "Muito usada em videoconferências.",
    imagem: "assets/images/webcam.gif",
    video: "https://www.youtube.com/watch?v=N2-SEMm_VO0"
  },
  {
    id: 22,
    nome: "Excel",
    categoria: "Software",
    descricao: "Programa de planilhas eletrônicas.",
    comoFazer: "Sinal associado a tabelas.",
    curiosidade: "Muito usado para cálculos.",
    imagem: "assets/images/excel.gif",
    video: "https://www.youtube.com/watch?v=h2xYqTyS2WI"
  },
  {
    id: 23,
    nome: "Word",
    categoria: "Software",
    descricao: "Editor de textos da Microsoft.",
    comoFazer: "Sinal de escrita.",
    curiosidade: "Usado para criação de documentos.",
    imagem: "assets/images/word.gif",
    video: "https://www.youtube.com/watch?v=h2xYqTyS2WI"
  },
  {
    id: 24,
    nome: "Java",
    categoria: "Programação",
    descricao: "Linguagem de programação amplamente utilizada.",
    comoFazer: "Sinal específico para Java.",
    curiosidade: "Muito usada no desenvolvimento de sistemas.",
    imagem: "assets/images/java.gif",
    video: "https://www.youtube.com/watch?v=h2xYqTyS2WI"
  }
];
