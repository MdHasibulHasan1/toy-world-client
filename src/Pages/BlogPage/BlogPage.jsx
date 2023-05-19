import React, { useState } from "react";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      question: "What are access tokens and refresh tokens?",
      answer:
        "Access tokens and refresh tokens are used in authentication systems. An access token is a credential that is used to access protected resources on behalf of a user. It contains information about the user's identity and permissions. Refresh tokens are used to obtain new access tokens without requiring the user to re-authenticate. They are typically long-lived and can be used to request new access tokens when the current one expires.",
    },
    {
      id: 2,
      question: "What are the differences between SQL and NoSQL databases?",
      answer:
        "SQL databases are based on a structured model with predefined schemas, while NoSQL databases use a flexible, schema-less model. SQL databases enforce rigid schema and data integrity constraints, whereas NoSQL databases offer more flexibility and scalability. SQL databases use SQL as a query language, whereas NoSQL databases have different query languages or APIs depending on the type of database. SQL databases are known for their ACID compliance and strong consistency, while NoSQL databases prioritize scalability, availability, and partition tolerance.",
    },
    {
      id: 3,
      question: "What is express js? What is Nest JS?",
      answer:
        "Express.js is a popular, minimalist web application framework for Node.js. It provides a set of features and tools to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration. It is known for its simplicity, flexibility, and vast ecosystem of middleware and extensions. On the other hand, Nest.js is a progressive Node.js framework for building scalable and maintainable server-side applications. It leverages TypeScript and draws inspiration from Angular and Express.js to provide an opinionated architecture and developer-friendly features. Nest.js offers a modular structure, dependency injection, powerful routing, built-in validation, and support for various transport protocols (HTTP, WebSockets, etc.). It aims to enhance productivity and code maintainability.",
    },
    {
      id: 4,
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "MongoDB aggregate is a framework for performing data aggregation operations on MongoDB collections. It allows you to process and transform the data stored in MongoDB using a pipeline of stages. Each stage represents an operation that can manipulate and shape the data. The pipeline stages can include filtering, sorting, grouping, projecting, and performing computations. Aggregation pipelines in MongoDB provide powerful data processing capabilities and allow you to perform complex data transformations and analytics tasks.",
    },
  ];

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
              key={post.id}
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
