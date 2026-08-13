// ============================================
// LÓGICA DO SITE — injeta os dados de data.js no HTML
// ============================================

function montarLinkWhatsapp(numero, mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${texto}`;
}

function renderizarHeader() {
  document.getElementById('logo-nome').textContent = SITE_DATA.negocio.nome;
}

function renderizarHero() {
  document.getElementById('hero-nome').textContent = SITE_DATA.negocio.nome;
  document.getElementById('hero-slogan').textContent = SITE_DATA.negocio.slogan;

  const linkWa = montarLinkWhatsapp(
    SITE_DATA.negocio.whatsapp,
    `Olá! Gostaria de fazer um pedido no ${SITE_DATA.negocio.nome}.`
  );
  document.getElementById('wa-hero').href = linkWa;
  document.getElementById('wa-header').href = linkWa;
  document.getElementById('wa-footer').href = linkWa;
}

function renderizarDestaques() {
  const container = document.getElementById('destaques-container');
  container.innerHTML = SITE_DATA.destaques.map(d => `
    <div class="destaque-item">${d.texto}</div>
  `).join('');
}

function renderizarCategorias() {
  const grid = document.getElementById('grid-categorias');
  grid.innerHTML = SITE_DATA.categorias.map(c => `
    <div class="card-categoria">
      <h3>${c.nome}</h3>
      <p>${c.descricao}</p>
    </div>
  `).join('');
}

function renderizarContacto() {
  document.getElementById('c-endereco').textContent = SITE_DATA.negocio.endereco;
  document.getElementById('c-horario').textContent = SITE_DATA.negocio.horario;
  document.getElementById('c-telefone').textContent = SITE_DATA.negocio.telefone;
  document.getElementById('footer-nome').textContent = SITE_DATA.negocio.nome;
  document.getElementById('ano').textContent = new Date().getFullYear();
}

function iniciar() {
  renderizarHeader();
  renderizarHero();
  renderizarDestaques();
  renderizarCategorias();
  renderizarContacto();
}

document.addEventListener('DOMContentLoaded', iniciar);
