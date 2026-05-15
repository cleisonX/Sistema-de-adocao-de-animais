// doacoes.js
document.addEventListener('DOMContentLoaded', function () {

    // ===== SISTEMA DE ABAS =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Adiciona active no clicado
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ===== CARREGAR CAMPANHAS =====
    carregarCampanhasDinheiro();
    carregarNecessidadesAlimentos();
    carregarNecessidadesMedicamentos();
    carregarNecessidadesOutros();

    function carregarCampanhasDinheiro() {
        const container = document.getElementById('campanhas-dinheiro');
        if (!container) return;

        const campanhas = [
            {
                ong: 'ONG Amor Animal',
                cidade: 'São Paulo, SP',
                meta: 5000,
                arrecadado: 3250,
                descricao: 'Campanha de castração solidária - ajudar 50 animais'
            },
            {
                ong: 'ONG Patas Amadas',
                cidade: 'Rio de Janeiro, RJ',
                meta: 3000,
                arrecadado: 1200,
                descricao: 'Tratamento da Luna - cirurgia de emergência'
            },
            {
                ong: 'ONG Lar Animal',
                cidade: 'Belo Horizonte, MG',
                meta: 2000,
                arrecadado: 1800,
                descricao: 'Compra de ração para 30 cães'
            }
        ];

        let html = '';
        campanhas.forEach(camp => {
            const percentual = Math.round((camp.arrecadado / camp.meta) * 100);
            html += `
        <div class="campanha-card">
          <div class="campanha-header">
            <h4>${camp.ong}</h4>
            <p><i class="fas fa-map-marker-alt"></i> ${camp.cidade}</p>
          </div>
          <p>${camp.descricao}</p>
          <div class="progresso-container">
            <div class="progresso-label">
              <span>Arrecadado: R$ ${camp.arrecadado}</span>
              <span>Meta: R$ ${camp.meta}</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: ${percentual}%">${percentual}%</div>
            </div>
          </div>
          <div class="campanha-acoes">
            <select class="valor-doacao">
              <option value="20">R$ 20</option>
              <option value="50">R$ 50</option>
              <option value="100">R$ 100</option>
              <option value="outro">Outro valor</option>
            </select>
            <button class="btn-primary btn-doar" data-ong="${camp.ong}">Doar</button>
          </div>
        </div>
      `;
        });

        container.innerHTML = html;
    }

    function carregarNecessidadesAlimentos() {
        const container = document.getElementById('ongs-alimentos');
        if (!container) return;

        const necessidades = [
            {
                ong: 'ONG Amor Animal',
                cidade: 'São Paulo, SP',
                itens: [
                    'Ração para cães adultos - 20kg',
                    'Ração para filhotes - 10kg',
                    'Ração para gatos - 15kg'
                ]
            },
            {
                ong: 'ONG Patas Amadas',
                cidade: 'Rio de Janeiro, RJ',
                itens: [
                    'Ração para gatos - 25kg',
                    'Sachês para gatos - 50 unidades'
                ]
            }
        ];

        let html = '';
        necessidades.forEach(nec => {
            html += `
        <div class="ong-necessidade-card">
          <h4>${nec.ong}</h4>
          <p><i class="fas fa-map-marker-alt"></i> ${nec.cidade}</p>
          <p><strong>Precisamos de:</strong></p>
          <ul>
            ${nec.itens.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <button class="btn-primary btn-ajudar" data-ong="${nec.ong}">Quero ajudar</button>
        </div>
      `;
        });

        container.innerHTML = html;
    }

    function carregarNecessidadesMedicamentos() {
        const container = document.getElementById('ongs-medicamentos');
        if (!container) return;

        const necessidades = [
            {
                ong: 'ONG Lar Animal',
                cidade: 'Belo Horizonte, MG',
                itens: [
                    'Vermífugo - 20 unidades',
                    'Antibiótico (Amoxicilina) - 10 caixas',
                    'Anti-inflamatório - 5 frascos'
                ]
            },
            {
                ong: 'ONG Vida Animal',
                cidade: 'Porto Alegre, RS',
                itens: [
                    'Vacina V10 - 15 doses',
                    'Antipulgas - 30 comprimidos'
                ]
            }
        ];

        let html = '';
        necessidades.forEach(nec => {
            html += `
        <div class="ong-necessidade-card">
          <h4>${nec.ong}</h4>
          <p><i class="fas fa-map-marker-alt"></i> ${nec.cidade}</p>
          <p><strong>Medicamentos necessários:</strong></p>
          <ul>
            ${nec.itens.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <button class="btn-primary btn-ajudar" data-ong="${nec.ong}">Quero ajudar</button>
        </div>
      `;
        });

        container.innerHTML = html;
    }

    function carregarNecessidadesOutros() {
        const container = document.getElementById('ongs-outros');
        if (!container) return;

        const necessidades = [
            {
                ong: 'ONG Amigos de 4 Patas',
                cidade: 'Curitiba, PR',
                itens: [
                    'Caminhas - 5 unidades',
                    'Cobertores - 10 unidades',
                    'Produtos de limpeza'
                ]
            }
        ];

        let html = '';
        necessidades.forEach(nec => {
            html += `
        <div class="ong-necessidade-card">
          <h4>${nec.ong}</h4>
          <p><i class="fas fa-map-marker-alt"></i> ${nec.cidade}</p>
          <p><strong>Precisamos de:</strong></p>
          <ul>
            ${nec.itens.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <button class="btn-primary btn-ajudar" data-ong="${nec.ong}">Quero ajudar</button>
        </div>
      `;
        });

        container.innerHTML = html;
    }

    // ===== EVENTOS DE DOAÇÃO =====
    document.addEventListener('click', function (e) {
        // Botões de doar dinheiro
        if (e.target.classList.contains('btn-doar')) {
            const ong = e.target.getAttribute('data-ong');
            const select = e.target.closest('.campanha-acoes')?.querySelector('.valor-doacao');
            let valor = select?.value;

            if (valor === 'outro') {
                valor = prompt('Digite o valor que deseja doar: R$');
            }

            if (valor && !isNaN(valor) && parseFloat(valor) > 0) {
                alert(`✅ Obrigado! Sua doação de R$ ${valor} para ${ong} foi registrada.`);
            } else if (valor) {
                alert('❌ Valor inválido!');
            }
        }

        // Botões de ajudar com itens
        if (e.target.classList.contains('btn-ajudar')) {
            const ong = e.target.getAttribute('data-ong');
            alert(`✅ Obrigado! Entraremos em contato para combinar a entrega dos itens para ${ong}.`);
        }
    });

    // Verificar se veio parâmetro de ONG na URL
    const urlParams = new URLSearchParams(window.location.search);
    const ongParam = urlParams.get('ong');

    if (ongParam) {
        // Pequeno delay para garantir que os elementos foram carregados
        setTimeout(() => {
            alert(`🔔 Você está doando para a ONG selecionada!`);
        }, 500);
    }
});