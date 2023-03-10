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

    return (
        <ContainerTickets>
            <MainTitleTickets />
            <Seats session={session} />
            <BuyerData />
            <BuyerData />
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