import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logout successful!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-slate-100 fixed top-0 z-50">
      {/* Left side of the navbar */}
      <div className="navbar-start flex items-center">
        {/* Dropdown menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* Menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Dropdown menu content */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* Navigation links */}
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all_toys"
                aria-label="all_toys"
                title="All Toys"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_toys"
                aria-label="my_toys"
                title="My Toys"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                My Toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/add_a_toys"
                  aria-label="add_a_toys"
                  title="Add A Toys"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : "default"
                  }
                >
                  Add A Toys
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blogs"
                aria-label="blogs"
                title="Blogs"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              {user ? (
                <NavLink
                  onClick={handleLogout}
                  to="/"
                  aria-label="blog"
                  title="Logout"
                  className={({ isActive }) =>
                    isActive ? "text-black" : "default"
                  }
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>

        {/* Logo */}
        <span className="text-gray-600 font-semibold sm:text-3xl">
          Toy World
        </span>
      </div>

      {/* Center of the navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Navigation links */}
          <li tabIndex={0}>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all_toys"
              aria-label="all_toys"
              title="All Toys"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my_toys"
              aria-label="my_toys"
              title="My Toys"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              My Toys
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/add_a_toys"
                aria-label="add_a_toys"
                title="Add A Toys"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                Add A Toys
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/blogs"
              aria-label="blogs"
              title="Blogs"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink
                onClick={handleLogout}
                to="/"
                aria-label="logout"
                title="Logout"
                className={({ isActive }) =>
                  isActive ? "text-black" : "default"
                }
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                aria-label="login"
                title="Login"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      {/* Right side of the navbar */}
      <div className="navbar-end flex justify-end">
        {user && (
          <div>
            {/* User profile picture */}
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <img
                className="ring ring-blue-300 md:ring-blue-500 rounded-full block w-8"
                src={user?.photoURL}
                alt="not found"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
