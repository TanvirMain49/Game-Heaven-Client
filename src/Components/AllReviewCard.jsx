import React from "react";
import { MdGames, MdCategory, MdCalendarToday, MdPerson } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const AllReviewCard = ({ loadReview }) => {
  const { _id, title, image, rating, publishingYear, genre, userName } =
    loadReview;

  return (
    <div className="w-full max-w-sm overflow-hidden bg-white dark:bg-neutral-900 rounded-lg hover:shadow-lg border border-gray-300 dark:border-[#FF204E]">
      <img src={image} className="h-72 w-full object-cover" alt={title} />

      {/* Game Title with Icon */}
      <div className="flex items-center px-6 py-3 bg-[#00224D]">
        <MdGames className="text-white text-xl" />
        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="px-6 py-4 ">
        {/* User Section with Icon */}
        <div className="flex items-center gap-3 mt-3">
          <MdPerson className="text-[#FF204E] text-xl" />
          <p className="text-black dark:text-neutral-100  font-semibold text-lg">
            Critic:
          </p>
          <h1 className="text-base text-black dark:text-neutral-100  font-semibold">
            {userName}
          </h1>{" "}
          {/* Displaying user name */}
        </div>

        {/* Genre Section with Icon */}
        <div className="flex items-center gap-3 mt-3">
          <MdCategory className="text-[#FF204E] text-xl" /> {/* Genre Icon */}
          <p className="text-black dark:text-neutral-100  font-semibold text-lg">
            Genre:
          </p>
          <h1 className="text-base text-black dark:text-neutral-100  font-semibold">
            {genre}
          </h1>
        </div>

        {/* Rating Section with Icon */}
        <div className="flex items-center gap-3 mt-3">
          <FcRating className="text-xl" /> {/* Rating Icon */}
          <p className="text-black dark:text-neutral-100  font-semibold text-lg">
            Rating:
          </p>
          <h1 className="text-base text-black dark:text-neutral-100  font-semibold">
            {rating}
          </h1>
        </div>

        {/* Publish Year Section with Icon */}
        <div className="flex items-center gap-3 mt-3">
          <MdCalendarToday className="text-[#FF204E] text-xl" />{" "}
          {/* Publish Year Icon */}
          <p className="text-black dark:text-neutral-100  font-semibold text-lg">
            Publish Year:
          </p>
          <h1 className="text-base text-black dark:text-neutral-100  font-semibold">
            {publishingYear}
          </h1>
        </div>
      </div>

      {/* Explore Details Button */}
      <Link
        to={`/reviews/${_id}`}
        className="btn border-2 bg-gray-100 dark:bg-transparent border-[#FF204E] text-[#FF204E] font-bold mx-6 mb-6 hover:bg-[#FF204E] hover:text-white transition ease-out duration-300 hover:shadow-gray-400 hover:shadow-lg hover:border-[#FF204E] hover:dark:shadow-none "
      >
        Explore Details
      </Link>
    </div>
  );
};

export default AllReviewCard;
