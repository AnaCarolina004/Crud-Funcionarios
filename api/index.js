//importando o expresse
import express from "express";
import userRoutes from "./routes/users.js"
import cors from "cors";
//defindio a funcao do express na variavel app
const app = express();

//usando a funcao do json para receber alterar valores 
app.use(express.json());
//funcao para nao interferir no local host
app.use(cors());

app.use("/", userRoutes)
//será usado o app na porta 
app.listen(8800)