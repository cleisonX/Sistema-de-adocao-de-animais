// ===== MENU HAMBURGUER =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ===== BUSCA DE ONGS =====
const searchBtn = document.getElementById('btn-search');
const searchInput = document.getElementById('search-ongs');

if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    const termo = searchInput.value.trim().toLowerCase();
    if (termo) {
      alert(`Buscando ONGs em: ${termo}`);
      window.location.href = `ongs.html?cidade=${encodeURIComponent(termo)}`;
    }
  });
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });
}