// login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const resultado = document.getElementById('resultadoLogin');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('emailLogin')?.value.trim();
            const senha = document.getElementById('senhaLogin')?.value.trim();

            if (!email || !senha) {
                if (resultado) {
                    resultado.innerText = "⚠️ Preencha todos os campos!";
                    resultado.style.color = "red";
                }
                alert("❌ Preencha todos os campos!");
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                if (resultado) {
                    resultado.innerText = "⚠️ Email inválido!";
                    resultado.style.color = "red";
                }
                alert("❌ Email inválido!");
                return;
            }

            if (senha.length < 6) {
                if (resultado) {
                    resultado.innerText = "⚠️ Senha deve ter pelo menos 6 caracteres!";
                    resultado.style.color = "red";
                }
                alert("❌ Senha muito curta!");
                return;
            }

            // SIMULAÇÃO DE LOGIN

            if (resultado) {
                resultado.innerText = "✅ Login realizado com sucesso! Redirecionando...";
                resultado.style.color = "green";
                resultado.style.backgroundColor = "#e6ffe6";
                resultado.style.padding = "10px";
                resultado.style.borderRadius = "5px";
            }

            alert("✅ Login realizado com sucesso! Bem-vindo ao Conecta Patas.");

            // Redireciona após 1 segundo
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    // Botão "Esqueceu a senha"
    const forgotPassword = document.querySelector('.forgot-password');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function (e) {
            e.preventDefault();
            alert("🔐 Instruções de recuperação de senha serão enviadas para seu e-mail.");
        });
    }

    // Botões de login social
    const socialButtons = document.querySelectorAll('.btn-social');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            alert("🔓 Login social simulado. Em produção, você seria redirecionado.");
        });
    });
});