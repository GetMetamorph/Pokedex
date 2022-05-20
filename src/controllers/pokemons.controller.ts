import { Request, Response } from 'express';
import { CreatePokemonData, PatchPokemonData } from '~interfaces/pokemons.interface';
import { PokemonsService } from '~services';

const pokemonsService = new PokemonsService();
export class PokemonsController {
  //     get un pokemon
  getPokemon = async (req: Request, res: Response) => {
    const pokemonId = req.params.id;

    const pokemon = await pokemonsService.getPokemon(pokemonId);

    res.json({ pokemon });
  };

  // get tous les pokemons
  getPokemons = async (req: Request, res: Response) => {
    const pokemons = await pokemonsService.getPokemons();

    res.json({ pokemons });
  };

  // create pokemon
  createPokemon = async (req: Request, res: Response) => {
    const data: CreatePokemonData = req.body;

    const newPokemon = await pokemonsService.createPokemon(data);

    res.json({ pokemon: newPokemon });
  };

  // update pokemon
  updatePokemon = async (req: Request, res: Response) => {
    const pokemonId: string = req.params.id;
    const data: PatchPokemonData = req.body;

    const newPokemon = await pokemonsService.updatePokemon(pokemonId, data);

    res.json({ pokemon: newPokemon });
  };

  // delete pokemon
  deletePokemon = async (req: Request, res: Response) => {
    const pokemonId: string = req.params.id;

    await pokemonsService.deletePokemon(pokemonId);

    res.json({ message: 'Sucess' });
  };

  pokemons = pokemonsService.getPokemons();

  findPokemonByType = (req, res, pokemons) => {
    const { type1, type2 } = req.params;

    let foundPokemon = pokemons;

    if (type1) {
      foundPokemon = foundPokemon.filter(pokemon => pokemon.type1 == type1 || pokemon.type2 == type2);
    }

    res.send({ foundPokemon });
  };

  findPokemonByTypes = (req, res, pokemons) => {
    const { type1, type2 } = req.params;

    let foundPokemon = pokemons;

    if (type1) {
      foundPokemon = foundPokemon.filter(pokemon => pokemon.type1 == type1 || pokemon.type2 == type2);
    }

    if (type2) {
      foundPokemon = foundPokemon.filter(pokemon => pokemon.type2 == type2 || pokemon.type1 == type1);
    }

    console.log(req.params);
    console.log(pokemons);

    res.send({ foundPokemon });
  };
}
