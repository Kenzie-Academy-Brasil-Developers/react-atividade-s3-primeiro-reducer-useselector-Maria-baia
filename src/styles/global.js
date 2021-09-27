import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #b08968;
    }

    .fruitsName, .fruitsImgs{
        flex-direction: column;
        width: 150px;
        border: none;
    }

    .fruitsName {
        justify-content: space-around;
    }
`