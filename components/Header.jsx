import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="full-container py-10">
        <nav className="space-x-5 flex items-center">
          <Link href="/" className="hover:bg-gray-400 rounded py-1 px-2">
            Home
          </Link>
          <Link href="" className="hover:bg-gray-400 rounded py-1 px-2">
            Blog
          </Link>
          <Link href="/about" className="hover:bg-gray-400 rounded py-1 px-2">
            About
          </Link>
          <div>
            <p className=" rounded-md py-1 px-2 border border-white inline m-1">
              Resume
            </p>
          </div>
        </nav>

        <hr className="mt-4 opacity-20" />
      </header>
    </div>
  );
};

export default Header;
