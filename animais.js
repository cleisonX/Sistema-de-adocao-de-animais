// ===== FILTRO DE ANIMAIS =====
document.addEventListener("DOMContentLoaded", () => {
  const buscaInput = document.getElementById("busca");
  const filtroSelect = document.getElementById("filtro");
  const animaisListados = document.querySelectorAll(".animal");

  // Só roda se os elementos existirem
  if (buscaInput && filtroSelect && animaisListados.length > 0) {
    function filtrarAnimais() {
      const termo = buscaInput.value.toLowerCase();
      const filtro = filtroSelect.value.toLowerCase();

      animaisListados.forEach(animal => {
        const nome = animal.dataset.nome?.toLowerCase() || "";
        const tipo = animal.dataset.tipo?.toLowerCase() || "";

        const correspondeBusca = nome.includes(termo);
        const correspondeFiltro = filtro === "todos" || tipo === filtro;

        animal.style.display = (correspondeBusca && correspondeFiltro) ? "block" : "none";
      });
    }

    // Executa ao carregar
    filtrarAnimais();

    // Eventos
    buscaInput.addEventListener("input", filtrarAnimais);
    filtroSelect.addEventListener("change", filtrarAnimais);
  }
});