import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle, logIn, setUser } = useContext(AuthContext);
  const navigation = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        setUser(res.user);
        Swal.fire({
          title: "log in Done successfully",
          icon: "success",
        });
        navigation("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
            Swal.fire({
              title: "Registration Done successfully",
              icon: "success",
            });
            navigation("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3 space-y-4">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p>
          Don't have an account?
          <Link
            to="/register"
            className="text-[#FF204E] cursor-pointer hover:underline"
          >
            Register here
          </Link>
        </p>
        <div className="border-b-2 border-gray-300"></div>
        <button onClick={handleGoogle} className="btn btn-primary">
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
