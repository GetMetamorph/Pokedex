import express from "express";
import {
  createPokemon,
  getPokemons,
  getPokemon,
  deletePokemon,
  patchPokemon,
} from "../controllers/pokemons.controllers.js";

const router = express.Router();

//Toutes les routes vont commencer par /pokemon
router.get("/", getPokemons);

router.post("/", createPokemon);

router.get("/:id", getPokemon);

router.delete("/:id", deletePokemon);

router.patch("/:id", patchPokemon);

export default router;
