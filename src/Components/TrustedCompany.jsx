import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const TrustedCompany = () => {
  const { dark } = useContext(AuthContext);

  const handlClick = () =>{
    Swal.fire("Thank You For clicking. Now, You soon will be member of our community");
  }
  return (
    <div className="md:py-16 pb-16 text-center">
      <h1 className="font-bold mb-10 md:text-5xl text-3xl dark:text-white">Trusted by Gamers Worldwide</h1>
      <div className="flex justify-center items-center gap-8 mb-10 space-x-8">
        {dark ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU6mcQ5dMYvwgAXjg-WsceB-_O4SHch3_KZfifUKHG7TEGuzv6YGa1FjNTmfvMUpwrTg&usqp=CAU"
            className="md:h-20 h-10"
          />
        ) : (
          <img
            src="https://i.ibb.co.com/7zNzkjx/225-2252650-game-company-logo-png-transparent-png.png"
            alt="company-1"
            className="md:h-20 h-10"
          />
        )}

        {dark ? (
          <img
            src="https://cdn2.steamgriddb.com/logo_thumb/598fb37d8e3a1f127b3ba7700febc92e.png"
            className="md:h-20 h-10"
          />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoIc3F8MGlkTZu9VI5yAhssk3PKnWukbzkfpqEXvLEzEhDIh6RV-7sKoRQUpR-PDz-ms&usqp=CAU"
            alt="company-2"
            className="md:h-20 h-10"
          />
        )}

        {dark ? (
          <img
            src="https://s7d1.scene7.com/is/image/otpp/epic-games:Facebook?wid=1200&hei=630&fmt=webp"
            alt="company-2"
            className="md:h-20 h-10"
          />
        ) : (
          <img
            src="https://w7.pngwing.com/pngs/175/817/png-transparent-electronic-arts-logo-video-game-ea-sports-business-electronic-text-trademark-logo.png"
            alt="company-2"
            className="md:h-20 h-10"
          />
        )}

        {dark ? (
          <img
            src="https://pbs.twimg.com/profile_images/1720455944898072576/8b-xD6uu_400x400.jpg"
            className="md:h-20 h-10"
          />
        ) : (
          <img
            src="https://e7.pngegg.com/pngimages/59/109/png-clipart-riot-games-round-thumbnail-tech-companies.png"
            alt="company-2"
            className="md:h-20 h-10"
          />
        )}
      </div>
      <button onClick={handlClick} className="bg-[#FF204E] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#D4183C]">
        Join the Community
      </button>
    </div>
  );
};

export default TrustedCompany;
