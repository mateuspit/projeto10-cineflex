import styled from "styled-components";

export default function HeaderPage(){
    return(
        <HeaderTitle><p>CINEFLEX</p></HeaderTitle>
    );
}

const HeaderTitle = styled.header`
    width: 100vw;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;        
        color: #E8833A;
    }
`;