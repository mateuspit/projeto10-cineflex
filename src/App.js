import styled from "styled-components";
import HeaderPage from "./components/HeaderPage";
import FooterChooseTime from "./components/FooterChooseTime";
import FooterTickets from "./components/FooterTickets";
import MainTitleMoviesList from "./components/MainTitleMoviesList";
import SessionsTimeList from "./components/SessionsTimeList";
import MoviesList from "./components/MoviesList";
import MainTitleChooseTime from "./components/MainTitleChooseTime";
import MainTitleTickets from "./components/MainTitleTickets";
import MainTitleOrderDetails from "./components/MainTitleOrderDetails";
import Seats from "./components/Seats";
import Details from "./components/Details";
import BuyerData from "./components/BuyerData";
import TicketsButton from "./components/TicketsButton";
import BackHomeButton from "./components/BackHomeButton";

export default function App() {
  return (
    <Iphone11ProContainer>

      <HeaderPage />

      <ContainerMoviesList>
        <MainTitleMoviesList />
        <MoviesList />
      </ContainerMoviesList>

      <ContainerChooseTime >
        <MainTitleChooseTime />
        <SessionsTimeList />
        <FooterChooseTime />
      </ContainerChooseTime>

      <ContainerTickets>
        <MainTitleTickets />
        <Seats />
        <BuyerData />
        <BuyerData />
        <TicketsButton />
        <FooterTickets />
      </ContainerTickets>

      <ContainerOrderDetails>
        <MainTitleOrderDetails />
        <Details/>
        <BackHomeButton/>
      </ContainerOrderDetails>

    </Iphone11ProContainer>
  );
}

const Iphone11ProContainer = styled.div`
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerMoviesList = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerChooseTime = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;

const ContainerTickets = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerOrderDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;