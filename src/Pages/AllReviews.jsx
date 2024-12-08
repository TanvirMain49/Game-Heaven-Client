import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";
import { FaSortDown } from "react-icons/fa";

const AllReviews = () => {
  const loadReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadReviews);

  const handleSortRating = () => {
    console.log(loadReviews);
    fetch("http://localhost:5000/reviews/rating", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };
  const handleSortYear = () => {
    console.log(loadReviews);
    fetch("http://localhost:5000/reviews/year", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };

  return (
    <div>
      <div className="rounded-xl pb-4 md:mb-0 mb-8">
        <div className="text-center text-[#FF204E]">
          <h1 className="text-5xl font-bold md:px-24 pt-8">
            Discover All Reviews
          </h1>
          <p className="text-base py-6 md:px-60 px-8 text-center text-black dark:text-white">
            Explore a world of games through the eyes of our community. From
            timeless classics to the latest releases, find honest opinions,
            detailed ratings, and insights to guide your next gaming adventure.
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex items-center gap-3">
        <details className="dropdown">
          <summary className="btn bg-[#FF204E] text-white">
            Sort <FaSortDown />
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
          className="btn block px-3 py-3 bg-[#FF204E] text-white border-none"
        >
          <option value="" className="p-2 bg-gray-200 text-black">
            Select Genre
          </option>
          <option value="Action" className="p-2 bg-gray-200 text-black">
            Action
          </option>
          <option value="RPG" className="p-2 bg-gray-200 text-black">
            RPG
          </option>
          <option value="Adventure" className="p-2 bg-gray-200 text-black">
            Adventure
          </option>
          <option value="Strategy" className="p-2 bg-gray-200 text-black">
            Strategy
          </option>
        </select>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-8 w-10/12 mx-auto my-12 items-center justify-center">
        {reviews.map((loadReview) => (
          <AllReviewCard
            key={loadReview._id}
            loadReview={loadReview}
          ></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
