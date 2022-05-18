import express from "express";
import {
  createPokemon,
  getPokemons,
  getPokemon,
  deletePokemon,
  patchPokemon,
  findPokemonByType,
  findPokemonByTypes,
} from "../controllers/pokemons.controller.js";

const router = express.Router();

//Toutes les routes vont commencer par /pokemon
router.get("/", getPokemons);

router.post("/", createPokemon);

router.get("/:id", getPokemon);

router.delete("/:id", deletePokemon);

router.patch("/:id", patchPokemon);

router.get("/type/:type1", findPokemonByType);

router.get("/type/:type1/:type2", findPokemonByTypes);

export default router;
