import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Courses = async () => {
  return (
    <div className="lg:ml-64 md:ml-20 sm:ml-24">
      <h2 className="text-[30px] mb-3">Kurslar</h2>
      <div className="flex items-center gap-3 flex-wrap">
        <HoverCard>
          <HoverCardTrigger className="relative">
            <Link
              href="course/react"
              className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center justify-center bg-zinc-50 dark:bg-zinc-900"
            >
              <Image
                src="/courses/react.png"
                alt="react"
                width={150}
                height={150}
              />
              <h3 className="font-bold text-md">ReactJS</h3>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="absolute bottom-2">
            <div className="line-clamp-2 text-sm">
              Hozirda mashhur JavaScript frameworklaridan biri ReactJSni to'liq
              o'rganing. ReactJS darslari to'liq kurs o'zbek tilida. ReactJS
              amaliyot va loyihalar
            </div>
          </HoverCardContent>
        </HoverCard>
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
