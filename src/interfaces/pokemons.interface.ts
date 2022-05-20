import { Document } from "mongoose";

export type PokemonDocument = Pokemon_I & Document;
export interface Pokemon_I {
  _id: string;
  name: string;
  type1: string;
  type2: string;
  description: string;
  weight: string;
  height: string;
}

export interface CreatePokemonData {
  name: string;
  type1: string;
  type2: string;
  description: string;
  weight: string;
  height: string;
}

export interface PatchPokemonData {
  name?: string;
  type1?: string;
  type2?: string;
  description?: string;
  weight?: string;
  height?: string;
}
