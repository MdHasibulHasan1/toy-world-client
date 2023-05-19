import React, { useState } from "react";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy blog post data for pagination example
  const blogPosts = [
    {
      id: 1,
      title:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Compare SQL and NoSQL databases?",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      title: "What is express js? What is Nest JS? ",
      content:
        "Express.js is a popular, minimalist web application framework for Node.js. It provides a set of features and tools to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration. It is known for its simplicity, flexibility, and vast ecosystem of middleware and extensions. on the other hand, Nest.js is a progressive Node.js framework for building scalable and maintainable server-side applications. It leverages TypeScript and draws inspiration from Angular and Express.js to provide an opinionated architecture and developer-friendly features. Nest.js offers a modular structure, dependency injection, powerful routing, built-in validation, and support for various transport protocols (HTTP, WebSockets, etc.). It aims to enhance productivity and code maintainability.",
    },
    {
      id: 4,
      title: "What is MongoDB aggregate and how does it work ?",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    // ... additional blog posts
  ];

  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome to My Blog
          </h1>

          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}

          <div className="flex justify-center">
            <nav className="flex">
              {Array.from(
                { length: Math.ceil(blogPosts.length / postsPerPage) },
                (_, index) => index + 1
              ).map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handlePaginationClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
