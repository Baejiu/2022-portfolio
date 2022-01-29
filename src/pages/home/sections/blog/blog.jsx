import React from "react";
import { useEffect } from "react";

const Blog = ({ blogService }) => {
  useEffect(() => {
    blogService.getBlogs().then(console.log).catch(console.error);
  }, []);
  return (
    <>
      <h2>hi</h2>
    </>
  );
};

export default Blog;
