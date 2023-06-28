import Logo from "../../assets/Logo.png";
import { CgMenuGridO } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-1/6 ">
      <div className="w-2/6 h-4/6 relative">
        <img src={Logo} alt="Pokemon Logo" className="h-full" />
      </div>
      <div className="relative w-2/6">
        <div className="absolute h-full w-10 flex justify-center items-center">
          <FiSearch className=" text-slate-400  h-3/6 w-auto" />
        </div>
        <input
          type="search"
          placeholder="Search characters"
          className=" bg-slate-200 h-10 rounded-3xl px-9 w-full focus:outline-none"
        />
      </div>
      <div className="w-2/6 flex justify-end items-center">
        <button className="flex border-2 border-white hover:border-yellow-500 px-5 py-1 rounded-3xl normal-text hover:text-yellow-500">
          <h3 className=" pr-3 ">Menu</h3>
          <CgMenuGridO className=" w-auto h-8 " />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
