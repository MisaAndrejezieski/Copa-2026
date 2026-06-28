// ============================================
// DADOS DAS SELEÇÕES
// ============================================
const selecoes = [
    { id: 'brasil', nome: 'Brasil', bandeira: 'Brasil/bra-1-escudo-do-brasil.webp' },
    { id: 'africa-do-sul', nome: 'África do Sul', bandeira: 'Africa do Sul/rsa-1-escudo-africa-do-sul.webp' },
    { id: 'alemanha', nome: 'Alemanha', bandeira: 'Alemanha/ale-0-escudo-alemanha.webp' },
    { id: 'australia', nome: 'Austrália', bandeira: 'Australia/aus-1-mathew-ryan.webp' },
    { id: 'bosnia-e-herzegovina', nome: 'Bósnia e Herzegovina', bandeira: 'Bósnia e Herzegovina/0-escudo-bosnia-e-herzegovina.webp' },
    { id: 'canada', nome: 'Canadá', bandeira: 'Canadá/can-0-escudo-canada.webp' },
    { id: 'coreia-do-sul', nome: 'Coreia do Sul', bandeira: 'Coreia do Sul/kor-0-escudo-coreia-do-sul.webp' },
    { id: 'costa-do-marfim', nome: 'Costa do Marfim', bandeira: 'Costa do Marfim/civ-0-escudo-costa-do-marfim.webp' },
    { id: 'curacao', nome: 'Curaçao', bandeira: 'Curaçao/cuw-0-escudo-curacao.webp' },
    { id: 'equador', nome: 'Equador', bandeira: 'Equador/ecu-1-escudo-equador.webp' },
    { id: 'escocia', nome: 'Escócia', bandeira: 'Escócia/esc-0-escudo-escocia.webp' },
];

// ============================================
// RENDERIZAR CARDS
// ============================================
function renderizarCards() {
    const grid = document.getElementById('selecoesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    selecoes.forEach(sel => {
        const card = document.createElement('a');
        card.href = `${sel.id}.html`;
        card.className = 'selecao-card';

        card.innerHTML = `
            <img src="${sel.bandeira}" alt="${sel.nome}" class="bandeira" />
            <h3>${sel.nome}</h3>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// INICIALIZAR
// ============================================
document.addEventListener('DOMContentLoaded', renderizarCards);