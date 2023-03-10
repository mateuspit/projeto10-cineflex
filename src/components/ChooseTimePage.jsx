import styled from "styled-components";
import SessionsTimeList from "./SessionsTimeList";
import FooterChooseTime from "./FooterChooseTime";
import MainTitleChooseTime from "./MainTitleChooseTime";
import React from "react";
import axios from "axios";

export default function ChooseTimePage() {
    const idMovie = 7;
    const urlSessions = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;

    let [moviesSessions, setMoviesSessions] = React.useState([]);
    
    React.useEffect(() => {
		const promise = axios.get(urlSessions);   

		promise.then(response => {
            moviesSessions = response.data;
			setMoviesSessions(moviesSessions);
		});
	}, []);

    if(moviesSessions.length === 0) {
		return <p>Choose page Carregando........</p>;
	}

    return (
        <ContainerChooseTime >
            <MainTitleChooseTime />
            <SessionsTimeList moviesSessions={moviesSessions.days}/>
            <FooterChooseTime moviesSessions={moviesSessions}/>
        </ContainerChooseTime>
    );
}

const ContainerChooseTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;