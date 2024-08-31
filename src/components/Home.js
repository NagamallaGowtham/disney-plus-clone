import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { collection, onSnapshot } from "firebase/firestore";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.name)
    
    useEffect(() => {
        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trending = [];

        const moviesCollection = collection(db, 'movies');
        const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                const data = doc.data();
                const movie = { id: doc.id, ...data };
                switch (data.type) {
                    case "recommend":
                        recommends = [...recommends, movie];
                        break;
                    case "new":
                        newDisneys = [...newDisneys, movie];
                        break;
                    case "original":
                        originals = [...originals, movie];
                        break;
                    case "trending":
                        trending = [...trending, movie];
                        break;
                    default:
                        break;
                }
            });

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            }));
        });

        return () => unsubscribe();
    }, [userName, dispatch]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &::after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home