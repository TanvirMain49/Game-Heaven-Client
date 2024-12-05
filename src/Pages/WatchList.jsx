import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const watchListLoader = useLoaderData();
  const currentUser = user?.email;

  // Filter the user's watchlist
  const userWatchList = watchListLoader.filter(
    (entry) => entry.email === currentUser
  );

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log("Delete item with ID:", id);
  };

  return (
    <div className="container w-10/12 mx-auto py-6">
      <div className="rounded-xl text-black">
        <div className="text-center">
          <h1 className="text-5xl font-bold md:px-24 pt-8 text-red-600">User Watch-list</h1>
        </div>
      </div>

      {/* Check if the watchlist is empty */}
      {userWatchList.length === 0 ? (
        <div className="text-center text-xl text-gray-500 mt-8">
          No data available.
        </div>
      ) : (
        // Reviews Table
        <table className="table-auto w-full border-2 mt-8">
          <thead>
            <tr className="bg-gray-100 text-left">
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
              <tr key={review._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 font-bold text-lg">{review.title}</td>
                <td className="py-2 px-4">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="py-2 px-4 font-bold text-lg">{review.rating}</td>
                <td className="py-2 px-4 font-bold text-lg">{review.publishingYear}</td>
                <td className="py-2 px-4 font-bold text-lg">{review.genre}</td>
                <td className="py-2 px-4 font-bold text-lg">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashAlt className="inline-block mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WatchList;
