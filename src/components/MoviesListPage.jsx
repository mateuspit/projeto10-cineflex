import styled from "styled-components";
import MoviesList from "./MoviesList";
import MainTitleMoviesList from "./MainTitleMoviesList";
import React from "react"
import Loading from "./Loading";

export default function MoviesListPage(props) {

    if (props.moviesList.length === 0) {
    // if (true) {
        return <Loading />;
    }

    return (
        <ContainerMoviesList>
            <MainTitleMoviesList />
            <MoviesList moviesList={props.moviesList} />
        </ContainerMoviesList>
    );
}

const ContainerMoviesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;