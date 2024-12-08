import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaPen, FaRegStar, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  // console.log(email);

  useEffect(() => {
    fetch(`https://game-heaven-server.vercel.app/myReviews/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, []);
  // console.log(myReviews);

  const handleDelete = (id) => {
    fetch(`https://game-heaven-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          fetch(`https://game-heaven-server.vercel.app/myReviews/${email}`, {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => {
              setMyReviews(data);
            });
          Swal.fire({
            title: "Deleted done successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="text-center text-[#FF204E]">
        <h1 className="text-5xl font-bold md:px-24 pt-8">
        Game Reviews
        </h1>
        <p className="text-base pt-6 pb-12 md:px-72 px-8 text-black dark:text-white">
        Check out our honest reviews of the latest games. Get a quick overview of gameplay, graphics, and overall experience to help you decide your next gaming adventure.
        </p>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-black mb-20">
        <table className="table-auto border-2 rounded-xl w-10/12 mx-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-700 dark:text-white text-center *:py-6 *:px-6">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Rating</th>
              <th className="py-2 px-4 border">Published Year</th>
              <th className="py-2 px-4 border">Genre</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((review) => (
              <tr
                key={review._id}
                className="border-b dark:text-white text-center *:py-3 *:px-3"
              >
                <td className="py-2 px-4 font-bold text-lg">{review.title}</td>
                <td className="py-2 px-4">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="py-2 mt-6 px-4 font-bold text-base flex justify-center items-center gap-1">
                  {review.rating} <FaStar />
                </td>
                <td className="py-2 px-4 font-bold text-base">
                  {review.publishingYear}
                </td>
                <td className="py-2 px-4 font-bold text-base">
                  {review.genre}
                </td>
                <td className="py-2 px-4 font-bold text-base space-x-2">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="bg-red-600 text-white hover:bg-red-700 border-none btn"
                  >
                    <FaTrashAlt className="inline-block mr-1" />
                    Delete
                  </button>
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="bg-black dark:bg-white dark:text-black text-white border-none btn"
                  >
                    <FaPen className="inline-block mr-1" />
                    Edit
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
