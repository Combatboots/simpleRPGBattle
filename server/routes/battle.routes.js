import { Router } from "express";
import battleController from "../controllers/battle.controller.js";

const battleRouter = Router();

battleRouter.route("/RPGBattle")
    .get(battleController.getAllChars)

    battleRouter.route("/RPGBattle/create")
    .post(battleController.createChar)

    battleRouter.route("/RPGBattle/:id")
    .get(battleController.getCharById)
    .delete(battleController.deleteChar)

    battleRouter.route("/RPGBattle/:id/edit")
    .patch(battleController.updateChar)

export default battleRouter