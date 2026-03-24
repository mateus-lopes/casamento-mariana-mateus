const CONFIG = {
  listaPresentesUrl: 'https://lista.havan.com.br/Convidado/ItensListaPresente/922173',
  enderecoMaps: 'Sítio Aerostar Joinville SC',
};

document.addEventListener('DOMContentLoaded', () => {
  const listaLink = document.querySelector('[data-action="lista-presentes"]');
  if (listaLink && CONFIG.listaPresentesUrl) {
    listaLink.href = CONFIG.listaPresentesUrl;
    listaLink.classList.remove('action-btn--disabled');
    listaLink.title = 'Lista de presentes';
  } else if (listaLink) {
    listaLink.addEventListener('click', (e) => e.preventDefault());
  }
});
