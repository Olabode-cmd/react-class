import React, { useState, useEffect } from "react";

const FetchDataExample = () => {
  const [posts, setPosts] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    // Fetch data inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        // console.log(data);
        setPosts(data);
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchData();
  }, []);
  //   const six = posts.slice(0,6)
  // yarn create-vite@latest

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>

      <div className="blog">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2 className="title">{post.title}</h2>
            <p className="body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchDataExample;