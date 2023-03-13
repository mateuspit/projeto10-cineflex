import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {

    React.useEffect(() => {
		// console.log(props.moviesList);
	}, [props]);


    return (
        <>
            {props.moviesList.map((list, i) =>
                <Link to={`/sessoes/${list.id}`}>
                    <MoviePoster data-test="movie" key={i} src={list.posterURL} alt={list.title} />
                </Link>
            )}
        </>
    );
}

const MoviePoster = styled.img`
    width: 129px;
    margin-bottom: 27px;
    cursor: pointer;
`;