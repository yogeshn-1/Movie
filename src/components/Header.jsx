import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-20 p-2 w-full text-white font-semibold"
      style={{
        background:
          "radial-gradient( circle farthest-corner at 48.4% 47.5%,  rgba(122,183,255,1) 0%, rgba(21,83,161,1) 90% )",
      }}
    >
      <nav className="flex justify-center gap-5">
        <Link to="" className="underline text-xl xs:text-lg">
          Movies
        </Link>
        <Link to="fav-movies" className="underline text-xl xs:text-lg">
          Favourite Movies
        </Link>
      </nav>
    </header>
  );
};

export default Header;
