import { NextFunction, Request, Response } from "express";
import { HttpException } from "~/exceptions/HttpException";
import {
  CreatePokemonData,
  PatchPokemonData,
} from "~interfaces/pokemons.interface";

export class PokemonsDto {
  createPokemon = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.name) throw new HttpException(400, "Name field required");
      if (!req.body.type1) throw new HttpException(400, "Type1 field required");
      if (!req.body.type2) throw new HttpException(400, "Type2 field required");
      if (!req.body.description)
        throw new HttpException(400, "Description field required");
      if (!req.body.height)
        throw new HttpException(400, "Height field required");
      if (!req.body.Weight)
        throw new HttpException(400, "Weight field required");

      const data: CreatePokemonData = {
        name: req.body.name.trim(),
        type1: req.body.type1,
        type2: req.body.type2,
        description: req.body.description,
        height: req.body.height,
        weight: req.body.weight,
      };

      req.body = data;

      next();
    } catch (error) {
      next(error);
    }
  };

  updatePokemon = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.name) {
        if (req.body.name.trim().length === 0)
          throw new HttpException(400, "Name can't be empty");
      }

      if (req.body.type1) {
        if (req.body.type1.trim().length === 0)
          throw new HttpException(400, "Type1 can't be empty");
      }

      if (req.body.type2) {
        if (req.body.type2.trim().length === 0)
          throw new HttpException(400, "Type2 can't be empty");
      }

      if (req.body.description) {
        if (req.body.description.trim().length === 0)
          throw new HttpException(400, "Description can't be empty");
      }

      if (req.body.height) {
        if (req.body.height.trim().length === 0)
          throw new HttpException(400, "Height can't be empty");
      }

      if (req.body.weight) {
        if (req.body.weight.trim().length === 0)
          throw new HttpException(400, "Weight can't be empty");
      }

      const data: PatchPokemonData = {};
      if (req.body.name) data.name = req.body.name;
      if (req.body.type1) data.type1 = req.body.type1;
      if (req.body.type2) data.type2 = req.body.type2;
      if (req.body.description) data.description = req.body.description;
      if (req.body.height) data.height = req.body.height;
      if (req.body.weight) data.weight = req.body.weight;

      req.body = data;

      next();
    } catch (error) {
      next(error);
    }
  };
}
