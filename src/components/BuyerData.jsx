import styled from "styled-components";
import React from "react";

export default function BuyerData(props) {
    // function getInputNameData(e) {
    //     // if (props.selectedSeats) {
    //         // const uploadThisIndex = props.selectedSeats.findIndex(data => data.id === seat.name);
    //         console.log(props.costumerData);
    //         console.log(e.target.value);
    //     // }
    // }
    React.useEffect(() => {
        console.log(props.selectedSeats);
        // const updateThisIndex = costumerData.findIndex(data => data.id === props.selectedSeats);
        const updateThisIndex = props.costumerData.findIndex(data => data.id === props.selectedSeats);
        console.log(props.costumerData[updateThisIndex]);
        console.log(props.costumerData);
        // const newCostumerData = 
        // props.setCostumerData()
    }, []);

    return (
        <ContainerBuyerData>
            {/* <Labels>Nome do comprador: (Assento {props.selectedSeats[props.selectedSeats.length-1]})</Labels> */}
            <Labels>Nome do comprador: (Assento {props.selectedSeats})</Labels>
            <Input
                placeholder="Digite seu nome..."
                onChange={props.getInputNameData}
            />
            <Labels>CPF do comprador:</Labels>
            <Input placeholder="Digite seu CPF..." />
        </ContainerBuyerData>
    );
}

const ContainerBuyerData = styled.div`
    margin-top: 41px;
    display: flex;
    flex-direction: column;
`;

const Labels = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;    
`;

const Input = styled.input`
    ::placeholder {
        color: #afafaf;
        opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #afafaf;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #afafaf;
    }
    width: 327px;
    height: 51px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: black;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding-left: 18px;
    margin-bottom: 7px;
`;