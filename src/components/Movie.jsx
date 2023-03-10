import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {


    return (
        <>
            {props.moviesList.map((list, i) =>
                <Link to={`/sessoes/${list.id}`}>
                    <MoviePoster key={i} src={list.posterURL} alt={list.title} />
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