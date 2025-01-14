import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  const userEmail = user.email;

  useEffect(() => {
    if (user?.email) {
      fetch(`https://game-heaven-server.vercel.app/watchLists/${user.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.watchList) {
            setWatchList(data.watchList);
          } else {
            setWatchList([]);
            console.error("Unexpected response format:", data);
          }
        });
    }
  }, [user?.email]);

  if(watchList.length === 0){
    return <h3 className=" text-center text-5xl font-bold mb-[40%] mt-[20%]">No Watch List have been added</h3>
  }


  return (
    <div className="mb-[20%]">
      <div className="text-center text-[#FF204E]">
        <h1 className="text-4xl font-bold md:px-24 pt-8">Game Watch-list</h1>
        <p className="text-sm py-3 md:px-[26%] px-8 text-black dark:text-white">
          Stay updated with the most exciting upcoming games. Browse through our
          curated watchlist to discover new titles to look forward to, and keep
          track of your favorites as they launch!
        </p>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-black mt-8">
        <table className="table-auto w-full border-2 rounded-xl">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-700 dark:text-white text-center *:py-6 *:px-6">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Rating</th>
              <th className="py-2 px-4 border">Published Year</th>
              <th className="py-2 px-4 border">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.map((review) => (
              <tr
                key={review._id}
                className="border-b text-sm md:text-base text-center dark:text-white *:py-3 *:px-3"
              >
                <td className="py-2 px-4  dark:text-white">{review.title}</td>
                <td className="py-2 px-4">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="py-2 mt-6 px-4  flex justify-center items-center gap-1 dark:text-white">
                  {review.rating} <FaStar />
                </td>
                <td className="py-2 px-4  dark:text-white">
                  {review.publishingYear}
                </td>
                <td className="py-2 px-4  dark:text-white">
                  {review.genre}
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
