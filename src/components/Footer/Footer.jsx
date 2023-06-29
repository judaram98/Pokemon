import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="h-1/6 flex justify-end items-center">
      <div className="w-1/5 flex justify-between">
        <button className="flex items-center normal-text hover:text-yellow-500">
          <BiSolidChevronLeft className=" w-auto h-10 " />
          <h3>Prev</h3>
        </button>
        <button className="flex items-center normal-text hover:text-yellow-500">
          <h3>Next</h3>
          <BiSolidChevronRight className=" w-auto h-10 " />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
