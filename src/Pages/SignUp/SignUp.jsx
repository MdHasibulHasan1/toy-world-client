import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../assets/animation.json";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
const SignUpPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, logOut } = useContext(AuthContext);
  useTitle("Register");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;
    console.log(name, email, password, photo);

    // validation
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Your password must be at least 6 characters");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character.");
      return;
    }

    // Handle form submission logic here

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        logOut()
          .then((result) => {})
          .catch((error) => console.error(error));
        setSuccess("Account created successfully");
        Swal.fire("Good job!", "Account created successfully!!", "success");

        navigate("../login");
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
                  htmlFor="name"
                  className="block text-left text-gray-700 font-medium mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
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
              <div className="mb-4">
                <label
                  htmlFor="photo-url"
                  className="block text-left text-gray-700 font-medium mb-2"
                >
                  Photo URL:
                </label>
                <input
                  type="url"
                  id="photo-url"
                  name="photoUrl"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 block w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Register
              </button>
            </form>
            <div className="text-red-400 mt-2">{error || success}</div>
            <p>
              Already have an account?
              <Link className="hover:text-blue-500 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
