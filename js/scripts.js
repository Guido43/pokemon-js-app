
//An iife wrapping the [] as newly defined repository
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//ability to add a pokemon with necessary features to the list without API referral 
//and getAll to return full pokemon list   
function add(pokemon){
    if (typeof pokemon === "object" && "name" in pokemon)
        {pokemonList.push(pokemon);
    } else {console.log("pokemon is not correct");
    }
}
function getAll () {return pokemonList;}

//elements created attached to ul in index, eventListener added for click and log//
function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener('click', function (event) {showDetails(pokemon)
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
}


//loading list created for each pokemon item
function loadList(item) {
    return fetch(apiUrl).then(function(response)
    {
    return response.json();
    }).then(function(json) {
        json.results.forEach(function (item) {
            let pokemon = {
                name:item.name,
                detailsUrl:item.url
            };
            add(pokemon);
        });
    }).catch(function (e) {console.error(e);
    })
}

//loading details created for each pokemon item
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
        return response.json();
    }).then(function (details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
    }).catch(function (e) {
        console.error(e);
    });
}

//showing and loading details from the previous "showDetails" function 
// defined in the addEventListener parameter
function showDetails(pokemon) {loadDetails(pokemon).then(function () {
    console.log(pokemon);
});
}   

//returns and closure of the iife
return {add: add, 
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
};
})();

//calling previous "loading" functions for each pokemon and showing ability to add an item independently
pokemonRepository.loadList().then(function()
{pokemonRepository.getAll().forEach(function(pokemon)
    {pokemonRepository.addListItem(pokemon);
    });
});
pokemonRepository.add({name: 'Pikachu', height: 1.4});









