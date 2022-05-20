import { NextFunction, Request, Response } from "express";
import { PokemonModel } from "~models/pokemon.model";

class IndexController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await PokemonModel.findOne().then((user) => res.json({ user }));
      res.json({});
    } catch (error) {
      next(error);
    }
  };
  public cleanAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await PokemonModel.deleteMany({});

      res.json({});
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
