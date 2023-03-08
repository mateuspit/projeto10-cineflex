import styled from "styled-components";
import SessionTime from "./SessionTime";

export default function SessionsTimeList(props) {

    return (
        <ContainerSessionsTime>
            <SessionTime moviesSessions={props.moviesSessions}/>
        </ContainerSessionsTime>
    );

}

const ContainerSessionsTime = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 125px;
`;
