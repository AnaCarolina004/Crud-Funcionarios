// Importa a função createGlobalStyle do pacote styled-components
import { createGlobalStyle } from "styled-components";

// Define uma constante chamada Global que armazena o estilo global
const Global = createGlobalStyle`
    /* Aplica um reset de margem e padding a todos os elementos e define a fonte padrão */
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    /* Define estilos para o body */
    body {
        width: 100vw; /* Define a largura do body para ocupar 100% da largura da viewport */
        height: 100vh; /* Define a altura do body para ocupar 100% da altura da viewport */
        display: flex; /* Utiliza flexbox para o layout do body */
        justify-content: center; /* Centraliza o conteúdo do body horizontalmente */
        background-color: #f2f2f2; /* Define a cor de fundo do body */
    }
`;

// Exporta o estilo global para que possa ser utilizado em outros arquivos
export default Global;
