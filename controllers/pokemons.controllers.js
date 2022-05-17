import { v4 as uuidv4 } from "uuid";

let pokemons = [];

export const createPokemon = (req, res) => {
  const pokemon = req.body;

  pokemons.push({
    ...pokemon,
    id: uuidv4(),
  });
  res.send(`Pokémon with the name ${pokemon.name} added to the database.`);
};

export const getPokemons = (req, res) => {
  res.send(pokemons);
};

export const getPokemon = (req, res) => {
  const { id } = req.params;

  const foundPokemon = pokemons.find((pokemon) => pokemon.id == id);
  res.send(foundPokemon);
};

export const deletePokemon = (req, res) => {
  const { id } = req.params;

  pokemons = pokemons.filter((pokemon) => pokemon.id != id);
  res.send(`Pokemon with the id ${id} deleted from the database.`);
};

export const patchPokemon = (req, res) => {
  const { id } = req.params;
  const { name, type1, type2 } = req.body;
  const pokemon = pokemons.find((pokemon) => pokemon.id == id);

  if (name) {
    pokemon.name = name;
  }
  if (type1) {
    pokemon.type1 = type1;
  }
  if (type2) {
    pokemon.type2 = type2;
  }

  res.send(`Pokemon with the id ${id} has been updated.`);
};
