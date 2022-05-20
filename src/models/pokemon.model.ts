import { Schema, model } from "mongoose";
import { PokemonDocument } from "~interfaces/pokemons.interface";

const schema = new Schema({
  name: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
});

export const PokemonModel = model<PokemonDocument>("Article", schema);
