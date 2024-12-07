import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const review = useLoaderData();
  const {
    _id,
    title,
    image,
    rating,
    publishingYear,
    genre,
    description,
  } = review;
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
    fetch(`http://localhost:5000/updateReview/${_id}`, {
      method: "PUT",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(review)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount>0){
            Swal.fire({
              title: "Updated successfully!",
              icon: "success",
            });
            navigation("/myReview");
        }
      });
  };
  return (
    <div className="h-screen">
      <Link
        to="/myReview"
        className="btn bg-[#FF204E] text-white border-none font-bold md:ml-[20.5%] mt-8"
      >
        Back to Home
      </Link>
      <div className="max-w-4xl mx-auto p-8 border-2 border-gray-300 mt-8 bg-gray-50 rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Review</h1>

        {/* Paragraph */}
        <p className="text-center text-sm text-gray-700 mb-6">
          Share your thoughts and experience with your favorite game! Please
          provide a detailed review, rate the game, and select the genre. Your
          feedback helps other gamers make informed decisions.
        </p>

        <form
          onSubmit={handleUpdateReview}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* User Name*/}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 col-span-2">
              User Name
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              readOnly
              defaultValue={user?.displayName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* User Email*/}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Game Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Game Title/ Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter game title"
              defaultValue={title}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Game Cover Image */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Game Cover Image (URL)
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter game cover image URL"
              defaultValue={image}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating (1-5)
            </label>
            <input
              type="number"
              placeholder="rating"
              name="rating"
              min="1"
              max="5"
              defaultValue={rating}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Publishing Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Publishing Year
            </label>
            <input
              type="number"
              placeholder="publishingYear"
              name="publishingYear"
              defaultValue={publishingYear}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Genres */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <select
              placeholder="genre"
              name="genre"
              defaultValue={genre}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Strategy">Strategy</option>
            </select>
          </div>

          {/* Review Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Review Description
            </label>
            <textarea
              name="description"
              placeholder="Write your detailed review"
              rows="4"
              defaultValue={description}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
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
