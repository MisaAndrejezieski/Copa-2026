// ============================================
// DADOS DAS SELEÇÕES
// ============================================
const selecoes = [
    { id: 'brasil', nome: 'Brasil', bandeira: 'Brasil/bra-1-escudo-do-brasil.webp', total: 20 },
    { id: 'africa-do-sul', nome: 'África do Sul', bandeira: 'Africa do Sul/rsa-1-escudo-africa-do-sul.webp', total: 20 },
    { id: 'alemanha', nome: 'Alemanha', bandeira: 'Alemanha/ale-0-escudo-alemanha.webp', total: 20 },
    { id: 'australia', nome: 'Austrália', bandeira: 'Australia/aus-1-mathew-ryan.webp', total: 9 },
    { id: 'bosnia-e-herzegovina', nome: 'Bósnia e Herzegovina', bandeira: 'Bósnia e Herzegovina/0-escudo-bosnia-e-herzegovina.webp', total: 20 },
    { id: 'canada', nome: 'Canadá', bandeira: 'Canadá/can-0-escudo-canada.webp', total: 20 },
    { id: 'coreia-do-sul', nome: 'Coreia do Sul', bandeira: 'Coreia do Sul/kor-0-escudo-coreia-do-sul.webp', total: 20 },
    { id: 'costa-do-marfim', nome: 'Costa do Marfim', bandeira: 'Costa do Marfim/civ-0-escudo-costa-do-marfim.webp', total: 18 },
    { id: 'curacao', nome: 'Curaçao', bandeira: 'Curaçao/cuw-0-escudo-curacao.webp', total: 19 },
    { id: 'equador', nome: 'Equador', bandeira: 'Equador/ecu-1-escudo-equador.webp', total: 20 },
];

// ============================================
// FUNÇÃO PARA CALCULAR QUANTAS FIGURINHAS VOCÊ TEM
// ============================================
function calcularFigurinhas(selecaoId) {
    const storageKey = `album_${selecaoId}`;
    const estado = JSON.parse(localStorage.getItem(storageKey)) || {};
    let coladas = 0;
    
    for (let key in estado) {
        if (estado[key] === 1) coladas++;
    }
    
    return coladas;
}

// ============================================
// RENDERIZAR CARDS
// ============================================
function renderizarCards() {
    const grid = document.getElementById('selecoesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    selecoes.forEach(sel => {
        const coladas = calcularFigurinhas(sel.id);

        const card = document.createElement('a');
        card.href = `${sel.id}.html`;
        card.className = 'selecao-card';

        card.innerHTML = `
            <img src="${sel.bandeira}" alt="${sel.nome}" class="bandeira" />
            <h3>${sel.nome}</h3>
            <div class="figurinhas-count">${coladas} de ${sel.total}</div>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// INICIALIZAR
// ============================================
document.addEventListener('DOMContentLoaded', renderizarCards);