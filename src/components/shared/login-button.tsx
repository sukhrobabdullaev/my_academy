"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";

export function LoginButton() {
  const auth = useAuth();

  return (
    <>
      {auth.userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button asChild className="bg-[#3bc43f] hover:bg-[#3bc43f]">
          <Link href="/sign-in">Kirish</Link>
        </Button>
      )}
    </>
  );
}
