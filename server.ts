process.env["NODE_CONFIG_DIR"] = __dirname + "/configs";

import "dotenv/config";
import App from "app";
import { PokemonsRoutes } from "../routes";
import validateEnv from "utils/validateEnv.ts";

validateEnv();

const app = new App([new PokemonsRoutes()]);

app.listen();
