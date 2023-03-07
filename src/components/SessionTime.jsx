import styled from "styled-components";

export default function SessionTime() {
    return (
        <>
            <DateSession>Domingo - 24/10/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Segunda-feira - 25/10/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Terça-feira - 26/10/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Quarta-feira - 27/06/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Quinta-feira - 28/06/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Sexta-feira - 29/06/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Sábado - 30/06/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Domingo - 31/06/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>

            <DateSession>Quinta-feira - 24/06/2021</DateSession>
            <TimeSession>
                <span>15:00</span>
                <span>19:00</span>
            </TimeSession>
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