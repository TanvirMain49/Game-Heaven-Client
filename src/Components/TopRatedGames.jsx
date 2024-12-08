import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TopRatedGames = () => {
    return (
        <div className='mt-32'>
            <div className='text-center space-y-6'>
                <Fade direction='up' triggerOnce="true">
                <h1 className='text-6xl font-bold text-[#FF204E]'>Top Rated Games of All Time</h1>
                </Fade>
                <Fade direction='down' triggerOnce="true">
                <p className='px-64 text-gray-500 dark:text-neutral-300'>Discover the games that have captured the hearts of players around the world! From epic adventures to thrilling action-packed titles, these top-rated gems have set the standard for gaming excellence. Dive into the stories, explore the worlds, and see why they’ve earned their place among the best.</p>
                </Fade>
            </div>
        </div>
    );
};

export default TopRatedGames;