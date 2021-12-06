import { Router } from "express";

import { PointController } from "./controllers/point/PointController";
import { PointCreateController } from "./controllers/point/PointCreateController";

const router = Router();

router.get("/point/list", new PointController().handle);
router.post("/point/create", new PointCreateController().handle);

export { router };