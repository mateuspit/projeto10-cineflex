import styled from "styled-components";
import React from "react";

export default function Seats(props) {



    function plotSeatList(seat){
        if(seat.isAvailable === true && props.selectedSeats.includes(seat.name)){
            return <SeatSelected onClick={()=>props.selectedSeatsFunction(seat)} >{seat.name}</SeatSelected>           
        }
        else if(seat.isAvailable === true){
            return <Seat onClick={()=>props.selectedSeatsFunction(seat)} >{seat.name}</Seat>;            
        }        
        else{
            return <SeatUnavailable onClick={()=>alert("Esse assento não está disponível")}>{seat.name}</SeatUnavailable>
        }
    }

    return (
        <>
            <ContainerSeats>
                {props.session.seats.map((seat) => plotSeatList(seat))}
            </ContainerSeats>
            <ContainerSeatsIconsStatus>
                <Status>
                    <PickedIcon />
                    <StatusText>Selecionado</StatusText>
                </Status>

                <Status>
                    <AvalaibleIcon />
                    <StatusText>Disponível</StatusText>
                </Status>

                <Status>
                    <UnavailableIcon />
                    <StatusText>Indisponível</StatusText>
                </Status>
            </ContainerSeatsIconsStatus>
        </>
    );
}

const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerSeatsIconsStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 286px;
    margin-top: -2px;
`;

const StatusText = styled.p`
    margin-top: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;    
`;

const AvalaibleIcon = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;    
`;

const UnavailableIcon = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;   
`;

const PickedIcon = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px; 
`;

const ContainerSeats = styled.div`
    width: 375px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-left: 24px;
    margin-right: 24px;
    margin-top: -13px;
`;

const Seat = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 18px;
`;

const SeatSelected = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    margin-right: 7px;
    margin-bottom: 18px;
`;

const SeatUnavailable = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 18px;
`;