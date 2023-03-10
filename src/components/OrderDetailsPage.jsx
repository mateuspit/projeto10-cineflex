import styled from "styled-components";
import MainTitleOrderDetails from "./MainTitleOrderDetails";
import Details from "./Details";
import BackHomeButton from "./BackHomeButton";

export default function OrderDetailsPage() {
        // React.useEffect(() => {
    //     console.log(props.session.movie.posterURL)
    //     // console.log(props.session.day.weekday)
    //     // console.log(props.session.seats[6].isAvailable)
    // }, []);
    return (
        <ContainerOrderDetails>
            <MainTitleOrderDetails />
            <Details />
            <BackHomeButton />
        </ContainerOrderDetails>
    );
}

const ContainerOrderDetails = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;