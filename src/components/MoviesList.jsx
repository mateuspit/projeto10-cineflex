import styled from "styled-components";
import Movie from "./Movie";
import React from "react";

export default function MoviesList(props) {

    

    
    
    return (
        <MoviesContainer>            
            <Movie moviesList={props.moviesList} />
        </MoviesContainer>
    );
}

const MoviesContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;