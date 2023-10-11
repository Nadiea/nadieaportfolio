import { useState } from "react";
import "/src/index.css";
import { Link } from "react-scroll";

export default function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="    text-fuchsia-400 text-4xl  font-script font-bold ">
            Nadiea.
          </div>

          <div className="hidden md:flex space-x-8  font-Quintessential ">
            <Link
              to="Banner"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="About"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              About
            </Link>
            <Link
              to="Skill"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
             Skill
            </Link>
            <Link
              to="Portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              Services
            </Link>
            
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              Contact
            </Link>
            
          </div>

          <div className="md:hidden">
            <button
              id="menu-toggle"
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center">
            <Link
              to="Banner"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="About"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              About
            </Link>
            <Link
              to="Skill"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
             Skill
            </Link>
            <Link
              to="Portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              Services
            </Link>
            
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-fuchsia-400 hover:text-white"
            >
              Contact
            </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
