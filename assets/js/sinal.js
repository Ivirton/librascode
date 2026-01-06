// ===============================
// CAPTURA DO ID PELA URL
// ===============================
const params = new URLSearchParams(window.location.search);
const sinalId = parseInt(params.get("id"));

// ===============================
// BUSCA DO SINAL NO ARRAY
// ===============================
const sinal = sinais.find(s => s.id === sinalId);

// ===============================
// ELEMENTOS DO HTML
// ===============================
const nomeSinal = document.getElementById("nomeSinal");
const descricao = document.getElementById("descricao");
const comoFazer = document.getElementById("comoFazer");
const curiosidade = document.getElementById("curiosidade");

const categoriaBadge = document.getElementById("categoriaBadge");
const mediaImagem = document.getElementById("mediaImagem");
const mediaVideo = document.querySelector(".media-video");

const relacionadosContainer = document.getElementById("relacionados");

// ===============================
// PREENCHIMENTO DOS DADOS
// ===============================
if (sinal) {
  // Texto
  nomeSinal.textContent = sinal.nome;
  descricao.textContent = sinal.descricao;
  comoFazer.textContent = sinal.comoFazer;
  curiosidade.textContent = sinal.curiosidade;
  categoriaBadge.textContent = sinal.categoria;

  // ===============================
  // IMAGEM OU VÍDEO
  // ===============================
  if (sinal.video && sinal.video.includes("youtube")) {
    // Se for YouTube, esconder imagem e video local
    mediaImagem.style.display = "none";
    mediaVideo.style.display = "none";

    mediaImagem.parentElement.insertAdjacentHTML(
      "beforeend",
      `
      <iframe
        width="100%"
        height="315"
        class="media-video"
        src="${sinal.video.replace("watch?v=", "embed/")}"
        frameborder="0"
        allowfullscreen>
      </iframe>
      `
    );
  } else if (sinal.video) {
    // Vídeo local
    mediaVideo.querySelector("source").src = sinal.video;
    mediaVideo.load();
    mediaImagem.style.display = "none";
  } else {
    // Apenas imagem
    mediaImagem.src = sinal.imagem;
    mediaVideo.style.display = "none";
  }

  // ===============================
  // SINAIS RELACIONADOS (MESMA CATEGORIA)
  // ===============================
  const relacionados = sinais.filter(
    s => s.categoria === sinal.categoria && s.id !== sinal.id
  );

  relacionadosContainer.innerHTML = "";

  relacionados.forEach(rel => {
    relacionadosContainer.innerHTML += `
      <div class="col-md-3 mb-3">
        <div class="card card-sinal h-100" onclick="window.location.href='sinal.html?id=${rel.id}'" style="cursor:pointer">
          <div class="card-body text-center">
            <div class="icon-circle">🤟</div>
            <h6>${rel.nome}</h6>
            <span class="badge bg-secondary">${rel.categoria}</span>
          </div>
        </div>
      </div>
    `;
  });
} else {
  // Caso o ID seja inválido
  nomeSinal.textContent = "Sinal não encontrado";
}
