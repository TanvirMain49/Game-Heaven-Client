import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddReview from "../Components/AddReview";
import Banner from "../Components/Banner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Banner></Banner>
        },
        {
          path:'/addReview',
          element:<AddReview></AddReview>
        },
      ]
    },
  ]);

export default router;