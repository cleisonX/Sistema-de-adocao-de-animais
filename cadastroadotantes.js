// --- Cadastro de Adotantes ---
const formAdotantes = document.getElementById('adotantesForm');
const msgAdotantes = document.getElementById('mensagemAdotantes');

if (formAdotantes) {
  formAdotantes.addEventListener('submit', function (event) {
    event.preventDefault();
    if (msgAdotantes) msgAdotantes.textContent = "";

    const nome = document.getElementById('nomeAdotante')?.value.trim();
    const email = document.getElementById('emailAdotante')?.value.trim();
    const telefone = document.getElementById('telefoneAdotante')?.value.trim();
    const motivacao = document.getElementById('motivacao')?.value.trim();

    if (!nome || !email || !telefone || !motivacao) {
      if (msgAdotantes) msgAdotantes.textContent = "Por favor, preencha todos os campos obrigatórios.";
      alert("❌ Preencha todos os campos obrigatórios!");
      return;
    }

    if (nome.length < 3) {
      if (msgAdotantes) msgAdotantes.textContent = "Nome deve ter pelo menos 3 caracteres.";
      alert("❌ Nome muito curto!");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      if (msgAdotantes) msgAdotantes.textContent = "Email inválido.";
      alert("❌ Email inválido!");
      return;
    }

    alert("✅ Cadastro de adotante realizado com sucesso! Agora você pode agendar visitas.");
    formAdotantes.reset();
  });
}