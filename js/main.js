/**
 * Convite Casamento - Mateus & Mariana
 * Configuração e interatividade
 */

// Configuração editável - preencha quando tiver o link
const CONFIG = {
  listaPresentesUrl: '', // Ex: 'https://listadecasamento.cea.com.br/mateus-mariana'
  enderecoMaps: 'Sítio Aerostar Joinville SC', // Endereço para Google Maps
};

// Elementos que aparecem com animação ao scroll
document.addEventListener('DOMContentLoaded', () => {
  // Atualiza link da lista de presentes se configurado
  const listaLink = document.querySelector('[data-action="lista-presentes"]');
  if (listaLink && CONFIG.listaPresentesUrl) {
    listaLink.href = CONFIG.listaPresentesUrl;
    listaLink.classList.remove('action--disabled');
    listaLink.title = 'Lista de presentes';
  } else if (listaLink) {
    listaLink.addEventListener('click', (e) => e.preventDefault());
  }
});
