import { UserButton } from "@clerk/nextjs";
import { CalendarHeart, Home } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-primary p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Home className="h-6 w-6 text-primary-foreground" />
        </Link>
        <Link href="/dates">
          <CalendarHeart className="h-6 w-6 text-primary-foreground" />
        </Link>
      </div>
      <div>
        <p>
          <UserButton afterSignOutUrl="/" />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
