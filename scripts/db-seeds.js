var Pokemon = require ('../lib/pokemon');

var Bulbasaur = new Pokemon({
  "name": "Bulbasaur",
  "species": "Seed Pokémon",
  "type": [
  "Grass",
  "Poison"
  ],
  "height": "2′4″ (0.71m)",
  "weight": "15.2 lbs (6.9 kg)",
  "abilities": [
  "Overgrow",
  "Chlorophyll"
  ],
  "stats": {
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "speed": 45,
    "total": 318
  },
  "evolution": [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur"
  ]
});

Bulbasaur.save(function(err, Bulbasaur){
  console.log('Bulbasaur se ha creado')
})

var Charmander = new Pokemon({
  "name": "Charmander",
  "species": "Lizard Pokémon",
  "type": [
  "Fire"
  ],
  "height": "2′0″ (0.61m)",
  "weight": "18.7 lbs (8.5 kg)",
  "abilities": [
  "Blaze",
  "Solar Power"
  ],
  "stats": {
    "hp": 39,
    "attack": 52,
    "defense": 43,
    "sp.atk": 60,
    "sp.def": 50,
    "speed": 65,
    "total": 309
  },
  "evolution": [
  "Charmander",
  "Charmeleon",
  "Charizard"
  ]
});

Charmander.save(function(err, Charmander){
  console.log('Charmander se ha creado')
})

var Ivysaur = new Pokemon({
  "name": "Ivysaur",
  "species": "Seed Pokémon",
  "type": [
  "Grass",
  "Poison"
  ],
  "height": "3′3″ (0.99m)",
  "weight": "28.7 lbs (13.0 kg)",
  "abilities": [
  "Overgrow",
  "Chlorophyll"
  ],
  "stats": {
    "hp": 60,
    "attack": 62,
    "defense": 63,
    "sp.atk": 80,
    "sp.def": 80,
    "speed": 60,
    "total": 405
  },
  "evolution": [
  "Ivysaur",
  "Ivysaur",
  "Venusaur"
  ]
});

Ivysaur.save(function(err, Ivysaur){
  console.log('Ivysaur se ha creado')
})



var Pikachu = new Pokemon({
  "name": "Pikachu",
  "species": "Mouse Pokémon",
  "type": [
  "Electric"
  ],
  "height": "1′4″ (0.41m)",
  "weight": "13.2 lbs (6.0 kg)",
  "abilities": [
  "Static",
  "Lightning Rod"
  ],
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "sp.atk": 50,
    "sp.def": 50,
    "speed": 90,
    "total": 320
  },
  "evolution": [
  "Pikachu",
  "Raichu"
  ]
});

Pikachu.save(function(err, Pikachu){
  console.log('Pikachu se ha creado')
})



var Mew = new Pokemon({
  "name": "Mew",
  "species": "New Species Pokémon",
  "type": [
  "Psychic"
  ],
  "height": "1′4″ (0.41m)",
  "weight": "8.8 lbs (4.0 kg)",
  "abilities": [
  "Synchronize"
  ],
  "stats": {
    "hp": 100,
    "attack": 100,
    "defense": 100,
    "sp.atk": 100,
    "sp.def": 100,
    "speed": 100,
    "total": 600
  },
  "evolution": []
});

Mew.save(function(err, Mew){
  console.log('Mew se ha creado')
})

var Mewtwo = new Pokemon({
  "name": "Mewtwo",
  "species": "Genetic Pokémon",
  "type": [
  "Psychic"
  ],
  "height": "6′7″ (2.01m)",
  "weight": "269 lbs (122.0 kg)",
  "abilities": [
  "Pressure",
  "Unnerve"
  ],
  "stats": {
    "hp": 106,
    "attack": 110,
    "defense": 90,
    "sp.atk": 154,
    "sp.def": 90,
    "speed": 130,
    "total": 680
  },
  "evolution": []
});

Mewtwo.save(function(err, Mewtwo){
  console.log('Mewtwo se ha creado')
})



