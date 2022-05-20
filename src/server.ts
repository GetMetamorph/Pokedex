process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '~app';
import { PokemonsRoutes } from '~routes/pokemon.route';
import validateEnv from '~utils/validateEnv';

validateEnv();

const app = new App([new PokemonsRoutes()]);

app.listen();
