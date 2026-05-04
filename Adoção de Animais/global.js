// ===== GLOBAL.JS - Funções compartilhadas em todas as páginas =====

document.addEventListener('DOMContentLoaded', function () {
    // Menu hamburguer
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Destacar link ativo no menu
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // ===== Busca de ONGs =====
    const searchBtn = document.getElementById('btn-search');
    const searchInput = document.getElementById('search-ongs');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            const termo = searchInput.value.trim();
            if (termo) {
                window.location.href = `ongs.html?cidade=${encodeURIComponent(termo)}`;
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // ===== Formatação de telefone =====
    document.addEventListener('input', function (e) {
        if (e.target && e.target.type === 'tel') {
            let valor = e.target.value.replace(/\D/g, '');

            if (valor.length <= 11) {
                if (valor.length > 2) {
                    valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
                }
                if (valor.length > 9) {
                    valor = valor.substring(0, 10) + '-' + valor.substring(10);
                }
                e.target.value = valor;
            }
        }
    });
});