import { Router } from 'express';
import { PokemonsController } from '~controllers';
import IndexController from '~controllers/index.controller';
import { PokemonsDto } from '~dto/pokemon.dto';
import { Routes } from '~interfaces/routes.interface';

const controller = new PokemonsController();
const dto = new PokemonsDto();
export class PokemonsRoutes implements Routes {
  public path = '/pokemons';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, controller.getPokemon);
    this.router.get(`${this.path}/`, controller.getPokemons);
    this.router.post(`${this.path}/`, dto.createPokemon, controller.createPokemon);
    this.router.patch(`${this.path}/`, dto.updatePokemon, controller.updatePokemon);
    this.router.delete(`${this.path}/:id`, controller.deletePokemon);
    this.router.get(`${this.path}/type/:type1`, controller.findPokemonByType);
    this.router.get(`${this.path}/type/:type1/:type2`, controller.findPokemonByTypes);
  }
}
