import React, { useState } from 'react';
import Banner from '../Components/Banner';
import TopRatedGames from '../Components/TopRatedGames';
import { useLoaderData } from 'react-router-dom';
import TopRatedCard from '../Components/TopRatedCard';

const Home = () => {
    const reviewLoader = useLoaderData();
    const [reviews, setReview] = useState(reviewLoader);
    return (
        <div>
            <Banner></Banner>
            <TopRatedGames></TopRatedGames>
            <div className='grid grid-col-1 md:grid-cols-3 gap-8 w-10/12 mx-auto my-12 items-center justify-center'>
                {
                    reviews.map(review =><TopRatedCard key={review._id} review={review}></TopRatedCard>)
                }
            </div>
        </div>
    );
};

export default Home;