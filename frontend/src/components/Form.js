import axios from "axios";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form `
    display: flex;
    align-items flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div `
    display: flex;
    flex-direction: column;

`;

const Input = styled.input `
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label  ``;

const Button = styled.button `
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;

`;

const Form = ({getUsers,onEdit, setOnEdit}) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const user = ref.current;

            user.nomeCompleto.value = onEdit.nomeCompleto;
            user.nomeUsu.value = onEdit.nomeUsu;
            user.senha.value = onEdit.senha;
            user.cpf.value = onEdit.cpf;
        }

    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if(
            !user.nomeCompleto.value ||
            !user.nomeUsu.value ||
            !user.senha.value ||
            !user.cpf.value
        ){
            return toast.console.warn("Preencha todos os campos!");
        }
        if(onEdit){
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    nomeCompleto: user.nomeCompleto.value,
                    nomeUsu: user.nomeUsu.value,
                    senha: user.senha.value,
                    cpf: user.cpf.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800", {
                    nomeCompleto: user.nomeCompleto.value,
                    nomeUsu: user.nomeUsu.value,
                    senha: user.senha.value,
                    cpf: user.cpf.value,  
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));
        }
        user.nomeCompleto.value = " ";
        user.nomeUsu.value = " ";
        user.senha.value = " ";
        user.cpf.value = " ";

        setOnEdit(null);
        getUsers();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                    <Label>Nome Completo</Label>
                    <Input name="nomeCompleto" />
            </InputArea>
            <InputArea>
                    <Label>Usuário</Label>
                    <Input name="nomeUsu" />
            </InputArea>
            <InputArea>
                    <Label>Senha</Label>
                    <Input name="senha" />
            </InputArea>
            <InputArea>
                    <Label>CPF</Label>
                    <Input name="cpf" />
            </InputArea>

                <Button type="submit">ADICIONAR</Button>
        </FormContainer>

    );
};

export default Form;