import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        src="./src/assets/man-working-with-laptop.png"
        alt="Man Working with Laptop"
        className=" w-full h-screen object-cover object-left"
      />
      <div className="w-full h-screen absolute top-0 left-0  bg-slate-300/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center space-y-2">
          <h1 className="font-roboto md:text-5xl text-4xl ">Hello There!</h1>
          <h2 className="font-roboto md:text-3xl text-2xl ">
            I am Rizki Nur Utomo
          </h2>
          <h3 className="font-roboto">An Aspiring Fullstack Developer</h3>
          <div className="flex space-x-5">
            <FaWhatsapp size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
