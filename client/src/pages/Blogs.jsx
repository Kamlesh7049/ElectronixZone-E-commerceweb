import React from "react";
import "./Blogs.css";

const Blogs = () => {
  // Blog data array
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Smart Online Shopping",
      content:
        "Online shopping has become a game-changer in today’s world. From setting budgets to finding the best deals, here are 5 essential tips to enhance your shopping experience.",
      link: "/blog/smart-online-shopping",
      image: "https://via.placeholder.com/300", // Replace with your image URLs
    },
    {
      id: 2,
      title: "Top 10 Must-Have Gadgets for 2025",
      content:
        "Gadgets make our lives easier. Discover the top 10 must-have gadgets for 2025, from smartwatches to VR headsets.",
      link: "/blog/must-have-gadgets",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "The Rise of Sustainable Shopping",
      content:
        "Sustainability is shaping the future of e-commerce. Learn how eco-friendly products and practices are transforming online shopping.",
      link: "/blog/sustainable-shopping",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Latest Blogs</h1>
      <div className="blogs-grid">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-content">{blog.content}</p>
            <a href={blog.link} className="blog-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
