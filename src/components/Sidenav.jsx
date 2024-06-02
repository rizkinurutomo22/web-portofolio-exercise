import React from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

function Sidenav() {
  const [nav, setNav] = React.useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className=" fixed top-4 right-4 z-[99] md:hidden "
      />
      {nav ? (
        <div
          onClick={handleNav}
          className=" fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20"
        >
          <a
            onClick={handleNav}
            href="#main"
            className=" w-[40%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <AiOutlineHome size={20} />
            <span className=" pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className=" w-[40%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <MdWorkOutline size={20} />
            <span className=" pl-4">Work</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkOutline size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
