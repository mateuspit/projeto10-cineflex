import styled from "styled-components";

export default function Movie(props) {
    return (
        <>
            {props.moviesList.map((list, i) => <MoviePoster key={i} src={list.posterURL} alt={list.title} />)}
        </>
    );
}

const MoviePoster = styled.img`
    width: 129px;
    margin-bottom: 27px;
    cursor: pointer;
`;