"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen fixed top-0 right-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute bg-black/50 inset-0"
        onClick={() => router.back()}
      ></div>
      <ChevronLeftIcon
        className="flex items-center justify-center text-[#3bc43f] cursor-pointer w-6 h-6 font-bold transition-transform transform hover:translate-x-[-4px]"
        onClick={() => router.back()}
      />
      <section className="h-screen w-full flex flex-col justify-center items-center relative">
        <h1 className="text-9xl font-extrabold text-[#3bc43f] tracking-widest">
          404
        </h1>
        <div className="bg-[#3bc43f] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link href={'/'}>Return to Home</Link>
      </section>
    </div>
  );
};

export default NotFound;
