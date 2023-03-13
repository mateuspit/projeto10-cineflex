import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function SessionTime(props) {


    // React.useEffect(() => {
    //     console.log(props.moviesSessions);
    // }, []);

    return (
        <>
            {props.moviesSessions.map((s) => (
                <div key={s.id}>
                    <DateSession data-test="movie-day">{s.weekday} - {s.date}</DateSession>
                    <TimeSession>
                        <Link to={`/assentos/${s.showtimes[0].id}`}><span data-test="showtime">{s.showtimes[0].name}</span></Link>
                        <Link to={`/assentos/${s.showtimes[1].id}`}><span data-test="showtime">{s.showtimes[1].name}</span></Link>
                        {/* <span>{s.showtimes[0].name}</span>
                        <span>{s.showtimes[1].name}</span> */}
                    </TimeSession>
                </div>
            ))}
        </>
    );
}

const DateSession = styled.h1`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        letter-spacing: 0.02em;
        color: #293845;   
        margin-bottom: 22px;
`;
const TimeSession = styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        margin-bottom: 23px;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #E8833A;
            border-radius: 3px;
            width: 82px;
            height: 43px;
            margin-right: 9px;
            cursor: pointer;
        }
        a{
            color: #FFFFFF;
            text-decoration: none;
            &:link, &:visited {
                color: none;
                text-decoration: none;
                cursor: none;
            }

            &:link:active, &:visited:active {
                color: none;
            }
        }   
`;