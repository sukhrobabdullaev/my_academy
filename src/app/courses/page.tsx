"use client";
import ReactPlayer from "react-player";

const Courses = () => {
  let videosrc = "/videos/lesson2.mp4";
  return (
    <div className="lg:ml-64 md:ml-20 sm:ml-24">
      <ReactPlayer
        width="500px"
        height="400px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default Courses;
