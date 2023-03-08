import styled from "styled-components";

export default function Details() {
    return (
        <ContainerDetails>
            <MovieDetails>
                <h1>Filme e sessão</h1>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </MovieDetails>

            <SeatsDetails>
                <h1>Ingressos</h1>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </SeatsDetails>

            <BuyerDetails>
                <h1>Comprador</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </BuyerDetails>
        </ContainerDetails>
    );
}

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const BuyerDetails = styled.div`
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 5px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;

const MovieDetails = styled.div`
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 5px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
    margin-bottom: 30px;
`;

const SeatsDetails = styled.div`
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 5px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
    margin-bottom: 30px;
`;



