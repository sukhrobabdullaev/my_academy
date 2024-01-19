import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="min-h-screen fixed top-0 right-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute bg-black/40 inset-0" />
        <SignIn />
    </div>
  );
}
