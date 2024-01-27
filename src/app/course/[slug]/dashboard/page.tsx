import { reactVideos } from "@/data";
import React from "react";

const page = () => {
  
  return (
    <div className="ml-64" suppressHydrationWarning>
      {reactVideos.map((el) => (
        <div key={el.id}>
          <video controls width="100%">
            <source src={`/${el.path}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default page;
