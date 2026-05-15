// --- Cadastro de Usuário ---
const formUsuario = document.getElementById('cadastroForm');
const msgUsuario = document.getElementById('mensagemUsuario');

if (formUsuario) {
  formUsuario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (msgUsuario) msgUsuario.textContent = "";

    // usa os IDs do HTML
    const nome = document.getElementById('nomeUsuario')?.value.trim();
    const email = document.getElementById('emailUsuario')?.value.trim();
    const senha = document.getElementById('senhaUsuario')?.value.trim();
    const telefone = document.getElementById('telefoneUsuario')?.value.trim();

    if (!nome || !email || !senha || !telefone) {
      if (msgUsuario) msgUsuario.textContent = "Por favor, preencha todos os campos obrigatórios.";
      alert("❌ Preencha todos os campos obrigatórios!");
      return;
    }

    if (senha.length < 6) {
      if (msgUsuario) msgUsuario.textContent = "A senha deve ter pelo menos 6 caracteres.";
      alert("❌ A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      if (msgUsuario) msgUsuario.textContent = "Email inválido.";
      alert("❌ Email inválido!");
      return;
    }

    alert("✅ Cadastro de usuário realizado com sucesso! Faça login para continuar.");
    formUsuario.reset();

    // Redireciona para login após 1 segundo
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
  });
}