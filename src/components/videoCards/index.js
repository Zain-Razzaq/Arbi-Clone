import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "./Card";
import { NO_OF_VIDEOS_PER_PAGE } from "../../constants";
import Button from "../Button";
import { selectedButtonContext } from "../../App";

const VideosCards = () => {
  const [selectedButton] = useContext(selectedButtonContext);
  const [currentPage, setCurrentPage] = useState(0);

  let videosData = useSelector((state) => state.videosData);
  const favoriteVideos = useSelector((state) => state.favoriteVideos);
  if (selectedButton === "Favorites") {
    videosData = videosData.filter(({ id }) => favoriteVideos.includes(id));
  }

  const startIndex = currentPage * NO_OF_VIDEOS_PER_PAGE;
  const totalNumerOfPages = Math.ceil(
    videosData.length / NO_OF_VIDEOS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedButton]);

  return (
    <div className="w-[83vw]">
      <div className="flex flex-wrap mt-14 ">
        {videosData &&
          videosData
            .slice(startIndex, startIndex + NO_OF_VIDEOS_PER_PAGE)
            .map(
              ({
                id,
                title,
                channelTitle,
                timePassedSinceUpload,
                thumbnail,
                viewCount,
                duration,
              }) => (
                <Card
                  key={id}
                  id={id}
                  image={thumbnail}
                  title={title}
                  channelName={channelTitle}
                  channelImage={thumbnail}
                  views={viewCount}
                  time={timePassedSinceUpload}
                  duration={duration}
                  favorite={favoriteVideos.includes(id)}
                />
              )
            )}
      </div>
      <div className="px-20 py-8 flex justify-between items-center">
        <div
          className=" block bottom-10 left-10"
          onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
        >
          <Button placeHolder="Previous Page" />
        </div>
        <p className="text-red-600">
          {currentPage + 1} of {totalNumerOfPages}
        </p>
        <div
          className="bottom-10 right-10"
          onClick={() =>
            currentPage < totalNumerOfPages - 1 &&
            setCurrentPage(currentPage + 1)
          }
        >
          <Button placeHolder="Next Page" />
        </div>
      </div>
    </div>
  );
};

export default VideosCards;
