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
    const [costumerData, setCostumerData] = React.useState([]);

    function makePost() {
        console.log(costumerData);
        const sendableObject = {
            ids: [],
            compradores: []
        }
        costumerData.forEach(data => {
            sendableObject.ids.push(data.id);
            const novoComprador = {
                idAssento: data.id,
                nome: data.nome,
                cpf: data.cpf
            };
            sendableObject.compradores.push(novoComprador);
        });
        console.log(sendableObject);
    }

    function selectSeat(seat) {
        if (selectedSeats.includes(seat.name)) {
            if (window.confirm(`Tem certeza que deseja excluir o assento ${seat.name}? Todos os dados preenchidos serão excluidos.`)) {
                const newSelectedSeats = selectedSeats.filter((s) => (s !== seat.name) && (s != seat.name));
                setSelectedSeats(newSelectedSeats);
                console.log(newSelectedSeats)
                const deleteThisIndex = costumerData.findIndex(data => data.id === seat.name);
                // const result = inventory.find( fruit => fruit.name === 'cherries' );
                const updatedCustomerData = costumerData.slice(0, deleteThisIndex).concat(costumerData.slice(deleteThisIndex + 1));
                setCostumerData(updatedCustomerData);
                console.log(updatedCustomerData);
            }
        }
        else {
            selectedSeats.push(seat.name);//guarda 10
            const newSelectedSeats = [...selectedSeats];
            setSelectedSeats(newSelectedSeats);
            // console.log(selectedSeats.includes(seat.name))
            // console.log(seat.id)
            // console.log(newSelectedSeats)
            const newCustomer = { nome: "", cpf: "", id: seat.name, realId: seat.id };
            // cria um novo array que inclui o novo objeto
            const updatedCustomerData = [...costumerData, newCustomer];
            // define o novo array como o novo estado
            console.log(updatedCustomerData)
            setCostumerData(updatedCustomerData);
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
        // console.log("ticketpage: ",costumerData);
        // console.log(selectedSeats);
        return (
            <>
                <BuyerData costumerData={costumerData} setCostumerData={setCostumerData} selectedSeats={selectedSeats} />
            </>
        );
    }

    return (
        <ContainerTickets>
            <MainTitleTickets />
            <Seats session={session} selectedSeats={selectedSeats} selectedSeatsFunction={selectSeat} />
            {selectedSeats.map(dataUserInput)}
            <TicketsButton makePost={makePost} />
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