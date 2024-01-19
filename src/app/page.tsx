"use client";

import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "500"] });
const Home = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${quicksand.className} ml-64 p-10 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-around rounded-md`}
    >
      <div className="basis-1/2">
        <h1 className="text-[30px] mb-3">
          <span className="text-[#3bc43f] font-bold">Academy</span> - dasturlash
          darslari
        </h1>
        <p>
          Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu
          yerda siz barcha pullik kurslarni bepul o'rganishingiz mumkin.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <Link
            href={"/courses"}
            className={`${
              pathname === "/courses" && "bg-[#3bc43f]"
            } p-3 text-center w-1/4 rounded-md transition-all duration-300 ease-in-out border`}
          >
            Kurslar
          </Link>
          <Link
            href={"/projects"}
            className={`${
              pathname === "/projects" && "bg-[#3bc43f]"
            }  p-3 text-center w-1/4  rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800 bg-[#3bc43f] border`}
          >
            Loyihalar
          </Link>
        </div>
      </div>
      <div className="">
        <Image src={"/js-icon.png"} width={250} height={200} alt="js-icon" />
      </div>
    </div>
  );
};

export default Home;
