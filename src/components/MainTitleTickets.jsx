import styled from "styled-components";

export default function MainTitleTickets(){
    return(
        <Title><p>Selecione o(s) assento(s)</p></Title>
    );
}

const Title = styled.div`
    width: 374px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;