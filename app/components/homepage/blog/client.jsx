"use client";

import { useMemo } from "react";
import Blog from "./index";

export default function BlogClient({ blogs }) {
  // Randomize blogs on the client only
  const randomizedBlogs = useMemo(() => {
    return blogs.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  }, [blogs]);

  return <Blog blogs={randomizedBlogs} />;
}
