// Importa o estilo global definido em "./styles/global"
import GlobalStyle from "./styles/global";
// Importa a biblioteca styled-components para criar componentes estilizados
import styled from "styled-components";
// Importa o componente Form do arquivo "./components/Form.js"
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";

// Importa funções e componentes da biblioteca react-toastify para exibir notificações
import { toast, ToastContainer } from "react-toastify";
// Importa os estilos CSS da biblioteca react-toastify
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Define um componente Container estilizado usando styled-components
const Container = styled.div`
  width: 100%;
  /* Define a largura para 100% */
  max-width: 800px; 
  /* Define a largura máxima de 800px */
  margin-top: 20px; 
  /* Adiciona uma margem superior de 20px */
  display: flex; 
  /* Utiliza flexbox para o layout */
  flex-direction: column; 
  /* Alinha os itens em uma coluna */
  align-items: center;
   /* Centraliza os itens horizontalmente */
  gap: 10px; 
  /* Adiciona um espaçamento de 10px entre os itens */
`;

// Define um componente Title estilizado usando styled-components
const Title = styled.h2``; // Nenhum estilo específico adicionado aqui

// Define o componente principal App
function App() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setUsers(res.data.sort((a,b) => (a.nomeCompleto > b.nomeCompleto ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }

    };
    useEffect(()=>{
      getUsers();
    },[setUsers]);

  // Retorna o JSX que define a estrutura da interface do aplicativo
  return (
    <>
      <Container>
        <Title>FUNCIONÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
