import { configDotenv } from "dotenv";

configDotenv();

const _config = {
  PORT: process.env.PORT || 7000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET_KEY,
  MAILTRAP_APIKEY: process.env.MAILTRAP_APIKEY,
  MAILTRAP_ENDPOINT: process.env.MAILTRAP_ENDPOINT,
};

export const config = Object.freeze(_config);
