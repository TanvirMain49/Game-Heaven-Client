import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllReviewCard from '../Components/AllReviewCard';


const AllReviews = () => {
    const loadReviews = useLoaderData();
    console.log(loadReviews);

  return (
    <div>
        <div>
            <h1>all card here</h1>
            <p>hello i bye</p>
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