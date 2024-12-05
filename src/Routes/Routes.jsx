import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddReview from "../Components/AddReview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import CardDetails from "../Pages/CardDetails";
import WatchList from "../Pages/WatchList";

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
          element:<AddReview></AddReview>
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
          element:<WatchList></WatchList>,
          loader: ()=> fetch('http://localhost:5000/watchLists')
          
        },
      ]
    },
  ]);

export default router;