import Image from "next/image";
import { LoginButton } from "./login-button";
import { ModeToggle } from "./theme";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/panel_hsat_logo.png"
              alt="test logo"
              width={100}
              height={50}
            />
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
