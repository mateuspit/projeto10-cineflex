import img3 from "../assets/imgs/image 3.png"
import img4 from "../assets/imgs/image 6.png"
import styled from "styled-components";

export default function Movie(){
    return(
        <>
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} /> 
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} /> 
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />
            <MoviePoster src={img4} alt={"test"} />
            <MoviePoster src={img3} alt={"test"} />           
        </>
    );
}

const MoviePoster = styled.img`
    width: 129px;
    margin-bottom: 27px;
    cursor: pointer;
`;