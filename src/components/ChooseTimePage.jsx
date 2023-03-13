import styled from "styled-components";
import SessionsTimeList from "./SessionsTimeList";
import FooterChooseTime from "./FooterChooseTime";
import MainTitleChooseTime from "./MainTitleChooseTime";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function ChooseTimePage(props) {

    const params = useParams();

    // React.useEffect(() => {
	// 	// console.log(params.idFilme);
	// 	// console.log(props.moviesList);
	// }, [props]);

    const idMovie = params.idFilme;
    const urlSessions = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;

    let [moviesSessions, setMoviesSessions] = React.useState([]);
    
    React.useEffect(() => {
		const promise = axios.get(urlSessions);   
        // console.log(urlSessions);

		promise.then(response => {
            moviesSessions = response.data;
			setMoviesSessions(moviesSessions);
            // console.log(moviesSessions)
		});
	}, []);


    if(moviesSessions.length === 0) {
		return <Loading />;
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