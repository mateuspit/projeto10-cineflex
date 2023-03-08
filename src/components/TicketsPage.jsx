import styled from "styled-components";
import BuyerData from "./BuyerData";
import TicketsButton from "./TicketsButton";
import Seats from "./Seats";
import FooterTickets from "./FooterTickets";
import MainTitleTickets from "./MainTitleTickets";

export default function TicketsPage() {
    return (
        <ContainerTickets>
            <MainTitleTickets />
            <Seats />
            <BuyerData />
            <BuyerData />
            <TicketsButton />
            <FooterTickets />
        </ContainerTickets>
    );
}

const ContainerTickets = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;