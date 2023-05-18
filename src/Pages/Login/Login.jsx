import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../assets/animation.json";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signInWithGoogle, updateUserData, signIn } =
    useContext(AuthContext);
  console.log(createUser);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate("/");
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // validation
    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        toast.success("Login successful!");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" bg-white shadow-md rounded-md w-10/12  mx-auto mt-24 my-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className=""
      >
        <h2 className="text-4xl font-extrabold text-center">
          Sign up for an account
        </h2>
        <div className="md:grid md:grid-cols-2 items-center">
          <div className="px-8">
            <Lottie
              options={lottieOptions}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className=" px-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-left text-gray-700 font-medium mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-left font-medium mb-2"
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute top-0 right-0 mt-3 mr-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-500 block w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Login
              </button>
            </form>
            <div className="text-red-500 mt-2">{error && error}</div>
            <p>
              New to Toy World?
              <Link
                className="hover:text-blue-500 underline ml-3"
                to="/sign_up"
              >
                Create an account
              </Link>
            </p>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn my-3 btn-outline hover:btn-primary w-full"
              >
                <FaGoogle /> <span className="ml-3">Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
