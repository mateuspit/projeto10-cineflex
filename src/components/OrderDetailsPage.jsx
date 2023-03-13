import styled from "styled-components";
import MainTitleOrderDetails from "./MainTitleOrderDetails";
import Details from "./Details";
import BackHomeButton from "./BackHomeButton";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function OrderDetailsPage(props) {
    const navigate = useNavigate();
        // React.useEffect(() => {
    //     console.log(props.session.movie.posterURL)
    //     // console.log(props.session.day.weekday)
    //     // console.log(props.session.seats[6].isAvailable)
    // }, []);
    return (
        <ContainerOrderDetails>
            <BackArrow onClick={() => navigate(-1)}><BiArrowBack size={40} /></BackArrow>
            <MainTitleOrderDetails />
            <Details costumerData={props.costumerData} session={props.session}/>
            <BackHomeButton clearData={props.clearData}/>
        </ContainerOrderDetails>
    );
}

const BackArrow = styled.div`
    /* margin-right: 90px; */
    display: flex;
    position: absolute;
    top: 10px;
    left: 30px;
    cursor: pointer;
`;

const ContainerOrderDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;