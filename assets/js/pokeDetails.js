
let container = document.getElementById('data-popup');
let close = document.getElementById('data-close');

function pokeDetails(id) {

    container.classList.add('show');

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(response => {

            document.getElementById('data-info').innerHTML = createInfos(response)
        })
}

function createInfos(pokemon) {

    return `
        <span>Nome:</span>
        <span>${pokemon.name}</span>
        <span>Habilidades:</span>
        ${pokemon.abilities.map(el => `<span>${el.ability.name}</span>`).join('')}
        <span>Status:</span>
        ${pokemon.stats.map(el => `<span>${el.stat.name} => ${el.base_stat}</span>`).join('')}
    `
}

close.addEventListener('click', () => {

    container.classList.remove('show');
})
