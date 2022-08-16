//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    getFetch()
  }
});

let list = document.getElementsByClassName('statList')
console.log(list)

function getFetch(){
  const poke = (document.querySelector('#poke1').value).toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke

  const listNode = document.getElementById('list')

  listNode.innerHTML = ''
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {


        let statListSelector = document.querySelector('.statList')
        
        let pokeName = (data.name).toUpperCase()
        let pokePhoto = data.sprites.other['official-artwork']['front_default']
        let pokeType = document.createElement('li')
        let pokeHP = document.createElement('li')
        let pokeAP = document.createElement('li')
        let pokeDef = document.createElement('li')
        let pokeWeight = document.createElement('li')
        let pokeBaseExp = document.createElement('li')
        let pokeAbility = document.createElement('li')

        document.querySelector('h2').innerText = pokeName
        document.querySelector('#pokeImg1').src = pokePhoto
        pokeType.textContent = 'TYPE: ' + (data.types[0].type.name).toUpperCase()
        pokeHP.textContent = 'HP: ' + data.stats[0].base_stat
        pokeAP.textContent = 'AP: ' + data.stats[1].base_stat
        pokeDef.textContent = 'DEF: ' + data.stats[2].base_stat
        pokeWeight.textContent = 'WEIGHT: ' + data.weight
        pokeBaseExp.textContent = 'BASE EXP: ' + data['base_experience']
        pokeAbility.textContent = 'ABILITY: ' + (data.abilities[0].ability.name).toUpperCase()
    
        console.log(pokeType.textContent)

        statListSelector.appendChild(pokeType)
        statListSelector.appendChild(pokeHP)
        statListSelector.appendChild(pokeAP)
        statListSelector.appendChild(pokeDef)
        statListSelector.appendChild(pokeWeight)
        statListSelector.appendChild(pokeBaseExp)
        statListSelector.appendChild(pokeAbility)

        switch (pokeType.textContent) {
          case 'TYPE: ELECTRIC':
            document.body.style.backgroundColor = '#ffcb05';
            break;
          case 'TYPE: NORMAL':
            document.body.style.backgroundColor = '#A8A878';
            break;
          case 'TYPE: FIRE':
            document.body.style.backgroundColor = '#F08030';
            break;
          case 'TYPE: WATER':
            document.body.style.backgroundColor = '#6890F0';
            break;
          case 'TYPE: GRASS':
            document.body.style.backgroundColor = '#78C850';
            break;
          case 'TYPE: ICE':
            document.body.style.backgroundColor = '#98D8D8';
            break;
          case 'TYPE: FIGHTING':
            document.body.style.backgroundColor = '#C03028';
            break;
          case 'TYPE: POISON':
            document.body.style.backgroundColor = '#A040A0';
            break;
          case 'TYPE: GROUND':
            document.body.style.backgroundColor = '#E0C068';
            break;
          case 'TYPE: FLYING':
            document.body.style.backgroundColor = '#A890F0';
            break;
          case 'TYPE: PSYCHIC':
            document.body.style.backgroundColor = '#F85888';
            break;
          case 'TYPE: BUG':
            document.body.style.backgroundColor = '#A8B820';
            break;
          case 'TYPE: ROCK':
            document.body.style.backgroundColor = '#B8A038';
            break;
          case 'TYPE: GHOST':
            document.body.style.backgroundColor = '#705898';
            break;
          case 'TYPE: DARK':
            document.body.style.backgroundColor = '#705848';
            break;
          case 'TYPE: DRAGON':
            document.body.style.backgroundColor = '#7038F8';
            break;
          case 'TYPE: STEEL':
            document.body.style.backgroundColor = '#B8B8D0';
            break;
          case 'TYPE: FAIRY':
            document.body.style.backgroundColor = '#F0B6BC';
            break;
        }

      })
      .catch(err => {
          document.querySelector('h2').innerText = 'Try Again'
          document.querySelector('#pokeImg1').src = ''
          document.body.style.backgroundColor = '#fff';
      });
      
}