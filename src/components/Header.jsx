import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 p-2 bg-slate-400 w-full">
      <nav className="flex justify-end gap-5">
        <Link to="" className="underline">
          Movies
        </Link>
        <Link to="fav-movies" className="underline">
          Favourite Movies
        </Link>
      </nav>
    </header>
  );
};

export default Header;
