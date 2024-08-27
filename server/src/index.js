import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
import { config } from "./config/config.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });

    app.listen(config.PORT || 8000, () => {
      console.log(`Server has started at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!! ", err.message);
  });
