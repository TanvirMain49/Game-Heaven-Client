import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee"; // Marquee component
import { FaFacebook, FaTwitter, FaInstagram, FaTag } from "react-icons/fa"; // React Icons
import { Link } from "react-router-dom";

const GetGame = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("Game.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="pt-16 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h1 className="mb-4 font-bold md:text-5xl text-3xl text-red-600">
          Amazing Game Deals
        </h1>
        <p color="blue-gray" className="md:text-xl md:px-0 px-5 text-sm dark:text-gray-300">
          Check out the hottest discounts on your favorite games. Grab them before they're gone!
        </p>
      </div>

      <div className="overflow-hidden">
        <Marquee direction="right" gradient={false} speed={200} pauseOnHover>
          {games.map((game) => (
            <div key={game.id} className="mr-8">
              <Card className="w-96 mb-8 bg-white dark:bg-black shadow-lg">
                <CardHeader floated={false} className="h-80">
                  <img
                    src={game.imageUrl}
                    alt={game.gameName}
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody className="text-left p-4">
                  <Typography variant="h4" color="blue-gray" className="mb-2 font-bold text-xl dark:text-white">
                    {game.gameName}
                  </Typography>

                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-base font-semibold dark:text-white">Discount: </p>
                    <Typography color="green" className="font-semibold dark:text-green-400">
                      {game.discount}
                    </Typography>
                  </div>
                  <Typography color="blue-gray" className="font-semibold mt-2 dark:text-white">
                    <span className="text-base font-semibold">Price:</span>
                    <span className="line-through text-red-500">{game.originalPrice}</span> 
                    <span className="font-bold">{game.finalPrice}</span>
                  </Typography>
                </CardBody>
                {/* Shop Now Button */}
                <div className="flex justify-start w-full pb-4 pl-3">
                  <a href='https://store.steampowered.com/' target="_blank" className="btn border-2 bg-gray-100 dark:bg-transparent border-[#FF204E] text-[#FF204E] font-bold hover:bg-[#FF204E] hover:text-white transition ease-out duration-300 hover:shadow-gray-400 hover:shadow-lg hover:border-[#FF204E] hover:dark:shadow-none">
                    Shop Now
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default GetGame;
