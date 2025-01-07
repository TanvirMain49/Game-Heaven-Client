import React, { useContext, useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import {
  FaGamepad,
  FaCalendarAlt,
  FaStar,
  FaAlignLeft,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { Link, NavLink, useLoaderData } from "react-router-dom";
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
    <div className="">
      {/* Header Section */}
      <div className="">
        <div className="text-center text-red-600">
          <h1 className="md:text-5xl text-3xl font-bold md:px-24 pt-8">
            Game Details
          </h1>
          <p className="md:text-base text-black dark:text-white text-sm md:py-6 pt-4 pb-6 md:px-60 px-8 text-center">
            Explore the latest details and insights about your favorite games,
            including ratings, reviews, and more!
          </p>
          <Link
            to="/"
            className="btn bg-red-500 mb-7 text-base rounded-full text-white whitespace-nowrap border-gray-500"
          >
            <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
            <p>Back to home</p>
          </Link>
        </div>
      </div>

      {/* Game Card Section */}
      <div className="mb-[10%] mt-3 border-none">
        <div className="hero bg-base-200 md:max-w-[91%] mx-auto rounded-xl dark:bg-neutral-600 dark:text-white">
          <div className="gap-8 lg:flex-row shadow-lg rounded-xl">
            <div>
            {/* Game Title and user details*/}
              <div className="p-6">
                <h1 className="md:text-3xl text-2xl font-bold">
                  {title}
                </h1>

                {/* User Details */}
                <p className="text-sm text-gray-500 dark:text-neutral-200 ">
                  <span className="font-semibold">Added By:</span> {userName} (
                  {email})
                </p>
              </div>

              {/* Game Image */}
              <div>
                <img
                  src={image}
                  className="w-full h-[980px] object-cover rounded-lg"
                  alt={title}
                />
              </div>

              {/* Game Details */}
              <div className="md:pl-8 md:pt-4 md:pb-6">
                {/* Game Description */}
                <p className="md:text-3xl text-2xl font-bold">Review</p>
                <p className="md:text-base text-sm text-gray-500 dark:text-neutral-200 py-3">
                  {description}
                </p>

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
              <div className="py-8 pl-8 flex items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
