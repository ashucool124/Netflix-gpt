import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  console.log(movieId, "id");
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await movieData.json();
    console.log(json, "json");

    const filterVideos = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const filterTrailer = filterVideos.filter(
      (v) => v.name === "Official Trailer"
    );

    const trailer = filterVideos.length ? filterTrailer[0] : json?.results[0];
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
