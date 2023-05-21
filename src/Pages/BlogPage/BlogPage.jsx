import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  useTitle("Blog");
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch(`https://toy-marketplace-server-hasib7143-gmailcom.vercel.app/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
      });
  }, []);
  console.log(blogPosts);
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome to My Blog
          </h1>

          {currentPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {post.question}
              </h2>
              <p className="text-gray-700">{post.answer}</p>
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
