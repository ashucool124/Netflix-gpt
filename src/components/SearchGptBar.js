import { useSelector } from "react-redux";
import lang from "../utils/language";

const SearchGptBar = () => {
  const changeLang = useSelector((store) => store.config.language);
  return (
    <div className="absolute pt-[10%] w-full justify-center flex">
      <form className="grid gap-4 grid-cols-12">
        <input
          className="rounded-lg col-span-9 px-3"
          type="text"
          placeholder={lang[changeLang].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-600 text-white rounded-lg px-8 py-3">
          {lang[changeLang].search}
        </button>
      </form>
    </div>
  );
};
export default SearchGptBar;
