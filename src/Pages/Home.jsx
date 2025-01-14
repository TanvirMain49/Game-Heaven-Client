import React, { useContext, useState } from 'react';
import Banner from '../Components/Banner';
import TopRatedGames from '../Components/TopRatedGames';
import { Link, useLoaderData } from 'react-router-dom';
import TopRatedCard from '../Components/TopRatedCard';
import GetGame from '../Components/GetGame';
import TrustedCompany from '../Components/TrustedCompany';
import GetItem from '../Components/GetItem';
import NewsLetter from '../Components/NewsLetter';
import ContactUs from '../Components/ContactUs';

const Home = () => {
    const reviewLoader = useLoaderData();
    const [reviews, setReview] = useState(reviewLoader);
    if(reviewLoader === 0){
        return <h3 className="text-center text-5xl font-bold mb-[40%] mt-[20%]">No data Available</h3>
    }
    return (
        <div>
            <Banner></Banner>
            <TrustedCompany></TrustedCompany>
            <TopRatedGames></TopRatedGames>
            <div data-aos="zoom-in" className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 w-11/12 mx-auto my-12 items-center justify-center'>
                {
                    reviews.map(review =><TopRatedCard key={review._id} review={review}></TopRatedCard>)
                }
            </div>

            <div className='flex justify-center items-center my-8'>
            <Link to='/allReviews' className='btn border-none bg-[#FF204E] font-bold text-white'>All reviews</Link>
            </div>
            <GetGame></GetGame>
            <NewsLetter></NewsLetter>
            <GetItem></GetItem>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;