
//here an iife wrapping the [] as newly defined repository with add and getAll functions

let pokemonRepository = (function () {
    let pokemonList = [{ 
        name: 'Nidoqueen',
        height: 1.3, 
        types: ['ground', 'poison'], 
        abilities: ['rivalry', 'sheer - force']
    },{ 
        name: 'Poliwrath', 
        height: 1, 
        types: ['water', 'fighting'], 
        abilities: ['damp', 'water - absorb', 'swift - swim']
     },
    { 
        name: 'Charizard', 
        height: 1.7, 
        types: ['fire', 'flying'], 
        abilities: ['blaze', 'solar - power'] 
    },]

function add(pokemon){pokemonList.push(pokemon);
}
function getAll () {return pokemonList; 
}

//created elements attached to ul in index, eventListener added for click and log//
function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener('click', function () {showDetails(pokemon)
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
}
function showDetails(pokemon) {console.log(pokemon)
};
return {add: add, 
    getAll: getAll,
    addListItem: addListItem
};
})();

pokemonRepository.add({name: 'Pikachu', height: 1.4});
console.log(pokemonRepository.getAll());

//here a forEach loop refering to the protected 'item's in the function of the iife 
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});







