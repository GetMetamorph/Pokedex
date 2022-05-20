const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports.Pokemon = Pokemon;
