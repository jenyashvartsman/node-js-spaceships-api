import express from "express";
import morgan from "morgan";

import cinematicUniverseRouter from "./routes/cinematic-universe.routes";
import spaceShipRoutes from "./routes/spaceship.routes";
import { initDataSource } from "./config/orm.config";

initDataSource()
  .then(() => {
    const app = express();
    const port = 3000;

    app.use(express.json());

    app.use(morgan("tiny"));

    app.use("/cinematic-universe", cinematicUniverseRouter);
    app.use("/spaceship", spaceShipRoutes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
