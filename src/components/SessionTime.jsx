import styled from "styled-components";

export default function SessionTime(props) {
    return (
        <>
            {props.moviesSessions.map((s) => (
                <div key={s.id}>
                    <DateSession >{s.weekday} - {s.date}</DateSession>
                    <TimeSession>
                        <span>{s.showtimes[0].name}</span>
                        <span>{s.showtimes[1].name}</span>
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
`;