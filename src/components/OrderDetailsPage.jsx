import styled from "styled-components";
import MainTitleOrderDetails from "./MainTitleOrderDetails";
import Details from "./Details";
import BackHomeButton from "./BackHomeButton";

export default function OrderDetailsPage(props) {
        // React.useEffect(() => {
    //     console.log(props.session.movie.posterURL)
    //     // console.log(props.session.day.weekday)
    //     // console.log(props.session.seats[6].isAvailable)
    // }, []);
    return (
        <ContainerOrderDetails>
            <MainTitleOrderDetails />
            <Details costumerData={props.costumerData} session={props.session}/>
            <BackHomeButton />
        </ContainerOrderDetails>
    );
}

const ContainerOrderDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;