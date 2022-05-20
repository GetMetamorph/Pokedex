import config from 'config';

// const { host, port, database }: dbConfig = config.get('dbConfig');
const { DATABASE_USER, DATABASE_PASSWORD } = process.env;

export const dbConnection: { url: string } = {
  url: `mongodb://localhost:27017/pokedex?readPreference=primary&directConnection=true&ssl=false/`,
};
