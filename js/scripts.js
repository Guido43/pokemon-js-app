//An iife wrapping the [] as newly defined repository
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  
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
  let pokemonList = document.querySelector('#poke-modal');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');
  button.addEventListener('click', function () {showDetails(pokemon)
  });
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}


//loading list created for each pokemon item
function loadList() {
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


//code for the pokemon-modal display
let modalContainer = document.querySelector('#modal-container');

  function showModal (title, text) {
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
  
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
  
      let titleElement = document.createElement('h3');
      titleElement.innerText = title;
  
      let contentElement = document.createElement('p');
      contentElement.innerText = text;

      let container = document.querySelector('#image-container');
      let image = document.createElement('img');
  
      
      image.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'
    
  
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);
      modal.appendChild(image);

      modalContainer.classList.add('is-visible');
    }
    
    
    //funtion to hide the modal
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }
  
    //responsive closures of the modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });
    
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
    
  
//showing and loading details from the previous "showDetails" function 
// defined in the addEventListener parameter
function showDetails(pokemon) {loadDetails(pokemon).then(function()
  {showModal(' Your Pokemon Is      ' + pokemon.name + '   and their height is  ' 
  +  pokemon.height);
})}
     

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





