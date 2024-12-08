import React, { useContext, useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaGamepad, FaCalendarAlt, FaStar } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdWatchLater } from "react-icons/md";
import Swal from "sweetalert2";

const CardDetails = () => {
  const cardLoader = useLoaderData();
  const { user, setWatchList, watchList } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);

  const {
    _id,
    title,
    image,
    rating,
    publishingYear,
    genre,
    description,
    userName,
    email,
  } = cardLoader;

  const handleWatchList = (cardId) => {
    const name = user.displayName;
    const email = user.email;

    const newList = {
      cardId,
      title,
      image,
      rating,
      publishingYear,
      genre,
      description,
      name,
      email,
    };
    fetch(`https://game-heaven-server.vercel.app/watchLists`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Watch list added successfully",
            icon: "success",
          });
          setLiked(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cart is already added",
          });
          return;
        }
      });
  };

  return (
    <div className="md:mb-96 mb-[20%]">
      {/* Header Section */}
      <div className="bg-red-600 rounded-xl md:min-h-80 md:pb-52 pb-4 md:mb-0 mb-8">
        <div className="text-center text-white">
          <h1 className="md:text-5xl text-3xl font-bold md:px-24 pt-8">Game Details</h1>
          <p className="md:text-base text-sm md:py-6 pt-4 pb-6 md:px-60 px-8 text-center">
            Explore the latest details and insights about your favorite games,
            including ratings, reviews, and more!
          </p>
        </div>
      </div>

      {/* Game Card Section */}
      <div>
        <div className="md:absolute md:top-[40%] top-[60%] md:left-[10%] hero bg-base-200 md:max-w-[80%] mx-auto rounded-xl dark:bg-neutral-600 dark:text-white">
          <div className="hero-content gap-8 flex-col lg:flex-row">
            {/* Game Image */}
            <img
              src={image}
              className="md:max-w-xl md:max-h-2xl md:p-16 rounded-lg"
              alt={title}
            />

            {/* Game Details */}
            <div>
              <div className="relative">
                {/* Game Title */}
                <h1 className="md:text-3xl text-2xl font-bold md:pt-2">
                  {title}
                </h1>

                {/* User Details */}
                <p className="text-sm text-gray-500 dark:text-neutral-200 py-2">
                  <span className="font-semibold">Added By:</span> {userName} (
                  {email})
                </p>

                {/* Game Description */}
                <p className="md:text-base text-sm text-gray-500 dark:text-neutral-200 py-3">{description}</p>

                {/* Genre, Publishing Year, and Rating */}
                <div className="flex flex-col gap-3">
                  <p className="text-base text-gray-500 dark:text-neutral-200 flex items-center gap-2">
                    <FaGamepad className="text-[#FF204E]" />
                    <span className="font-semibold">Genre:</span> {genre}
                  </p>
                  <p className="text-base text-gray-500 dark:text-neutral-200 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FF204E]" />
                    <span className="font-semibold">Published:</span>{" "}
                    {publishingYear}
                  </p>
                  <p className="text-base text-gray-500 dark:text-neutral-200 flex items-center gap-2">
                    <FaStar className="text-orange-400" />
                    <span className="font-semibold">Rating:</span> {rating}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="py-3 flex items-center">
                <button
                  onClick={() => handleWatchList(_id)}
                  disabled={liked}
                  className="btn mr-4 md:rounded-full rounded-2xl bg-[#FF204E] text-white border-none"
                >
                  Add To WatchList <MdWatchLater className="text-2xl" />
                </button>

                {user && (
                  <button className="btn text-xl md:rounded-full rounded-2xl text-black border-gray-500">
                    <CiHeart />
                  </button>
                )}

                <NavLink
                  to="/"
                  className="btn text-base absolute top-1 right-1 ml-4 rounded-full text-black border-gray-500 lg:inline-block hidden"
                >
                  <RxCross1 className="text-xl text-error font-extrabold mt-3" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
