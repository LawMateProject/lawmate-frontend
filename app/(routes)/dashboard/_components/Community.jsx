"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const posts = [
    {
      id: 1,
      username: "Anonymous",
      time: "5 min ago",
      title:
        "I’m thinking about filing for divorce but am unsure about my rights regarding child custody. What’s the typical process in Sri Lanka?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla.",
      tags: ["Family Law", "Divorce"],
      views: 125,
      comments: 15,
      likes: 155,
    },
    {
      id: 2,
      username: "Linuxoid",
      time: "25 min ago",
      title: "",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.",
      tags: ["Criminal Law", "Misdemeanors"],
      views: 125,
      comments: 15,
      likes: 155,
    },
    {
      id: 3,
      username: "Anonymous",
      time: "5 min ago",
      title:
        "My family and I have lived on a plot of land for over 30 years, but we don’t have any official documentation. Can we claim ownership under Sri Lankan law?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla.",
      tags: ["Property Law", "Land Ownership"],
      views: 125,
      comments: 15,
      likes: 155,
    },
  ];

  const mostReadPosts = [
    {
      id: 1,
      title: "Please read rules before you start working on a platform",
    },
    { id: 2, title: "Vision & Strategy of Alemhelp" },
  ];

  const featuredLinks = [
    { id: 1, title: "Alemhelp source-code on GitHub", url: "#" },
    { id: 2, title: "Golang best-practices", url: "#" },
    { id: 3, title: "Alem.School dashboard", url: "#" },
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    // Handle form submission logic (e.g., send the data to your backend)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    // Example: Submit the form to an API (e.g., /api/ask-question)
    alert("Question submitted successfully!");
    setTitle("");
    setDescription("");
    setImage(null);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="p-5 bg-gray-50">
      {/* Main Content */}
      <div className="flex gap-6">
        {/* Left Section: Community Posts */}
        <div className="flex-1">
          <div className="flex gap-4 border-b pb-3">
            {["New", "Top", "Hot", "Closed"].map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  filter === "New"
                    ? "bg-blue-100 text-blue-600 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                {filter}
              </button>
            ))}
            <Button
              className="ml-auto bg-blue-500"
              onClick={() => setIsModalOpen(true)}
            >
              Ask a Question
            </Button>
          </div>

          <div className="mt-5 space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 shadow rounded-md flex flex-col space-y-3 border"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {post.username === "Anonymous" ? (
                      <span className="text-gray-500 text-sm">A</span>
                    ) : (
                      <img
                        src="/path/to/avatar.jpg"
                        alt={post.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {post.username}
                    </h3>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                </div>

                <Link href={`dashboard/post/${post.id}`}>
                  <div className="text-lg font-semibold text-blue-500 hover:underline">
                    {post.title || "View Full Post"}
                  </div>
                </Link>
                <p className="text-sm text-gray-600">{post.body}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end items-center space-x-3 text-gray-500 text-sm mt-3">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <i className="fas fa-eye"></i>
                      <span>{post.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <i className="fas fa-comment-alt"></i>
                      <span>{post.comments}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <i className="fas fa-thumbs-up"></i>
                      <span>{post.likes}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Sidebar */}
        <div className="w-72 space-y-5">
          {/* Most-read Posts */}
          <div className="bg-white p-4 shadow rounded-md">
            <h4 className="text-lg font-semibold mb-3">Must-read posts</h4>
            <ul className="space-y-2">
              {mostReadPosts.map((post) => (
                <li key={post.id}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Links */}
          <div className="bg-white p-4 shadow rounded-md">
            <h4 className="text-lg font-semibold mb-3">Featured links</h4>
            <ul className="space-y-2">
              {featuredLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="text-blue-500 hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Asking a Question */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Ask a Question</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="text-gray-500"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;
