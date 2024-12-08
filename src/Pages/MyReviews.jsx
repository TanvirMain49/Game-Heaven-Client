import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaPen, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetch(`https://game-heaven-server.vercel.app/myReviews/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [email]);

  const handleDelete = (id) => {
    fetch(`https://game-heaven-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              setMyReviews(myReviews.filter((review) => review._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        }
      });
  };

  return (
    <div className="px-4 py-8">
      {/* Header */}
      <div className="text-center text-[#FF204E]">
        <h1 className="md:text-4xl text-3xl font-bold mb-4">Game Reviews</h1>
        <p className="md:text-base text-sm md:px-24 text-black dark:text-white">
          Check out our honest reviews of the latest games. Get a quick overview
          of gameplay, graphics, and overall experience to help you decide your
          next gaming adventure.
        </p>
      </div>

      {/* Reviews Table */}
      <div className="overflow-x-auto bg-white dark:bg-black shadow-md rounded-lg mt-8 mb-24">
        <table className="table-auto w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-700 text-sm md:text-base dark:text-white text-center">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Rating</th>
              <th className="py-2 px-4 border">Published Year</th>
              <th className="py-2 px-4 border">Genre</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myReviews.map((review) => (
              <tr
                key={review._id}
                className="border-b text-sm md:text-base text-center dark:text-white"
              >
                {/* Title */}
                <td className="py-2 px-4">{review.title}</td>

                {/* Image */}
                <td className="py-2 px-4">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>

                {/* Rating */}
                <td className="py-2 px-4 flex justify-center items-center gap-1">
                  {review.rating} <FaStar className="text-yellow-500" />
                </td>

                {/* Published Year */}
                <td className="py-2 px-4 ">
                  {review.publishingYear}
                </td>

                {/* Genre */}
                <td className="py-2 px-4">
                  {review.genre}
                </td>

                {/* Action */}
                <td className="py-2 px-4 flex flex-col md:flex-row items-center md:mt-3 mt-0 md:space-x-2 space-y-2 md:space-y-0">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    <FaTrashAlt />
                  </button>

                  {/* Edit Button */}
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-neutral-200 transition"
                  >
                    <FaPen />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
