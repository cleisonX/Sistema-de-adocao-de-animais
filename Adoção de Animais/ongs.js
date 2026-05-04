// ongs.js
document.addEventListener('DOMContentLoaded', function () {
    const ongsLista = document.getElementById('ongs-lista');
    const buscaInput = document.getElementById('buscaOng');
    const filtroCidade = document.getElementById('filtroCidade');

    // Dados simulados das ONGs
    const ongs = [
        {
            id: 1,
            nome: 'ONG Amor Animal',
            cidade: 'São Paulo, SP',
            endereco: 'Rua das Flores, 123',
            telefone: '(11) 99999-1111',
            email: 'contato@amoranimal.org',
            animais: 12,
            logo: 'imagens/ong1.jpg',
            descricao: 'Há 5 anos resgatando e cuidando de animais abandonados.'
        },
        {
            id: 2,
            nome: 'ONG Patas Amadas',
            cidade: 'Rio de Janeiro, RJ',
            endereco: 'Av. Atlântica, 500',
            telefone: '(21) 99999-2222',
            email: 'contato@patasamadas.org',
            animais: 8,
            logo: 'imagens/ong2.jpg',
            descricao: 'Especializada em gatos, com projeto de castração solidária.'
        },
        {
            id: 3,
            nome: 'ONG Lar Animal',
            cidade: 'Belo Horizonte, MG',
            endereco: 'Rua dos Animais, 456',
            telefone: '(31) 99999-3333',
            email: 'contato@laranimal.org',
            animais: 15,
            logo: 'imagens/ong3.jpg',
            descricao: 'Abrigo com espaço amplo para cães de grande porte.'
        },
        {
            id: 4,
            nome: 'ONG Patinhas Unidas',
            cidade: 'Curitiba, PR',
            endereco: 'Av. Paraná, 789',
            telefone: '(41) 99999-4444',
            email: 'contato@amigos4patas.org',
            animais: 6,
            logo: 'imagens/ong4.jpg',
            descricao: 'Foco em reabilitação e adoção responsável.'
        },
        {
            id: 5,
            nome: 'ONG Vida Animal',
            cidade: 'Porto Alegre, RS',
            endereco: 'Rua dos Cães, 321',
            telefone: '(51) 99999-5555',
            email: 'contato@vidaanimal.org',
            animais: 10,
            logo: 'imagens/ong5.jpg',
            descricao: 'Atuamos com resgate e tratamento de animais em situação de risco.'
        }
    ];

    function renderizarOngs(lista) {
        if (!ongsLista) return;

        if (lista.length === 0) {
            ongsLista.innerHTML = '<div class="sem-resultados"><i class="fas fa-search"></i><p>Nenhuma ONG encontrada</p></div>';
            return;
        }

        let html = '';
        lista.forEach(ong => {
            html += `
        <div class="ong-card-completo" data-nome="${ong.nome.toLowerCase()}" data-cidade="${ong.cidade.toLowerCase()}">
          <div class="ong-card-header">
            <img src="${ong.logo}" alt="${ong.nome}" class="ong-card-logo" onerror="this.src='https://via.placeholder.com/100x100?text=ONG'">
            <div class="ong-card-titulo">
              <h3>${ong.nome}</h3>
              <p><i class="fas fa-map-marker-alt"></i> ${ong.cidade}</p>
            </div>
          </div>
          <div class="ong-card-body">
            <p>${ong.descricao}</p>
            <div class="ong-card-info">
              <p><i class="fas fa-paw"></i> ${ong.animais} animais disponíveis</p>
              <p><i class="fas fa-phone"></i> ${ong.telefone}</p>
              <p><i class="fas fa-envelope"></i> ${ong.email}</p>
            </div>
          </div>
          <div class="ong-card-footer">
            <a href="animais.html?ong=${ong.id}" class="btn-small">Ver animais</a>
            <a href="contato.html?ong=${ong.id}" class="btn-small">Entrar em contato</a>
            <a href="doaçoes.html?ong=${ong.id}" class="btn-small btn-doar">Doar</a>
          </div>
        </div>
      `;
        });

        ongsLista.innerHTML = html;
    }

    // Renderiza todas as ONGs inicialmente
    renderizarOngs(ongs);

    // Função de filtro
    function filtrarOngs() {
        const termo = buscaInput ? buscaInput.value.toLowerCase() : '';
        const cidade = filtroCidade ? filtroCidade.value.toLowerCase() : '';

        const filtradas = ongs.filter(ong => {
            const matchNome = ong.nome.toLowerCase().includes(termo);
            const matchCidade = cidade === '' || ong.cidade.toLowerCase().includes(cidade);
            return matchNome && matchCidade;
        });

        renderizarOngs(filtradas);
    }

    // Eventos
    if (buscaInput) {
        buscaInput.addEventListener('input', filtrarOngs);
    }

    if (filtroCidade) {
        filtroCidade.addEventListener('change', filtrarOngs);
    }

    // Verifica se veio parâmetro de busca da URL
    const urlParams = new URLSearchParams(window.location.search);
    const cidadeParam = urlParams.get('cidade');
       if (cidadeParam && filtroCidade) {
           filtroCidade.value = cidadeParam.toLowerCase();
           filtrarOngs();
       }

});