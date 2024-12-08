import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const UpdateReview = () => {
  const reviewLoader = useLoaderData();
  const { _id, title, image, rating, publishingYear, genre, description } =
    reviewLoader;

  const { user } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleUpdateReview = (e) => {
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

    //send data to the server and get response
    fetch(`https://game-heaven-server.vercel.app/updateReview/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated successfully!",
            icon: "success",
          });
          navigation("/myReview");
        }
      });
  };
  return (
    <div className="md:mt-20 mt-12 mb-20">
      <div className="text-center text-[#FF204E]">
        <h1 className="md:text-5xl text-3xl font-bold mb-4">Update Your Review</h1>
        <p className="md:text-base text-sm md:px-72 text-black dark:text-white">
        Editing your review allows you to refine your thoughts, update ratings, or provide additional insights about your experience. Share the latest details to ensure your feedback stays relevant and helpful to others. Take a moment to make your review even more impactful!
        </p>
        <Link
          to="/myReview"
          className="btn bg-[#FF204E] text-white border-none font-bold mt-8"
        > 
        <BsFillArrowLeftSquareFill></BsFillArrowLeftSquareFill>
          Back
        </Link>
      </div>

      <div className="max-w-4xl mx-auto p-8 border-2 border-gray-300 mt-8 bg-gray-50 dark:bg-neutral-800 rounded-xl">
        <form
          onSubmit={handleUpdateReview}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* User Name*/}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white col-span-2">
              User Name
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              readOnly
              defaultValue={user?.displayName}
              className="mt-1 block w-full px-3 py-2 border dark:bg-transparent dark:text-white border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* User Email*/}
          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              User Email
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="mt-1 block w-full px-3 py-2 border dark:bg-transparent dark:text-white border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Game Title */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Game Title/ Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter game title"
              defaultValue={title}
              className="mt-1 block w-full px-3 py-2 border dark:bg-transparent dark:text-white border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Game Cover Image */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Game Cover Image (URL)
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter game cover image URL"
              defaultValue={image}
              className="mt-1 block w-full px-3 py-2 border dark:bg-transparent dark:text-white border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Rating */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Rating (1-5)
            </label>
            <input
              type="number"
              placeholder="rating"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              defaultValue={rating}
              className="mt-1 block w-full px-3 py-2 border dark:bg-transparent dark:text-white border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Publishing Year */}
          <div className="md:col-span-1 col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Publishing Year
            </label>
            <input
              type="number"
              placeholder="publishingYear"
              name="publishingYear"
              defaultValue={publishingYear}
              className="mt-1 block w-full px-3 py-2 dark:bg-transparent dark:text-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Genres */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Genre
            </label>
            <select
              placeholder="genre"
              name="genre"
              defaultValue={genre}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm dark:bg-transparent dark:text-white"
            >
              <option value="">Select Genre</option>
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

          {/* Review Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Review Description
            </label>
            <textarea
              name="description"
              placeholder="Write your detailed review"
              rows="4"
              defaultValue={description}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:bg-transparent dark:text-white rounded-md shadow-sm sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-[#FF204E] text-white py-2 mt-6 mb-3 rounded-md shadow-sm"
            >
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
