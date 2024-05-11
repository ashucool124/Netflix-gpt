import { Background_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import SearchGptBar from "./SearchGptBar";

const GptSearch = () => {
  return (
    <div>
      <div className="-z-10">
        <img className="absolute " src={Background_IMG} alt="bg logo" />
      </div>
      <SearchGptBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
