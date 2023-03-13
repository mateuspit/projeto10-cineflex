import styled from "styled-components";
import SessionsTimeList from "./SessionsTimeList";
import FooterChooseTime from "./FooterChooseTime";
import MainTitleChooseTime from "./MainTitleChooseTime";
import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { BiArrowBack } from "react-icons/bi";

export default function ChooseTimePage(props) {

    const params = useParams();
    const navigate = useNavigate();

    // function backToMovieList() {
    //     navigate("/");
    // }

    // React.useEffect(() => {
    // 	// console.log(params.idFilme);
    // 	// console.log(props.moviesList);
    // }, [props]);

    const idMovie = params.idFilme;
    const urlSessions = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;

    let [moviesSessions, setMoviesSessions] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get(urlSessions);
        window.scrollTo(0, 0);
        // console.log(urlSessions);

        promise.then(response => {
            moviesSessions = response.data;
            setMoviesSessions(moviesSessions);
            // console.log(moviesSessions)
        });
    }, []);


    if (moviesSessions.length === 0) {
        return <Loading />;
    }

    return (
        <ContainerChooseTime >
            {/* <BackArrow onClick={backToMovieList}><BiArrowBack size={40} /></BackArrow> */}
            <BackArrow data-test="go-home-header-btn" onClick={() => navigate(-1)}><BiArrowBack size={40} /></BackArrow>
            <MainTitleChooseTime />
            <SessionsTimeList moviesSessions={moviesSessions.days} />
            <FooterChooseTime moviesSessions={moviesSessions} />
        </ContainerChooseTime>
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

const ContainerChooseTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;