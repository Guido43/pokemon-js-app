//here the list of Pokemon characters with their attributes as key-value objects 
//in the array.

let pokemonList = 
    [{ 
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
    },
    { 
        name: 'Nidoqueen',
        height: 1.3, 
        types: ['ground', 'poison'], 
        abilities: ['rivalry', 'sheer - force']
    },
]
//here an iife wrapping the [] as newly defined pokemonList2 with add and getAll functions

let pokemonRepository = (function () {
    let pokemonList = []

function add(item){pokemonList.push(item);}
function getAll () {return pokemonList;}
return {add: add, getAll: getAll};
})();
//here a forEach loop refering to the protected 'item's in the function of the iife 
pokemonList.forEach(function(item) {document.write("<p>" + item.name + " (height " + item.height + ")</p>");});






