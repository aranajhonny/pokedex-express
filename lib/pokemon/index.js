var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1/pokemon-api');

var pokemonSchema = new Schema({
  name: String,
  species: String,
  type: String,
  height: String,
  weight: String,
  abilities: String,
  stats:[{
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
    total: Number
  }],
  evolution: String
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
