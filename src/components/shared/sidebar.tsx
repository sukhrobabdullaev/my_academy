"use client";

import {
  ArrowRightEndOnRectangleIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  FolderIcon,
  FolderOpenIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 p-4 fixed top-14 w-64 left-0 h-screen border-r">
      <ul
        className={`flex gap-4 items-center justify-center flex-col pt-20 ${ubuntu.className}`}
      >
        <Link
          href={"/"}
          className={`${
            pathname === "/" && "bg-[#3bc43f]"
          } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-[2000ms] ease-in-out dark:hover:bg-zinc-800`}
        >
          <HomeIcon className="w-6 h-6" />
          Bosh sahifa
        </Link>
        <Link
          href={"/articles"}
          className={`${
            pathname === "/articles" && "bg-[#3bc43f]"
          } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-[2000ms] ease-in-out dark:hover:bg-zinc-800`}
        >
          {/* <CodeBracketSquareIcon className="w-6 h-6"/> */}
          <DocumentTextIcon className="w-6 h-6" />
          Maqolalar
        </Link>
        <Link
          href={"/source_code"}
          className={`${
            pathname === "/source_code" && "bg-[#3bc43f]"
          } flex text-lg items-center gap-1 border p-3 w-full mx-auto border-[#3bc43f] rounded-md hover:border-[#288829]`}
        >
          <CodeBracketSquareIcon className="w-6 h-6" />
          Kod manbalari
        </Link>
        <Link
          href={"/courses"}
          className={`${
            pathname === "/courses" && "bg-[#3bc43f]"
          } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-[2000ms] ease-in-out dark:hover:bg-zinc-800`}
        >
          <ComputerDesktopIcon className="w-6 h-6" />
          Barch kurslar
        </Link>
        <Link
          href={"/projects"}
          className={`${
            pathname === "/projects" && "bg-[#3bc43f]"
          } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-[2000ms] ease-in-out dark:hover:bg-zinc-800`}
        >
          <FolderIcon className="w-6 h-6" />
          Loyihalar
        </Link>
      </ul>
      <Link
        href="/login"
        className={`${ubuntu.className} absolute bottom-20 flex text-lg items-center gap-1 p-2 rounded-md transition-all border duration-500 ease-in-out dark:hover:bg-[#3bc43f]`}
      >
        Dasturga kirish <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Sidebar;
