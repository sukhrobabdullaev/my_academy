"use client";

import { useAppContext } from "@/context";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";
import {
  ArrowRightEndOnRectangleIcon,
  ChevronLeftIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Loader } from "../ui/loader";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });

const Sidebar = () => {
  const { isShow } = useAppContext();
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };
  return (
    <>
    
        <div className="bg-zinc-50 hidden md:block sm:block dark:bg-zinc-900 p-4 fixed top-14 lg:w-64  left-0 h-screen border-r">
          <ul
            className={`flex md:gap-4 gap-2 items-center justify-center flex-col pt-20 ${ubuntu.className}`}
          >
            <Link
              href={"/"}
              className={`${
                pathname === "/" && "bg-[#3bc43f]"
              } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="hidden lg:block">Bosh sahifa</span>
            </Link>
            <Link
              href={"/courses"}
              className={`${
                pathname === "/courses" && "bg-[#3bc43f]"
              } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
            >
              <ComputerDesktopIcon className="w-6 h-6" />
              <span className="hidden lg:block">Barch kurslar</span>
            </Link>
            <Link
              href={"/articles"}
              className={`${
                pathname === "/articles" && "bg-[#3bc43f]"
              } flex text-lg items-center gap-1 p-3 w-full mx-auto border rounded-md transition-all duration-300 ease-in-out border-[#3bc43f]  hover:border-[#288829]`}
            >
              {/* <CodeBracketSquareIcon className="w-6 h-6"/> */}
              <DocumentTextIcon className="w-6 h-6" />
              <span className="hidden lg:block">Maqolalar</span>
            </Link>
            <Link
              href={"/source_code"}
              className={`${
                pathname === "/source_code" && "bg-[#3bc43f]"
              } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md `}
            >
              <CodeBracketSquareIcon className="w-6 h-6" />
              <span className="hidden lg:block">Kod manbalari</span>
            </Link>

            <Link
              href={"/projects"}
              className={`${
                pathname === "/projects" && "bg-[#3bc43f]"
              } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
            >
              <FolderIcon className="w-6 h-6" />
              <span className="hidden lg:block">Loyihalar</span>
            </Link>
            {isSignedIn && isLoaded && (
              <Link
                href={"/dashboard"}
                className={`${
                  pathname === "/dashboard" && "bg-[#3bc43f]"
                } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
              >
                <DashboardIcon className="w-6 h-6" />
                <span className="hidden lg:block">Dashboard</span>
              </Link>
            )}
          </ul>

          {isSignedIn && isLoaded ? (
            <div
              onClick={() => signOut(handleSignOut)}
              className={`${ubuntu.className} cursor-pointer absolute bottom-20 flex text-lg items-center gap-1 p-2 rounded-md transition-all border duration-500 ease-in-out dark:hover:bg-[#3bc43f]`}
            >
              <span className="hidden lg:block">Chiqish</span>
              <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
            </div>
          ) : (
            <Link
              href="/sign-in"
              className={`${ubuntu.className} absolute bottom-20 flex text-lg items-center gap-1 p-2 rounded-md transition-all border duration-500 ease-in-out dark:hover:bg-[#3bc43f]`}
            >
              <span className="hidden lg:block">Dasturga kirish</span>
              <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
            </Link>
          )}
        </div>
    </>
  );
};

export default Sidebar;
