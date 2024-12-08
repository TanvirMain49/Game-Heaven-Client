import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";
import { FaSortDown } from "react-icons/fa";

const AllReviews = () => {
  const loadReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadReviews);

  const handleSortRating = () => {
    console.log(loadReviews);
    fetch("https://game-heaven-server.vercel.app/reviews/rating", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };
  const handleSortYear = () => {
    console.log(loadReviews);
    fetch("https://game-heaven-server.vercel.app/reviews/year", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    if (value === "") {
      setReviews(loadReviews);
      return;
    }
    if (value === "all") {
      setReviews(loadReviews);
      return;
    }

    const filteredReview = loadReviews.filter((review) => review.genre === value);
    setReviews(filteredReview);
  };

  return (
    <div>
      <div className="rounded-xl pb-4 md:mb-0 mb-8">
        <div className="text-center text-[#FF204E]">
          <h1 className="md:text-5xl text-3xl  font-bold md:px-24 pt-8">
            Discover All Reviews
          </h1>
          <p className="md:text-base text-sm md:py-6 py-3 md:px-60 px-3 text-center text-black dark:text-white">
            Explore a world of games through the eyes of our community. From
            timeless classics to the latest releases, find honest opinions,
            detailed ratings, and insights to guide your next gaming adventure.
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex justify-center items-center gap-3">
        <details className="dropdown">
          <summary className="btn w-24 bg-[#FF204E] text-white ">
            Sort <FaSortDown className="mb-2"/>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a onClick={handleSortRating} className="">
                Rating
              </a>
            </li>
            <li>
              <a onClick={handleSortYear}>Year</a>
            </li>
          </ul>
        </details>
        <select
          placeholder="genre"
          name="genre"
          onClick={handleFilter}
          className="btn block px-2 py-1 bg-[#FF204E] text-white border-none"
        >
          <option value="">All</option>
              <option value="Action">Action Adventure</option>
              <option value="RPG">First person shooter</option>
              <option value="Adventure">Simulation</option>
              <option value="Strategy">Strategy</option>
              <option value="Strategy">Sports</option>
              <option value="Strategy">Sports</option>
              <option value="Strategy">Open World</option>
              <option value="Strategy">MMORPGS</option>
              <option value="Strategy">Strategic</option>
              <option value="Strategy">Racing</option>
              <option value="Strategy">Music/Rhythm</option>
              <option value="Strategy">Card/Board Games</option>
        </select>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-8 w-10/12 mx-auto my-12 items-center justify-center">
        {reviews.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No reviews available
          </div>
        ) : (
          reviews.map((loadReview) => (
            <AllReviewCard
              key={loadReview._id}
              loadReview={loadReview}
            ></AllReviewCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllReviews;
