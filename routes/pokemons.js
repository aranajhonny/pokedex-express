var express = require('express');
var router = express.Router();
var Pokemon = require('../lib/pokemon')
var debug = require('debug')('my-application:pokemons');
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {
 Pokemon.find({}, function(err,pokemon){
  if (err){
   return res.send(err);
 }
 res.render('pokemons/index',{pokemons: pokemon});
});

});

router.get('/api/all', function(req, res, next) {
  Pokemon.find({}, function(err,pokemon){
    if (err){
      return res.send(err);
    }
       // res.render('pokemons/index',{pokemons: pokemon});
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.setHeader('Cache-Control', 'no-cache');
       res.send(pokemon);
     });
});

router.get('/add', function(req, res){
  res.render('pokemons/add');
});

router.get('/:pokemon_id', function(req,res){
  Pokemon.findById(req.params.pokemon_id, function(err,pokemon){
    res.render('pokemons/detail',{pokemon: pokemon})
  });
});

router.get('/api/:pokemon_id', function(req,res){
	Pokemon.findById(req.params.pokemon_id, function(err,pokemon){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.json(pokemon);
    // res.send(pokemon);
  });
});

router.post('/', function(req, res){
	debug('creando un nuevo pokemon');
	var name = req.body.name;
  var  poke = {
    name:req.body.name,
    species:req.body.species,
    type:req.body.type,
    height:req.body.height,
    height:req.body.height,
    weight:req.body.weight,
    abilities:req.body.abilities,
    evolution:req.body.evolution
  };
  if (!_.isUndefined(name)|| name!== '') {
    var pokemon = new Pokemon(poke);
    pokemon.save(function(err,pokemon){
      if (err) {
       return res.send(err);
     }
     res.send('guardado')
   });
  }else{
    res.send('por favor specifique un nombre de pokemon');
  }
})
module.exports = router;
