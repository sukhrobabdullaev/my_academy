"use client";
import Link from "next/link";
import { LoginButton } from "./login-button";
import { ModeToggle } from "./theme";
import { League_Spartan } from "next/font/google";
import { Contact } from "./contact";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useAppContext } from "@/context";
import { SidebarCloseIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const league_Spartan = League_Spartan({ subsets: ["latin"] });

const Navbar = () => {
  const { isShow, setIsShow } = useAppContext();

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-zinc-50 dark:bg-zinc-900  border-b p-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isShow ? (
              <HamburgerMenuIcon
                className="w-5 h-5 sm:hidden block cursor-pointer"
                onClick={handleShow}
              />
            ) : (
              <SidebarCloseIcon
                className="w-5 h-5 sm:hidden block cursor-pointer"
                onClick={handleShow}
              />
            )}

            <Link href="/" className={league_Spartan.className}>
              academy.
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Contact />
            <ModeToggle />
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
