const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute p-10 pt-[15%] flex flex-col gap-4 bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl text-white font-bold w-1/4">{title}</h1>
      <p className="w-3/12 text-white">{overview}</p>
      <div className="flex gap-5">
        <button className="bg-white text-black px-8 py-3 rounded-md">
          ▶ Play
        </button>
        <button className="bg-white text-black px-8 py-3 rounded-md bg-opacity-65">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
