
let offset = 0;
const limit = 5;

function pokemonConvertHTML(pokemon) {

     return `
        <li class="pokemon__list-char primary__type-${pokemon.type}">
            <div>
                <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.number}</span>
            </div>

            <div class="detail">
            <ol class="types">
                ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.image}" alt="${pokemon.name}" onclick="pokeDetails(${pokemon.number})">
            </div>
        </li>
    `
}

loadPokemons();
function loadPokemons(offset, limit) {

    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {

        document.querySelector('[data-listPokemons]').innerHTML += pokemons.map(pokemonConvertHTML).join('');
    });
}

document.querySelector('#loadMoreButton').addEventListener('click', () => {

    offset += limit;
    loadPokemons(offset, limit);
})
