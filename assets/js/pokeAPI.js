const pokeAPI = {};

function convertPokeAPIDetailToPokemon(pokeDetail) {

    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeAPI.getPokemonDetail = (pokemon) => {

    return fetch(pokemon.url)
        .then(response => response.json())
        .then(convertPokeAPIDetailToPokemon)
}

pokeAPI.getPokemons = (offset = 0, limit = 5) => {

    const endPoint = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(endPoint)
        .then(response => response.json())
        .then(pokemonOfList => pokemonOfList.results)
        .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then(pokemonsDetails => pokemonsDetails);
};
