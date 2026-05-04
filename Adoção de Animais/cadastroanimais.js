// --- Cadastro de Animais ---
const formAnimais = document.getElementById('animaisForm');
const msgAnimais = document.getElementById('mensagemAnimais');

if (formAnimais) {
  formAnimais.addEventListener('submit', function (event) {
    event.preventDefault();
    if (msgAnimais) msgAnimais.textContent = "";

    const nomeAnimal = document.getElementById('nomeAnimal')?.value.trim();
    const especie = document.getElementById('especie')?.value;
    const idade = document.getElementById('idade')?.value;

    if (!nomeAnimal || !especie || !idade) {
      if (msgAnimais) msgAnimais.textContent = "Por favor, preencha todos os campos obrigatórios.";
      alert("❌ Preencha todos os campos obrigatórios!");
      return;
    }

    if (idade < 0) {
      if (msgAnimais) msgAnimais.textContent = "A idade não pode ser negativa.";
      alert("❌ Idade inválida!");
      return;
    }

    alert("✅ Animal cadastrado com sucesso! Ele aparecerá na lista de adoção.");
    formAnimais.reset();
  });
}