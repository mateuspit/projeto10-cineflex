import styled from "styled-components";
import HeaderPage from "./components/HeaderPage";
import FooterChooseTime from "./components/FooterChooseTime";
import MainTitleMoviesList from "./components/MainTitleMoviesList";
import SessionsTimeList from "./components/SessionsTimeList";
import MoviesList from "./components/MoviesList";
import MainTitleChooseTime from "./components/MainTitleChooseTime";

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;