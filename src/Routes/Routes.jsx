import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddReview from "../Components/AddReview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import CardDetails from "../Pages/CardDetails";
import WatchList from "../Pages/WatchList";
import MyReviews from "../Pages/MyReviews";
import AllReviews from "../Pages/AllReviews";
import UpdateReview from "../Pages/UpdateReview";
import PrivetRoutes from "./PrivetRoutes";
import Error404 from "../Pages/Error404";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/reviews')
        },
        {
          path:'/addReview',
          element:<PrivetRoutes>
            <AddReview></AddReview>
          </PrivetRoutes>
        },
        {
          path:'/logIn',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/reviews/:id',
          element:<CardDetails></CardDetails>,
          loader:({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
        },
        {
          path:'/watchList',
          element:<PrivetRoutes>
            <WatchList></WatchList>
          </PrivetRoutes>,
          // loader: ()=> fetch('http://localhost:5000/watchLists')
          
        },
        {
          path:'/myReview',
          element:<PrivetRoutes>
            <MyReviews></MyReviews>
          </PrivetRoutes>,
          
        },
        {
          path:'/allReviews',
          element:<AllReviews></AllReviews>,
          loader: ()=> fetch('http://localhost:5000/reviews')
          
        },
        {
          path:'/updateReview/:id',
          element:<UpdateReview></UpdateReview>,
          loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
          
          
        },
      ]
    },
    {
      path:"*",
      element:<Error404></Error404>
    }
  ]);

export default router;