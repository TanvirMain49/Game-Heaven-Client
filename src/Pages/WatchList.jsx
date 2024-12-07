import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const watchListLoader = useLoaderData();
  const [watchList, setWatchList] = useState(watchListLoader)
  const currentUser = user?.email;

  const userWatchList = watchList.filter(
    (entry) => entry.email === currentUser
  );

  const handleDelete =(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/watchLists/${id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.deletedCount>0){
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
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setWatchList(watchList.filter(entry => entry._id !== id));
          }
        });

      }
    })
  }

  return (
    <div className="mb-20">
        <div className="text-center text-[#FF204E]">
          <h1 className="text-4xl font-bold md:px-24 pt-8">Game Watch-list</h1>
          <p className="text-sm py-6 md:px-72 px-8 text-black">
          Stay updated with the most exciting upcoming games. Browse through our curated watchlist to discover new titles to look forward to, and keep track of your favorites as they launch!
          </p>
        </div>
      <div className="overflow-x-auto bg-white w-10/12 mx-auto">
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
            {userWatchList.map((review) => (
              <tr
                key={review._id}
                className="border-b hover:bg-gray-50 text-center *:py-3 *:px-3"
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
                    className="bg-red-600 text-white hover:bg-red-700 btn"
                  >
                    <FaTrashAlt className="inline-block mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
