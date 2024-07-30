//importando o banco de dados
import {db} from "../db.js";

//selecionando todos os dados do banco 
//req _ é uma requisicao do usuario e o res e uma resposta
// porem como a funcao get quer apenas a respota do banco
export const getUsers = (_,res) =>{
    const q = "SELECT * FROM funcionarios";
//criando uma query se erro dizer qual
    db.query(q, (err, data) => {
        if(err) return res.json(err);
// se nao retornar o status e a data
        return res.status(200).json(data);
    });
};

export const addUser = (req,res) => {
    const q =
    "INSERT INTO funcionarios(`nomeCompleto`, `nomeUsu`, `senha`, `cpf`) VALUES(?)";

    const values = [
        req.body.nomeCompleto,
        req.body.nomeUsu,
        req.body.senha,
        req.body.cpf,
    ];
    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Funcionario adicionado com sucesso!");
    });
};

export const updateUser = (req, res) => {
    const q = 
    "UPDATE funcionarios SET `nomeCompleto` = ?, `nomeUsu` = ?, `senha` = ?, `cpf`= ? WHERE `id`= ?";

    const values = [
        req.body.nomeCompelto,
        req.body.nomeUsu,
        req.body.senha,
        req.body.cpf
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Funcionario atualizado com sucesso");


    });
};

export const deleteUser = (req,res) => {
    const q = "DELETE FROM funcionarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Funcionario deletado com sucesso")

    });
};