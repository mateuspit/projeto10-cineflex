import styled from "styled-components";
import Movie from "./Movie";

export default function MoviesList() {
    return (
        <MoviesContainer>
            <Movie />
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