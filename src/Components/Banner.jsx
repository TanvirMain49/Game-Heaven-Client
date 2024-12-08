import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Carousel className="rounded-none">
      <div className="relative h-full w-full">
        <img
          src="https://images7.alphacoders.com/419/thumb-1920-419788.jpg"
          alt="image 1"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Fade direction="down">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Explore the best games we’re playing right now.
              </Typography>
            </Fade>
            <Fade>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base"
              >
                Step into a world where every game tells a story. From epic
                adventures to fast-paced shooters, uncover in-depth reviews that
                help you decide what’s worth your time. Dive into our reviews
                and discover games that truly captivate
              </Typography>
            </Fade>
            <Fade direction="up">
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="bg-[#FF204E] text-white"
                >
                  Explore
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.alphacoders.com/134/thumb-1920-1343294.jpeg"
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Fade direction="down">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Games you can’t miss.
              </Typography>
            </Fade>
            <Fade>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base"
              >
                Not sure what to play next? We've got you covered! Explore
                honest reviews, detailed critiques, and top recommendations for
                games across genres. Let us help you level up your gaming
                journey with insights you can trust
              </Typography>
            </Fade>
            <Fade direction="up">
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="bg-[#FF204E] text-white"
                >
                  Explore
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://artfiles.alphacoders.com/758/thumb-1920-75838.jpg"
          alt="image 3"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Fade direction="down">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Honest opinions on the newest games.
              </Typography>
            </Fade>
            <Fade>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base"
              >
                Gaming is more than just a hobby—it's a passion. Join us as we
                explore the latest titles, revisit classics, and rate the best
                (and worst) games in the industry. Share your thoughts, and
                let's build the ultimate gaming community together
              </Typography>
            </Fade>
            <Fade direction="up">
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="bg-[#FF204E] text-white"
                >
                  Explore
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
