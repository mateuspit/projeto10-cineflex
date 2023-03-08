import styled from "styled-components";
import img4 from "../assets/imgs/image 6.png"

export default function FooterChooseTime() {
    return (
        <ContainerFooter>
            <FooterMovie>
                <img src={img4} alt={"test"} />
                <FooterMovieStats>
                    <h1>Enola Holmes</h1>
                    <h1>Quinta-feira - 15:00</h1>
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
