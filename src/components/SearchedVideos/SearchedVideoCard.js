const SearchedVideoCard = ({
  image,
  title,
  description,
  channelName,
  channelImage,
  views,
  time,
  duration,
}) => {
  return (
    <div className="flex h-52  m-2 ">
      <div className=" w-96 cursor-pointer relative group">
        <img
          className="max-h-full w-full object-cover rounded-lg"
          src={image}
          alt="thumbnail"
        />
        <span className="absolute bottom-2 right-2 p-0.5 bg-slate-950/75 rounded-md text-white text-xs group-hover:hidden">
          {duration}
        </span>
      </div>
      <div className="mx-2 w-[720px]">
        <h3 className=" font-medium text-lg line-clamp-2 cursor-pointer">
          {title}
        </h3>
        <p className="text-slate-500 text-sm font-normal">
          {views} views • {time} ago
        </p>
        <div className="flex items-center gap-1 my-2">
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src={channelImage}
            alt="profile"
          />
          <div className="text-slate-500 text-sm font-normal">
            <p className="cursor-pointer">{channelName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
