// denuncias.js
document.addEventListener('DOMContentLoaded', function () {
    const formDenuncia = document.getElementById('formDenuncia');
    const resultado = document.getElementById('resultadoDenuncia');
    const btnLimpar = document.getElementById('btnLimparDenuncia');

    if (formDenuncia) {
        formDenuncia.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nomeDenuncia')?.value.trim() || '';
            const email = document.getElementById('emailDenuncia')?.value.trim() || '';
            const mensagem = document.getElementById('mensagemDenuncia')?.value.trim();

            if (!mensagem) {
                if (resultado) {
                    resultado.innerText = "⚠️ A descrição da denúncia é obrigatória!";
                    resultado.style.color = "red";
                }
                alert("❌ Descreva a denúncia antes de enviar!");
                return;
            }

            // Se email foi preenchido, valida
            if (email && (!email.includes('@') || !email.includes('.'))) {
                if (resultado) {
                    resultado.innerText = "⚠️ Email inválido!";
                    resultado.style.color = "red";
                }
                alert("❌ Email inválido!");
                return;
            }

            // Sucesso
            if (resultado) {
                resultado.innerText = "✅ Denúncia enviada com sucesso! Obrigado por ajudar.";
                resultado.style.color = "green";
                resultado.style.backgroundColor = "#e6ffe6";
                resultado.style.padding = "10px";
                resultado.style.borderRadius = "5px";
            }

            alert("✅ Denúncia enviada! Sua mensagem ajuda a proteger os animais.");

            // Limpa o formulário
            document.getElementById('nomeDenuncia').value = '';
            document.getElementById('emailDenuncia').value = '';
            document.getElementById('mensagemDenuncia').value = '';
        });
    }

    // Botão limpar
    if (btnLimpar) {
        btnLimpar.addEventListener('click', function () {
            document.getElementById('nomeDenuncia').value = '';
            document.getElementById('emailDenuncia').value = '';
            document.getElementById('mensagemDenuncia').value = '';

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