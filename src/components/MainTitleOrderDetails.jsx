import styled from "styled-components";

export default function MainTitleOrderDetails(){
    return(
        <Title><p>Pedido feito com sucesso!</p></Title>
    );
}

const Title = styled.div`
    width: 170px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
`;