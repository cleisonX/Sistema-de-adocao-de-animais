// emergencia.js
document.addEventListener('DOMContentLoaded', function () {
    const emergencyForm = document.getElementById('emergencyForm');
    const emergencyResultado = document.getElementById('emergencyResultado');
    const btnLocalizacao = document.getElementById('btnLocalizacao');
    const emergencyContacts = document.getElementById('emergencyContacts');
    const emergencyContactsList = document.getElementById('emergencyContactsList');
    const btnEmergencia = document.getElementById('btnEmergencia');

    // Botão de compartilhar localização
    if (btnLocalizacao) {
        btnLocalizacao.addEventListener('click', function () {
            if (navigator.geolocation) {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Obtendo localização...';

                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;

                        document.getElementById('emergencyLocal').value = `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
                        btnLocalizacao.innerHTML = '<i class="fas fa-check"></i> Localização obtida!';

                        setTimeout(() => {
                            btnLocalizacao.innerHTML = '<i class="fas fa-location-dot"></i> Compartilhar localização';
                        }, 3000);
                    },
                    function (error) {
                        alert('❌ Não foi possível obter sua localização. Digite o endereço manualmente.');
                        btnLocalizacao.innerHTML = '<i class="fas fa-location-dot"></i> Compartilhar localização';
                    }
                );
            } else {
                alert('❌ Seu navegador não suporta geolocalização.');
            }
        });
    }

    // Simulação de busca de profissionais
    function buscarProfissionais() {
        return [
            {
                nome: 'Dra. Carla Mendes',
                tipo: 'Veterinária',
                clinica: 'Clínica Pet Vida',
                distancia: '2.3 km',
                avaliacao: 4.9,
                disponivel: true,
                foto: 'https://randomuser.me/api/portraits/women/1.jpg'
            },
            {
                nome: 'ONG Amor Animal',
                tipo: 'ONG',
                contato: 'Maria Silva',
                distancia: '3.5 km',
                disponivel: true,
                foto: 'imagens/ong1.jpg'
            },
            {
                nome: 'Dr. Roberto Santos',
                tipo: 'Veterinário',
                clinica: 'Hospital Veterinário 24h',
                distancia: '4.1 km',
                avaliacao: 4.8,
                disponivel: true,
                foto: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            {
                nome: 'ONG Patas Amadas',
                tipo: 'ONG',
                contato: 'Joana Pereira',
                distancia: '5.2 km',
                disponivel: true,
                foto: 'imagens/ong2.jpg'
            }
        ];
    }

    function mostrarProfissionais(profissionais) {
        const professionalList = document.querySelector('.professional-list');
        if (!professionalList) return;

        let html = '';
        profissionais.forEach(prof => {
            html += `
        <div class="professional-item">
          <img src="${prof.foto}" alt="${prof.nome}" onerror="this.src='https://via.placeholder.com/50'">
          <div>
            <strong>${prof.nome}</strong>
            <p>${prof.tipo} - ${prof.clinica || prof.contato || ''}</p>
            ${prof.avaliacao ? `<p><i class="fas fa-star" style="color: gold;"></i> ${prof.avaliacao}</p>` : ''}
          </div>
          <div>
            <span class="status-disp">Disponível</span>
            <span class="distance">${prof.distancia}</span>
          </div>
        </div>
      `;
        });

        professionalList.innerHTML = html;
    }

    if (emergencyForm) {
        emergencyForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const tipo = document.getElementById('emergencyTipo')?.value;
            const urgencia = document.getElementById('emergencyUrgencia')?.value;
            const local = document.getElementById('emergencyLocal')?.value.trim();
            const descricao = document.getElementById('emergencyDescricao')?.value.trim();

            // Validações
            if (!tipo || !urgencia || !local || !descricao) {
                if (emergencyResultado) {
                    emergencyResultado.innerText = "⚠️ Preencha todos os campos obrigatórios!";
                    emergencyResultado.style.color = "red";
                }
                alert("❌ Preencha todos os campos!");
                return;
            }

            // Desabilita o botão durante o envio
            if (btnEmergencia) {
                btnEmergencia.disabled = true;
                btnEmergencia.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando alerta...';
            }

            // Simulação de envio
            setTimeout(() => {
                if (emergencyContacts) {
                    emergencyContacts.style.display = 'none';
                }

                if (emergencyContactsList) {
                    emergencyContactsList.style.display = 'block';
                    const profissionais = buscarProfissionais();
                    mostrarProfissionais(profissionais);
                }

                if (emergencyResultado) {
                    emergencyResultado.innerText = "✅ Alerta enviado! Profissionais notificados.";
                    emergencyResultado.style.color = "green";
                    emergencyResultado.style.backgroundColor = "#e6ffe6";
                    emergencyResultado.style.padding = "10px";
                    emergencyResultado.style.borderRadius = "5px";
                }

                alert("🚨 ALERTA DE EMERGÊNCIA ENVIADO!\n\nVeterinários e ONGs estão sendo notificados agora mesmo.");

                if (btnEmergencia) {
                    btnEmergencia.disabled = false;
                    btnEmergencia.innerHTML = '<i class="fas fa-bell"></i> ACIONAR REDE DE EMERGÊNCIA';
                }

                // Simular aceite de profissional
                setTimeout(() => {
                    const primeiroProf = document.querySelector('.professional-item');
                    if (primeiroProf) {
                        const statusSpan = primeiroProf.querySelector('.status-disp');
                        if (statusSpan) {
                            statusSpan.className = 'status-aceito';
                            statusSpan.innerHTML = '<i class="fas fa-check-circle"></i> Aceitou o chamado!';
                        }

                        const distanciaSpan = primeiroProf.querySelector('.distance');
                        if (distanciaSpan) {
                            distanciaSpan.innerHTML = '<i class="fas fa-car"></i> A caminho...';
                        }

                        // Mostra notificação
                        const notificacao = document.createElement('div');
                        notificacao.className = 'emergency-notification';
                        notificacao.innerHTML = `
              <i class="fas fa-check-circle"></i>
              <div>
                <strong>Dra. Carla Mendes aceitou o chamado!</strong>
                <p>Chegada estimada em 15 minutos</p>
              </div>
            `;
                        document.querySelector('.emergency-info').prepend(notificacao);
                    }
                }, 5000);

            }, 2000);
        });
    }

    // Simular recebimento de novos profissionais
    setInterval(() => {
        const profissionaisLista = document.querySelector('.professional-list');
        if (profissionaisLista && profissionaisLista.children.length > 0) {
            // Atualiza distâncias (simulação)
            const distances = document.querySelectorAll('.distance');
            distances.forEach(dist => {
                if (!dist.innerHTML.includes('carro')) {
                    const currentDist = parseFloat(dist.textContent);
                    if (!isNaN(currentDist)) {
                        const newDist = (currentDist - 0.1).toFixed(1);
                        if (newDist > 0) {
                            dist.textContent = `${newDist} km`;
                        } else {
                            dist.innerHTML = '<i class="fas fa-check-circle"></i> Chegou!';
                        }
                    }
                }
            });
        }
    }, 10000); // A cada 10 segundos
});