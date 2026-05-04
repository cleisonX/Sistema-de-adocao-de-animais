// ===== VISITAS.JS =====
let visitaEditando = null; // controla se estamos editando uma visita

document.addEventListener('DOMContentLoaded', function () {
    console.log("Página de visitas carregada!");

    // Data mínima (amanhã)
    const dataInput = document.getElementById('dataVisita');
    if (dataInput) {
        const amanha = new Date();
        amanha.setDate(amanha.getDate() + 1);
        const ano = amanha.getFullYear();
        const mes = String(amanha.getMonth() + 1).padStart(2, '0');
        const dia = String(amanha.getDate()).padStart(2, '0');
        dataInput.min = `${ano}-${mes}-${dia}`;
        console.log("Data mínima definida:", dataInput.min);
    }

    // Carregar visitas salvas
    carregarVisitas();

    // Formulário de agendamento
    const form = document.getElementById('formAgendamento');
    if (form) {
        console.log("Formulário encontrado!");

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log("Formulário enviado!");

            const animal = document.getElementById('animalSelect').value;
            const ong = document.getElementById('ongSelect').value;
            const data = document.getElementById('dataVisita').value;
            const hora = document.getElementById('horaVisita').value;
            const pessoas = document.getElementById('pessoas').value;
            const observacoes = document.getElementById('observacoes').value;
            const termos = document.getElementById('termos').checked;

            if (!animal || !ong || !data || !hora) {
                alert('❌ Preencha todos os campos obrigatórios!');
                return;
            }

            if (!termos) {
                alert('❌ Você precisa aceitar os termos!');
                return;
            }

            // Formata a data
            const dataFormatada = data.split('-').reverse().join('/');
            const dataHora = `${dataFormatada} às ${hora}`;

            let visitas = JSON.parse(localStorage.getItem('visitas')) || [];

            if (visitaEditando) {
                // Atualiza a visita existente
                visitas = visitas.map(v =>
                    v.id === visitaEditando
                        ? { ...v, animal, ong, data, hora, pessoas, observacoes: observacoes || 'Sem observações', dataFormatada, dataHora }
                        : v
                );
                visitaEditando = null; // limpa o estado
                alert(`✅ Visita remarcada!\n\nAnimal: ${animal}\nData: ${dataHora}`);
            } else {
                // Cria nova visita
                const visita = {
                    id: Date.now(),
                    animal, ong, data, hora,
                    dataFormatada, dataHora,
                    pessoas,
                    observacoes: observacoes || 'Sem observações',
                    status: 'agendada'
                };
                visitas.push(visita);
                alert(`✅ Visita agendada!\n\nAnimal: ${animal}\nData: ${dataHora}`);
            }

            localStorage.setItem('visitas', JSON.stringify(visitas));
            form.reset();
            if (dataInput) dataInput.value = '';
            carregarVisitas();
        });
    }
});

// Função para carregar visitas
function carregarVisitas() {
    const container = document.getElementById('listaVisitas');
    if (!container) return;

    const visitas = JSON.parse(localStorage.getItem('visitas')) || [];

    if (visitas.length === 0) {
        container.innerHTML = `
          <div class="sem-visitas">
            <i class="fas fa-calendar-times"></i>
            <p>Nenhuma visita agendada</p>
            <span>Agende sua primeira visita acima</span>
          </div>
        `;
        return;
    }

    visitas.sort((a, b) => new Date(b.data) - new Date(a.data));

    let html = '';
    visitas.forEach(visita => {
        const hoje = new Date();
        const dataVisita = new Date(visita.data);
        const statusClass = dataVisita < hoje ? 'status-passada' : 'status-agendada';
        const statusTexto = dataVisita < hoje ? 'Realizada' : 'Agendada';

        html += `
          <div class="visita-card" data-id="${visita.id}">
            <div class="visita-status ${statusClass}">${statusTexto}</div>
            <div class="visita-info">
              <h4><i class="fas fa-paw"></i> ${visita.animal}</h4>
              <p><i class="fas fa-calendar-alt"></i> ${visita.dataFormatada} às ${visita.hora}</p>
              <p><i class="fas fa-building"></i> ${visita.ong}</p>
              <p><i class="fas fa-user-friends"></i> ${visita.pessoas} pessoa(s)</p>
              <p><i class="fas fa-comment"></i> ${visita.observacoes}</p>
            </div>
            <div class="visita-acoes">
              <button class="btn-remarcar" onclick="remarcarVisita(${visita.id})">Remarcar</button>
              <button class="btn-cancelar" onclick="cancelarVisita(${visita.id})">Cancelar</button>
            </div>
          </div>
        `;
    });

    container.innerHTML = html;
}

// Função para cancelar visita
function cancelarVisita(id) {
    if (confirm('Cancelar esta visita?')) {
        let visitas = JSON.parse(localStorage.getItem('visitas')) || [];
        visitas = visitas.filter(visita => visita.id !== id);
        localStorage.setItem('visitas', JSON.stringify(visitas));
        alert('✅ Visita cancelada!');
        carregarVisitas();
    }
}

// Função para remarcar visita
function remarcarVisita(id) {
    let visitas = JSON.parse(localStorage.getItem('visitas')) || [];
    const visita = visitas.find(v => v.id === id);

    if (!visita) return;

    document.getElementById('animalSelect').value = visita.animal;
    document.getElementById('ongSelect').value = visita.ong;
    document.getElementById('dataVisita').value = visita.data;
    document.getElementById('horaVisita').value = visita.hora;
    document.getElementById('pessoas').value = visita.pessoas;
    document.getElementById('observacoes').value = visita.observacoes;

    visitaEditando = id; // marca que estamos editando esta visita

    document.querySelector('.visitas-form-box').scrollIntoView({ behavior: 'smooth' });
    alert('✅ Dados carregados no formulário! Ajuste e clique em "Agendar Visita"');
}

window.cancelarVisita = cancelarVisita;
window.remarcarVisita = remarcarVisita;