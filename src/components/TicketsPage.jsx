import styled from "styled-components";
import BuyerData from "./BuyerData";
import TicketsButton from "./TicketsButton";
import Seats from "./Seats";
import FooterTickets from "./FooterTickets";
import MainTitleTickets from "./MainTitleTickets";
import React from "react";

export default function TicketsPage(props) {
    if (props.session.length === 0) {
        return <p>Tickets Page Carregando........</p>;
    }

    return (
        <ContainerTickets>
            <MainTitleTickets />
            <Seats session={props.session} />
            <BuyerData />
            <BuyerData />
            <TicketsButton />
            <FooterTickets session={props.session}/>
        </ContainerTickets>
    );
}

const ContainerTickets = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;