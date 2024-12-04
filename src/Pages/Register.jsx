import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, signInWithGoogle, setUser, updatePfp } =
    useContext(AuthContext);
  const navigation = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const user = { name, email, photoURL, password };
    // Password validation
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      password.length < 6
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      });
      return;
    }
    console.log(user);
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        updatePfp({ displayName: name, photoURL: photoURL })
          .then((res) => {
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
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="photoURL"
              name="photoURL"
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
          </div>
          <div className="form-control mt-3 space-y-4">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p>
          If you have an account then,
          <Link
            to="/login"
            className="text-[#FF204E] cursor-pointer hover:underline"
          >
            login here
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

export default Register;
