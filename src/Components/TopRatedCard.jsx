import {  FcRating } from "react-icons/fc";
import { MdGames } from "react-icons/md";
import { Link } from "react-router-dom";


const TopRatedCard = ({ review }) => {

  const { title, image, rating, publishingYear, genre, description } = review;
  console.log(image);

  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg hover:shadow-lg border-2 border-gray-300">
      <img src={image} className="h-72 w-full object-cover" alt={title} />

      <div className="flex items-center px-6 py-3 bg-[#00224D]">
        <MdGames className="text-white" />
        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="px-6 py-4">
       <div className="flex items-center gap-2">
       <h1 className="font-bold text-black">Genre: </h1>
       <h1 className="text-base text-gray-700 font-semibold">{genre}</h1>
       </div>
        <div className="flex items-center mt-2 ">
          <h1 className="font-bold">Rating: </h1>
          <h1 className="px-2 text-base text-gray-700 flex items-center gap-1 font-semibold">
            {rating} <FcRating />
          </h1>
        </div>

        <div className="flex items-center mt-2 ">
          <h1 className="text-black font-bold">Publish in Year: </h1>
          <h1 className="px-2 text-base text-gray-700 font-semibold">{publishingYear}</h1>
        </div>
      </div>
      <Link
        to="/register"
        className="btn border-2 bg-gray-100 border-[#FF204E] text-[#FF204E] font-bold mx-6 mb-6 hover:bg-[#FF204E] hover:text-white transition ease-out duration-300 hover:shadow-gray-400 hover:shadow-lg hover:border-[#FF204E]"
      >
        Explore Details
      </Link>
    </div>
  );
};

export default TopRatedCard;
