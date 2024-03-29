import styled from "styled-components";
import BuyerData from "./BuyerData";
import TicketsButton from "./TicketsButton";
import Seats from "./Seats";
import FooterTickets from "./FooterTickets";
import MainTitleTickets from "./MainTitleTickets";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { BiArrowBack } from "react-icons/bi";

export default function TicketsPage(props) {
    // let [session, setSession] = React.useState([]);
    const [selectedSeats, setSelectedSeats] = React.useState([]);
    // const [costumerData, setCostumerData] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        props.setCostumerData([]);
        window.scrollTo(0, 0);
      }, []);

    // function backToSessionsList() {
    //     navigate(`/sessoes/${params.idSessao}`);
    // }

    // function cpfAuthentication(cpf){
    //     if(cpf.length !== 11){
    //         alert("diferente de 11")
    //         console.log(cpf)
    //         return false;
    //     }
    //     if(typeof cpf !== "number"){
    //         alert("diferente de number")
    //         return false;
    //     }
    // }

    function makePost() {
        // let cpfIsOk = true;
        // console.log(costumerData);
        
        const sendableObject = {
            ids: [],
            compradores: []
        }
        props.costumerData.forEach(data => {
            sendableObject.ids.push(data.realId);
            // cpfIsOk = cpfAuthentication(data.cpf)
            // if(!cpfIsOk){
            //     alert("Escreva o(s) CPF(s) corretamente!");
            //     return
            // }
            const novoComprador = {
                idAssento: data.realId,
                nome: data.nome,
                cpf: data.cpf
            };
            sendableObject.compradores.push(novoComprador);
        });
        // console.log(sendableObject);

        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', sendableObject)
        promise.then(() => {
            // console.log(response.data);
            // console.log(sendableObject);
            navigate('/sucesso');
            // alert("Deu bom");
            // props.setCostumerData([])
            console.log(props.costumerData)
            console.log(sendableObject)
        })
        promise.catch((error) => {
            console.error(error);
            // alert("Erro");
        });
    }

    function selectSeat(seat) {
        if (selectedSeats.includes(seat.name)) {
            if (window.confirm(`Tem certeza que deseja excluir o assento ${seat.name}? Todos os dados preenchidos serão excluidos.`)) {
                const newSelectedSeats = selectedSeats.filter((s) => (s !== seat.name) && (s != seat.name));
                setSelectedSeats(newSelectedSeats);
                console.log(newSelectedSeats)
                const deleteThisIndex = props.costumerData.findIndex(data => data.id === seat.name);
                // const result = inventory.find( fruit => fruit.name === 'cherries' );
                const updatedCustomerData = props.costumerData.slice(0, deleteThisIndex).concat(props.costumerData.slice(deleteThisIndex + 1));
                props.setCostumerData(updatedCustomerData);
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
            const updatedCustomerData = [...props.costumerData, newCustomer];
            // define o novo array como o novo estado
            // console.log(updatedCustomerData)
            props.setCostumerData(updatedCustomerData);
        }
    }



    React.useEffect(() => {
        const promise = axios.get(urlSession);

        promise.then(response => {
            // props.session = response.data;
            console.log(props.session);
            props.setSession(response.data);
        });
    }, []);

    const params = useParams();

    const sessionId = params.idSessao;

    const urlSession = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;

    if (props.session.length === 0) {
        return <Loading />;
    }

    function dataUserInput(selectedSeats) {
        // console.log("ticketpage: ",costumerData);
        // console.log(selectedSeats);
        return (
            <>
                <BuyerData costumerData={props.costumerData} setCostumerData={props.setCostumerData} selectedSeats={selectedSeats} />
            </>
        );
    }

    return (
        <ContainerTickets>
            {/* <BackArrow onClick={backToSessionsList}><BiArrowBack size={40} /></BackArrow> */}
            <BackArrow data-test="go-home-header-btn" onClick={() => navigate(-1)}><BiArrowBack size={40} /></BackArrow>
            <MainTitleTickets />
            <Seats session={props.session} selectedSeats={selectedSeats} selectedSeatsFunction={selectSeat} />
            {selectedSeats.map(dataUserInput)}
            <TicketsButton makePost={makePost} />
            <FooterTickets session={props.session} />
        </ContainerTickets>
    );
}

const BackArrow = styled.div`
    /* margin-right: 90px; */
    display: flex;
    position: absolute;
    top: 10px;
    left: 30px;
    cursor: pointer;
`;

const ContainerTickets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;