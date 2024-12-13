import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
  // console.log(user);
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const description = form.description.value;

    const review = {
      userName,
      email,
      title,
      image,
      rating,
      publishingYear,
      genre,
      description,
    };
    // console.log(review);

    //send data to the server and get response
    fetch("https://game-heaven-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Successfully added!",
          icon: "success",
        });
        navigation("/");
      });
  };
  return (
    <div className="">
      <div className="text-center text-[#FF204E]">
        <h1 className="md:text-5xl text-4xl font-bold md:px-24 pt-8">Add New Review</h1>
        <p className="md:text-base text-sm py-6 md:px-80 px-8 text-center text-black dark:text-white">
          Share your thoughts and experience with your favorite game! Please
          provide a detailed review, rate the game, and select the genre. Your
          feedback helps other gamers make informed decisions.
        </p>
        <Link to="/" className="btn bg-[#FF204E] text-white border-none font-bold md:mt-4 mt-2">
        <FaArrowAltCircleLeft/>
        Back to Home
      </Link>
      </div>
      <div className="max-w-4xl mx-auto p-8 border-2 border-gray-300 dark:bg-neutral-800 mt-8 bg-base-100  rounded-xl mb-20">
        <form
          onSubmit={handleAddReview}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* User Name*/}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-base font-semibold text-gray-700 dark:text-white col-span-2">
              User Name
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              readOnly
              defaultValue={user?.displayName}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            />
          </div>

          {/* User Email*/}
          <div className="md:col-span-1 col-span-2">
            <label
              className="text-base text-gray-700 dark:text-white font-bold"
            >
              User Email
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            />
          </div>

          {/* Game Title */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-base font-semibold text-gray-700 dark:text-white">
              Game Title/ Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter game title"
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            />
          </div>

          {/* Game Cover Image */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-base font-semibold text-gray-900 dark:text-white">
              Game Cover Image (URL)
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter game cover image URL"
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            />
          </div>

          {/* Rating */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-base font-semibold text-gray-700 dark:text-white">
              Rating (1-5)
            </label>
            <input
              type="number"
              placeholder="rating"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            />
          </div>

          {/* Publishing Year */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-base font-semibold text-gray-700 dark:text-white">
              Publishing Year
            </label>
            <input
              type="number"
              placeholder="publishingYear"
              name="publishingYear"
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            />
          </div>

          {/* Genres */}
          <div className="md:col-span-2">
            <label className="block text-base font-semibold text-gray-700 dark:text-white">
              Genre
            </label>
            <select
              placeholder="genre"
              name="genre"
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            >
              <option value="">Select Genre</option>
              <option value="Action Adventure">Action Adventure</option>
              <option value="First person shooter">First person shooter</option>
              <option value="Simulation">Simulation</option>
              <option value="Strategy">Strategy</option>
              <option value="Sports">Sports</option>
              <option value="Open World">Open World</option>
              <option value="MMORPGS">MMORPGS</option>
              <option value="Racing">Racing</option>
              <option value="Music">Music/Rhythm</option>
              <option value="Card">Card/Board Games</option>
            </select>
          </div>

          {/* Review Description */}
          <div className="col-span-2">
            <label className="block text-base font-semibold text-gray-700 dark:text-white">
              Review Description
            </label>
            <textarea
              name="description"
              placeholder="Write your detailed review"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-400 dark:bg-neutral-800 rounded-md shadow-sm dark:text-white dark:font-semibold md:text-base"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-[#FF204E] text-white py-2 mt-6 mb-3 rounded-md font-bold"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
