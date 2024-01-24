import Image from "next/image";
import Link from "next/link";

// import ReactPlayer from "react-player";

const Courses = () => {
  let videosrc = "/videos/lesson2.mp4";
  return (
    <div className="lg:ml-64 md:ml-20 sm:ml-24">
      {/* <ReactPlayer
        width="500px"
        height="400px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" /> */}
      <h2>Kurslar</h2>
      <div className="flex items-center gap-3 flex-wrap">
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
        <Link
          href="course/react"
          className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center   justify-center"
        >
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
          />
          <h3 className="font-bold text-md">ReactJS</h3>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
