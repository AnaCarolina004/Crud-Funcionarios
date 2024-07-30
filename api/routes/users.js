import express from "express";
// levando essa rota para o controller 
import {getUsers, addUser, updateUser, deleteUser} from "../controller/user.js";
// expecificando que isso é uma rota
const router = express.Router()

//metodo get direto da rota raiz  trás todos os dados do banco
router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id",deleteUser)

// exportando por modo defualt
export default router