const CONFIG = {
  listaPresentesUrl: '',
  enderecoMaps: 'Sítio Aerostar Joinville SC',
};

document.addEventListener('DOMContentLoaded', () => {
  const listaLink = document.querySelector('[data-action="lista-presentes"]');
  if (listaLink && CONFIG.listaPresentesUrl) {
    listaLink.href = CONFIG.listaPresentesUrl;
    listaLink.classList.remove('action--disabled');
    listaLink.title = 'Lista de presentes';
  } else if (listaLink) {
    listaLink.addEventListener('click', (e) => e.preventDefault());
  }
});
