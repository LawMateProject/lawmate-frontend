import { useRouter } from "next/router";
import React from "react";

function FullDescription() {
  const router = useRouter();
  const { id } = router.query; // Getting dynamic id from the URL

  // Ensure id is available before rendering content
  if (!id) {
    return <div>Loading...</div>; // Handle the case where id is not yet available
  }

  // For simplicity, using a hardcoded list of posts or fetch them from an API
  const posts = [
    {
      id: "1",
      username: "Anonymous",
      time: "5 min ago",
      title:
        "I’m thinking about filing for divorce but am unsure about my rights regarding child custody. What’s the typical process in Sri Lanka?",
      body: "Full description of the post goes here.",
      tags: ["Family Law", "Divorce"],
      views: 125,
      comments: 15,
      likes: 155,
      replies: [
        {
          id: 1,
          username: "Lawyer123",
          body: "This is a reply to the question.",
        },
        {
          id: 2,
          username: "LegalExpert",
          body: "Another reply to the question.",
        },
      ],
    },
    {
      id: "2",
      username: "Linuxoid",
      time: "25 min ago",
      title: "Post 2",
      body: "Post 2 full description goes here.",
      tags: ["Criminal Law", "Misdemeanors"],
      views: 200,
      comments: 10,
      likes: 50,
      replies: [],
    },
  ];

  // Find the post by its ID
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div className="p-5">Post not found.</div>;
  }

  return (
    <div className="p-5 bg-gray-50">
      <div className="bg-white p-4 shadow rounded-md">
        <h1 className="text-2xl font-bold">{post.title || "No Title"}</h1>
        <p className="text-gray-600 mt-2">{post.body}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-white p-4 shadow rounded-md">
        <h2 className="text-lg font-bold">Replies</h2>
        {post.replies.length > 0 ? (
          post.replies.map((reply) => (
            <div key={reply.id} className="mt-3 border-t pt-3">
              <h3 className="font-medium text-gray-800">{reply.username}</h3>
              <p className="text-gray-600">{reply.body}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-2">No replies yet.</p>
        )}
      </div>
    </div>
  );
}

export default FullDescription;
