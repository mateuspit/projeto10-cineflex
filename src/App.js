import styled from "styled-components";
import HeaderPage from "./components/HeaderPage";
import MainTitleMoviesList from "./components/MainTitleMoviesList";
import MoviesList from "./components/MoviesList";

export default function App() {
  return (
    <Iphone11ProContainer>

      <HeaderPage />

      <ContainerMoviesList>
        <MainTitleMoviesList />
        <MoviesList />
      </ContainerMoviesList>

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;