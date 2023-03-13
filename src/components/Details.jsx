import styled from "styled-components";

export default function Details(props) {
    // console.log(props.costumerData);
    return (
        <ContainerDetails>
            <MovieDetails>
                <h1>Filme e sessão</h1>
                <p>{props.session.movie.title}</p>
                <p>{props.session.day.date} {props.session.name}</p>
            </MovieDetails>

            <SeatsDetails>
                <h1>Ingressos</h1>
                {props.costumerData.map((data)=><p>{data.id}</p>)}
            </SeatsDetails>

            <BuyerDetails>
                <h1>Comprador</h1>
                {/* <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p> */}
                {props.costumerData.map((data)=>
                <ContainerNameAndCpf>
                <p>Nome: {data.nome}</p><p>CPF: {data.cpf}</p>
                </ContainerNameAndCpf>)}
                {/* {props.costumerData.map((data)=><p>CPF: {data.cpf}</p>)} */}
            </BuyerDetails>
        </ContainerDetails>
    );
}

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ContainerNameAndCpf = styled.div`
    margin-bottom: 20px;
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



