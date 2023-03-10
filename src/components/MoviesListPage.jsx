import styled from "styled-components";
import MoviesList from "./MoviesList";
import MainTitleMoviesList from "./MainTitleMoviesList";
import React from "react"

export default function MoviesListPage(props) {

    if(props.moviesList.length === 0) {
		return <p>MovieList Carregando........</p>;
	}

    return (
        <ContainerMoviesList>
            <MainTitleMoviesList />
            <MoviesList moviesList={props.moviesList}/>
        </ContainerMoviesList>
    );
}

const ContainerMoviesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;