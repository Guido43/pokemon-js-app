//here the list of Pokemon characters with their attributes as key-value objects 
//in the array, <p> added for css styling.

let pokemonList = [
    { 
        name: '<p>Poliwrath<p>', 
        height: 1, 
        types: ['water', 'fighting'], 
        abilities: ['damp', 'water - absorb', 'swift - swim']
     },
    { 
        name: '<p>Charizard<p>', 
        height: 1.7, 
        types: ['fire', 'flying'], 
        abilities: ['blaze', 'solar - power'] 
    },
    { 
        name: '<p>Nidoqueen<p>', 
        height: 1.3, 
        types: ['ground', 'poison'], 
        abilities: ['rivalry', 'sheer - force']
    }
];
//here a for loop for enabling height 1.5+ to be considered as "big pokemon" pokemon
//heights wrapped as <span> to enable css styling.

for (let i = 0; i < pokemonList.length; i++) 
{
    if (pokemonList[i].height>1.5)
    {document.write(pokemonList[i].name + "<span>  (height:" + pokemonList[i].height + ")" + "- Wow, that's big!!<span>")
    }
    else {document.write(pokemonList[i].name + "<span>  (height:" + pokemonList[i].height + ")<span>")
    }
}
    ;

