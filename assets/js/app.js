const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

function renderCards(lista) {
  container.innerHTML = "";

  lista.forEach(sinal => {
    container.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card card-sinal h-100" onclick="openSinal(${sinal.id})">
          <div class="card-body">
            <div class="icon-circle">🤟</div>
            <h5>${sinal.nome}</h5>
            <span class="badge bg-secondary">${sinal.categoria}</span>
            <p class="mt-2">${sinal.descricao}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function openSinal(id) {
  window.location.href = `sinal.html?id=${id}`;
}

function filterCategory(cat) {
  if (cat === "Todos") {
    renderCards(sinais);
  } else {
    renderCards(sinais.filter(s => s.categoria === cat));
  }
}

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  renderCards(sinais.filter(s => s.nome.toLowerCase().includes(value)));
});

renderCards(sinais);
