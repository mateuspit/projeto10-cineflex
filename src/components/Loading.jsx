import styled from "styled-components";
import React from "react";
import LoadingGif from "../assets/imgs/loading.gif"

export default function Loading() {



    return (
        <ContainerLoading>
            <img src={LoadingGif} alt="loading gif"/>
            <h1>Carregando...</h1>
        </ContainerLoading>
    );
}

const ContainerLoading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    img{
        width: 250px;
    }
`;