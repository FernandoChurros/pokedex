
let container = document.getElementById('data-popup');
let close = document.getElementById('data-close');

function pokeDetails(id) {

    container.classList.add('show');

    console.log(id)
}

function createInfos(pokemon) {

    return `
        <span>Habilidades: ${pokemon.abilities}</teste>
    `
}

close.addEventListener('click', () => {

    container.classList.remove('show');
})
