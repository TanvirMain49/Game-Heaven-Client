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
    <div className="flex  gap-24">
      {/* form section */}
      <div className="RegisterForm pl-20">
        <div className="card w-full mx-auto">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-2xl font-bold pt-8 pb-4 text-center dark:text-white">
              Register Here!
            </h1>
            <div className="form-control space-y-3">
              <input
                type="email"
                placeholder="name"
                name="name"
                className="border-y-2 px-3 py-3 my-2 dark:bg-black dark:text-white"
                required
              />
            </div>
            <div className="form-control space-y-2">
              <input
                type="text"
                placeholder="photoURL"
                name="photoURL"
                className="border-y-2 px-3 py-3 my-2 dark:bg-black dark:text-white"
                required
              />
            </div>
            <div className="form-control space-y-2">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="border-y-2 px-3 py-3 my-2 dark:bg-black dark:text-white"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="border-y-2 px-3 py-3 mb-2 dark:bg-black dark:text-white"
                required
              />
            </div>
            <div className="form-control mt-3 space-y-4">
              <button className="btn bg-[#FF204E] border-none font-bold text-white">
                Register
              </button>
              <p className="text-bold text-center dark:text-white">
                Do have an account? 
                <Link
                  to="/login"
                  className="text-[#FF204E] cursor-pointer hover:underline ml-1"
                >
                  log in here
                </Link>
              </p>
            </div>
          </form>

        </div>
      </div>

      {/* image section */}
      <div className="">
        <img src="https://wallpapers-clan.com/wp-content/uploads/2024/07/ghost-of-tsushima-battle-aesthetic-desktop-wallpaper-preview.jpg" alt=""  className="w-full h-screen object-cover"/>
      </div>
    </div>
  );
};

export default Register;
