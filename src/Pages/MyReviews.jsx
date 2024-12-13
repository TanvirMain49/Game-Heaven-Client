import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaPen, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdCalendarToday, MdCategory } from "react-icons/md";
import { FcRating } from "react-icons/fc";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user, setLoader, loader } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    setLoader(true);
    fetch(`https://game-heaven-server.vercel.app/myReviews/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
    setLoader(false);
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
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              setLoader(true);
              setMyReviews(myReviews.filter((review) => review._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            setLoader(false);
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
      <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto">
        {myReviews.map((review) => (
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={review.image}
                alt="card-image"
                class="h-full w-full object-cover rounded-md"
              />
            </div>
            <div class="p-4">
              <div class="mb-2 flex items-center justify-between">
                <p class="text-slate-800 text-3xl font-bold">
                  {review.title}
                </p>
                <p class="text-black flex items-center justify-center gap-2 text-xl font-semibold">
                  {review.rating}
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <MdCategory className="text-[#FF204E] text-xl" />{" "}
                {/* Genre Icon */}
                <p className="text-black dark:text-neutral-100  font-semibold text-lg">
                  Genre:
                </p>
                <h1 className="text-base text-black dark:text-neutral-100  font-semibold">
                  {review.genre}
                </h1>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <MdCalendarToday className="text-[#FF204E] text-xl" />{" "}
                {/* Publish Year Icon */}
                <p className="text-black dark:text-neutral-100  font-semibold text-lg">
                  Publish Year:
                </p>
                <h1 className="text-base text-black dark:text-neutral-100  font-semibold">
                  {review.publishingYear}
                </h1>
              </div>

              <div className="flex space-x-5 mt-4">
                {/* Edit Button */}
                <Link
                  to={`/updateReview/${review._id}`}
                  className="btn bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-700 dark:hover:bg-neutral-200 transition"
                >
                  <FaPen />
                  Edit
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn bg-red-600 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition"
                >
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
