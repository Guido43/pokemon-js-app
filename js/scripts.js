//here the list of Pokemon characters with their attributes as key-value objects 
//in the array.

let pokemonList = [
    { 
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
    }
];
//here a for loop for enabling height 1.5+ to be considered as "big pokemon" pokemon
//heights wrapped as <p> to enable css styling.

for (let i = 0; i < pokemonList.length; i++) 
{
    if (pokemonList[i].height>1.5)
    {document.write("<p>" + pokemonList[i].name + "  (height:" + pokemonList[i].height + ")" + "- Wow, that's big!!</p>")
    }
    else {document.write("<p>" + pokemonList[i].name + "  (height:" + pokemonList[i].height + ")<p>")
    }
}
    ;

