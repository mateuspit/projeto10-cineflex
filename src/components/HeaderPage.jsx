import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeaderPage() {
    return (
        <>
            <BackArrow><BiArrowBack /></BackArrow>

            <HeaderTitle><Link to="/"><p>CINEFLEX</p></Link></HeaderTitle>

        </>
    );
}

const BackArrow = styled.div`
    /* margin-right: 90px; */
    display: none;
    position: absolute;
    top: 20px;
    left: 50px;
    cursor: pointer;
`;

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
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;