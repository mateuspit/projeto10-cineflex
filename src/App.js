import styled from "styled-components";
import HeaderPage from "./components/HeaderPage";
import MoviesListPage from "./components/MoviesListPage"
import ChooseTimePage from "./components/ChooseTimePage"
import TicketsPage from "./components/TicketsPage"
import OrderDetailsPage from "./components/OrderDetailsPage"
import React from "react";
import axios from "axios";

export default function App() {
    let [moviesList, setMoviesList] = React.useState([]);
    let [session, setSession] = React.useState([]);

    const urlMovies = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    
    React.useEffect(() => {
      const promise = axios.get(urlMovies);   
  
      promise.then(response => {
        moviesList = response.data;
        setMoviesList(moviesList);
        // console.log(moviesList[0].title);
      });
    }, []);

    React.useEffect(() => {
      const promise = axios.get(urlSession);
  
      promise.then(response => {
        
        session = response.data;
        setSession(session);
      });
    }, []);

  const sessionId = 77;

  const urlSession = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;

  return (
    <Iphone11ProContainer>

      <HeaderPage />

      <MoviesListPage moviesList={moviesList}/>

      <ChooseTimePage />
      
      <TicketsPage session={session}/>

      <OrderDetailsPage />

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