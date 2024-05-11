import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import UseUpcomingMovies from "../hooks/UseUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.ShowGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();

  return (
    <div>
      <Header />
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
