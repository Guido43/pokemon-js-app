//An iife wrapping the [] as newly defined repository
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=64';
  
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
  let pokemonList = document.querySelector('.pokemon-characters');
  let listItem = document.createElement('list-group-item');

  let button = document.createElement('button');
  button.innerText = pokemon.name
  button.className = ('btn btn-primary');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#exampleModal');  
  
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  button.addEventListener('click', function () {showDetails(pokemon)
  });
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




    // new bootstrap modal code
function showModal(pokemon) {

      let modalTitle = $(".modal-title");
      let modalBody = $(".modal-body");
      let modalFooter = $(".modal-footer");

      modalBody.empty();
      modalTitle.empty();
      modalFooter.empty();

      let nameElement = $("<h4>" + "This pokemon is:"+ "</h4>" + "<h3>" + pokemon.name + "</h3>");
      let imageElement = $('<img class="modal-img" style="width:30%">' + pokemon.imageUurl);
      let heightElement = $("<p>" + "Their height is : " + pokemon.height + "</p>");
     


      imageElement.attr('src', pokemon.imageUrl);

      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalFooter.append(heightElement);
   
}
    
function showDetails(pokemon) {
  loadDetails(pokemon).then(function() {
  showModal(pokemon)}
  );
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
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon)
  {pokemonRepository.addListItem(pokemon);
  });
});
//pokemonRepository.add({name: 'Pikachu', height: 1.4});





