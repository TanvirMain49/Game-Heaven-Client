import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";

const GetItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center text-gray-900 dark:text-gray-100 mb-12">
        <h1 className="mb-4 font-bold md:text-5xl text-3xl text-red-600">
        Level Up Your Game Gear
        </h1>
        <p
          color="blue-gray"
          className="md:text-xl md:px-0 max-w-6xl mx-auto text-sm dark:text-gray-300"
        >
          From pro-level keyboards to high-performance gaming phones, find everything you need to dominate your next match. Shop now and gear up for victory!
        </p>
      </div>
      <Swiper
        // slidesPerView={4}
        spaceBetween={5}
        breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on small tablets
            },
            768: {
              slidesPerView: 2, // 3 slides on medium screens
            },
            1024: {
              slidesPerView: 4, // 4 slides on large screens
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-11/12 mx-auto"
      >
        {items.map((item, idx) => (
          <SwiperSlide>
            <div className="card bg-base-100 dark:bg-gray-800 max-w-80 max-h-[560px] md:mx-0 mx-auto shadow-xl">
              <figure className="h-[70%]">
                <img
                  src={item.product_image}
                  alt="Shoes"
                  className="w-[80%] h-60 px-6 object-cover"
                />
              </figure>
              <div className="card-body text-gray-900 dark:text-gray-100">
                <h2 className="card-title">{item.product_title}</h2>
                <p className="font-bold text-red-600 dark:text-red-400">Price: ${item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="flex items-center my-32 hover:text-white">
            <a href="https://giddy-engine.surge.sh/" target="_blank" className="btn border-2 bg-[#FF204E] dark:bg-transparent border-[#FF204E] text-white font-bold transition ease-out duration-300 hover:shadow-gray-400 hover:shadow-lg hover:border-[#FF204E] hover:dark:shadow-none ">
              Shop Now
              <BsArrow90DegRight className="text-white text-xl"></BsArrow90DegRight>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GetItem;