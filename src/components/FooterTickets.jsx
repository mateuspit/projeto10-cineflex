import styled from "styled-components";
import React from "react";

export default function FooterChooseTime(props) {



    return (
        <ContainerFooter>
            <FooterMovie>
                <img data-test="footer" src={props.session.movie.posterURL} alt={props.session.name} />
                <FooterMovieStats>
                    <h1>{props.session.movie.title}</h1>
                    <h1>{props.session.day.weekday} - {props.session.name}</h1>
                </FooterMovieStats>
            </FooterMovie>
        </ContainerFooter>
    );
}

const FooterMovieStats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`;

const ContainerFooter = styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterMovie = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    width: 375px;
    img {
        width: 64px;
        margin-right: 15px;
        border: solid #ffffff 8px;
        border-bottom: solid #ffffff 9px;
    }
`;
