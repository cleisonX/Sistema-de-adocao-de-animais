// contato.js
document.addEventListener('DOMContentLoaded', function () {
    const formContato = document.getElementById('formContato');
    const resultado = document.getElementById('resultadoContato');
    const btnLimpar = document.getElementById('btnLimparContato');

    if (formContato) {
        formContato.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nomeContato')?.value.trim();
            const email = document.getElementById('emailContato')?.value.trim();
            const mensagem = document.getElementById('mensagemContato')?.value.trim();

            // Validações
            if (!nome || !email || !mensagem) {
                if (resultado) {
                    resultado.innerText = "⚠️ Todos os campos são obrigatórios!";
                    resultado.style.color = "red";
                }
                alert("❌ Preencha todos os campos!");
                return;
            }

            if (nome.length < 3) {
                if (resultado) {
                    resultado.innerText = "⚠️ O nome deve ter pelo menos 3 caracteres!";
                    resultado.style.color = "red";
                }
                alert("❌ Nome muito curto!");
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

            // Sucesso
            if (resultado) {
                resultado.innerText = "✅ Mensagem enviada com sucesso! Entraremos em contato em breve.";
                resultado.style.color = "green";
                resultado.style.backgroundColor = "#e6ffe6";
                resultado.style.padding = "10px";
                resultado.style.borderRadius = "5px";
            }

            alert("✅ Mensagem enviada! Entraremos em contato em breve.");

            // Limpa o formulário
            document.getElementById('nomeContato').value = '';
            document.getElementById('emailContato').value = '';
            document.getElementById('mensagemContato').value = '';
        });
    }

    // Botão limpar
    if (btnLimpar) {
        btnLimpar.addEventListener('click', function () {
            document.getElementById('nomeContato').value = '';
            document.getElementById('emailContato').value = '';
            document.getElementById('mensagemContato').value = '';

            if (resultado) {
                resultado.innerText = '';
                resultado.style.backgroundColor = '';
                resultado.style.padding = '';
            }

            // Feedback visual
            this.style.backgroundColor = "#ccc";
            this.innerText = "Campos limpos!";
            setTimeout(() => {
                this.style.backgroundColor = "";
                this.innerText = "Limpar Campos";
            }, 2000);
        });
    }
});