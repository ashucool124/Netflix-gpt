import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie poster" src={CDN_IMG_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
