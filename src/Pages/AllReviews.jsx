import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import AllReviewCard from '../Components/AllReviewCard';


const AllReviews = () => {
    const loadReviews = useLoaderData();

  return (
    <div>
      <div className=" rounded-xl pb-4 md:mb-0 mb-8">
        <div className="text-center text-[#FF204E]">
          <h1 className="text-5xl font-bold md:px-24 pt-8">Discover All Reviews</h1>
          <p className="text-base py-6 md:px-60 px-8 text-center text-black dark:text-white">
          Explore a world of games through the eyes of our community. From timeless classics to the latest releases, find honest opinions, detailed ratings, and insights to guide your next gaming adventure.
          </p>
        </div>
      </div>
        <div className='grid grid-col-1 md:grid-cols-3 gap-8 w-10/12 mx-auto my-12 items-center justify-center'>
            {
                loadReviews.map(loadReview=><AllReviewCard key={loadReview._id} loadReview={loadReview}></AllReviewCard>)
            }
        </div>
    </div>
  )
};

export default AllReviews;