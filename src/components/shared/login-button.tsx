import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

export function LoginButton() {
  return (
    <Button asChild className="bg-[#3bc43f] hover:bg-[#3bc43f]">
      <Link href="/login">Login</Link>
    </Button>
  );
}
