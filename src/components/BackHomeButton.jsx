import styled from "styled-components";

export default function BackHomeButton() {
    return (
        <Button>Voltar pra Home</Button>
    );
}

const Button = styled.button`
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;  
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;  
    margin-bottom: 150px;
`;