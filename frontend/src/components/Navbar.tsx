import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/buttons";

const Navbar = () => {
    return (
      <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-background backdrop-blur-lg transition-all ">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between ">
            <Link href="/" className="flex z-40 font-semibold">
              <span>EchoDesk</span>
            </Link>
            {/* mobile navbar */}
            <div className="hidden items-center space-x-4 sm:flex">
              <div>
                  <Link href='/signin' className={buttonVariants({
                      variant:'ghost',
                      size:'sm',
                  })} >
                      Sign In
                  </Link>
                  <Link href='/signup' className={buttonVariants({
                      size:'sm',
                  })}>
                      Get Started
  
                  </Link>
              </div>
  
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    );
  };
  
  export default Navbar;