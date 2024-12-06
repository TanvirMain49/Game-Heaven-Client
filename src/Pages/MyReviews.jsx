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
    fetch(`http://localhost:5000/myReviews/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      });
  }, []);
  // console.log(myReviews);


  const handleDelete =(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        fetch(`http://localhost:5000/myReviews/${email}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMyReviews(data);
          });
        Swal.fire({
          title: "Deleted done successfully",
          icon: "success",
        });
      }
    })
  }

  return (
    <div>
      <div className="bg-red-600 rounded-xl md:min-h-72 md:pb-40 pb-4 md:mb-0 mb-8">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold md:px-24 pt-8">Game Details</h1>
          <p className="text-base py-6 md:px-60 px-8 text-center">
            Explore the latest details and insights about your favorite games,
            including ratings, reviews, and more!
          </p>
        </div>
      </div>
        <div className="overflow-x-auto bg-white md:absolute md:top-[40%] top-[60%] md:left-[22%] ">
        <table className="table-auto w-full border-2 rounded-xl">
          <thead>
            <tr className="bg-gray-100 text-center *:py-6 *:px-6">
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
              <tr key={review._id} className="border-b hover:bg-gray-50 text-center *:py-3 *:px-3">
                <td className="py-2 px-4 font-bold text-lg">{review.title}</td>
                <td className="py-2 px-4">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="py-2 mt-6 px-4 font-bold text-base flex justify-center items-center gap-1">{review.rating} <FaStar/></td>
                <td className="py-2 px-4 font-bold text-base">{review.publishingYear}</td>
                <td className="py-2 px-4 font-bold text-base">{review.genre}</td>
                <td className="py-2 px-4 font-bold text-base space-x-2">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="bg-red-600 text-white hover:bg-red-700 btn"
                  >
                    <FaTrashAlt className="inline-block mr-1" />
                    Delete
                  </button>
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="bg-black text-white btn"
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
