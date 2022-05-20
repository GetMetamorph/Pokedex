import {
  CreatePokemonData,
  PatchPokemonData,
} from "~interfaces/pokemons.interface";
import { Pokemon } from "~models";

export class PokemonsService {
  //     get un pokemon
  getPokemon = async (pokemonId: string) => {
    const pokemon = await Pokemon.findById(pokemonId).lean();

    return pokemon;
  };

  // get tous les pokemons
  getPokemons = async () => {
    const pokemons = await Pokemon.find().lean();

    return pokemons;
  };

  // create pokemon
  createPokemon = async (pokemonDate: CreatePokemonData) => {
    const newPokemon = new Pokemon();

    newPokemon.name = pokemonDate.name;
    newPokemon.price = pokemonDate.price;

    await newPokemon.save();

    return newPokemon;
  };

  // update pokemon
  updatePokemon = async (pokemonId: string, pokemonData: PatchPokemonData) => {
    const pokemon = await Pokemon.findById(pokemonId);

    if (pokemonData.name) pokemon.name = pokemonData.name;
    if (pokemonData.price) pokemon.price = pokemonData.price;

    await pokemon.save();

    return pokemon;
  };

  // delete pokemon
  deletePokemon = async (pokemonId: string) => {
    await Pokemon.deleteOne({ _id: pokemonId });
  };
}
