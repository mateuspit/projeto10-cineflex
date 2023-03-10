import styled from "styled-components";
import BuyerData from "./BuyerData";
import TicketsButton from "./TicketsButton";
import Seats from "./Seats";
import FooterTickets from "./FooterTickets";
import MainTitleTickets from "./MainTitleTickets";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TicketsPage() {
    let [session, setSession] = React.useState([]);
    const [selectedSeats, setSelectedSeats] = React.useState([]);

    function selectSeat(seat) {
        // console.log("Assento clicado: ",seat.name); //10

        // console.log("Array de assentos cliclados: ",selectedSeats);
        // const newSelectedSeats = [...selectedSeats, Number(seat.name)];
        // console.log(newSelectedSeats.includes(seat.name));

        if (selectedSeats.includes(seat.name)) {
            if (window.confirm(`Tem certeza que deseja excluir o assento ${seat.name}? Todos os dados preenchidos serão excluidos.`)) {
                const newSelectedSeats = selectedSeats.filter((s) => (s !== seat.name) && (s != seat.name));
                setSelectedSeats(newSelectedSeats);
            }
        }
        else {
            selectedSeats.push(seat.name);//guarda 10
            const newSelectedSeats = [...selectedSeats];
            setSelectedSeats(newSelectedSeats);
            console.log(selectedSeats.includes(seat.name))
            console.log(newSelectedSeats)
        }
    }

    React.useEffect(() => {
        const promise = axios.get(urlSession);

        promise.then(response => {
            session = response.data;
            // console.log(session);
            setSession(session);
        });
    }, []);

    const params = useParams();

    const sessionId = params.idSessao;

    const urlSession = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;

    if (session.length === 0) {
        return <p>Tickets Page Carregando........</p>;
    }

    function dataUserInput(selectedSeats) {
        return (
            <>
                <BuyerData selectedSeats={selectedSeats} />
            </>
        );
    }

    return (
        <ContainerTickets>
            <MainTitleTickets />
            <Seats session={session} selectedSeats={selectedSeats} selectedSeatsFunction={selectSeat} />
            {selectedSeats.map(dataUserInput)}
            <TicketsButton />
            <FooterTickets session={session} />
        </ContainerTickets>
    );
}

const ContainerTickets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;