import { useState } from "react";
import whiteFalconIcon from "../assets/white-falcon-96.png";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [menu, setMenu] = useState(false); // false = NavBar Menu Is Colsed.
  const [dropDown, setDropdown] = useState(false); // false = Dropdown Menu Is Closed.

  return (
    <div className="fixed z-50 w-full backdrop-blur-lg border-b border-slate-800 overflow-hidden md:overflow-visible">
      <div className="container pt-2 md:py-3 flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="flex flex-row-reverse items-center justify-between md:justify-center w-full md:w-fit">
          <div className="flex flex-row-reverse items-center justify-center">
            <img
              className="w-[32px] sm:w-[39px]"
              src={whiteFalconIcon}
              alt="NavBar Icon"
            />
            <h1 className="text-base sm:text-xl textGlow">CST</h1>
          </div>
          <div>
            <i
              onClick={() => setMenu(!menu)}
              className={`cursor-pointer p-1 bx ${
                menu ? "bx-x" : "bx-menu"
              } md:hidden text-xl sm:text-2xl`}
            ></i>
          </div>
        </div>

        <ul
          className={`z-20 flex flex-col md:flex-row-reverse items-center text-xs sm:text-base ${
            menu ? "open pt-8 md:pt-0 autoHeight" : "close"
          }`}
        >
          <li>
            <NavLink
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                isActive
                  ? "button px-3 py-2 md:mr-2 mb-2 md:mb-0 active"
                  : "button px-3 py-2 md:mr-2 mb-2 md:mb-0"
              }
              to="/"
            >
              الصفحة الرئيسية
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={() => setDropdown(!dropDown)}
              className={`mx-auto w-fit block px-2.5 py-2 rounded-md dropdown-main-button ${dropDown ? 'rounded-b-none' : '' }`}
            >
              المواد الدراسية<i className={`bx bx-chevron-down mr-2 transition-all duration-300 ${dropDown ? 'rotate-arrow-top':''}`}></i>
            </button>
            <ul
              className={`text-center dropdown md:absolute transition-all duration-500 overflow-hidden dropdownMenu-close ${
                dropDown ? "dropdownMenu-open" : ""
              }`}
            >
              <li>
                <NavLink
                  onClick={() => {setMenu(false); setDropdown(false)}}
                  title="المرحلة الأولى"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-3 py-2 mt-2 mb-2 md:mb-0 active"
                      : "dropdown-button block border-[#d3d3d33d] md:border-b-2 px-3 py-2 mb-2 md:mb-0"
                  }
                  to="/subjects-stage-one"
                >
                  المرحلة الأولى
                </NavLink>
                <NavLink
                  onClick={() => {setMenu(false); setDropdown(false)}}
                  title="المرحلة الثانية"
                  className={({ isActive }) =>
                    isActive
                      ? "disabled-link block px-3 py-2 mt-2 mb-2 md:mb-0 active"
                      : "disabled-link dropdown-button block border-[#d3d3d33d] md:border-b-2 px-3 py-2 mb-2 md:mb-0"
                  }
                  to="/subjects-stage-tow"
                >
                  المرحلة الثانية
                </NavLink>
                <NavLink
                  onClick={() => {setMenu(false); setDropdown(false)}}
                  title="المرحلة الثالثة"
                  className={({ isActive }) =>
                    isActive
                      ? "disabled-link block px-3 py-2 mt-2 mb-2 md:mb-0 active"
                      : "disabled-link dropdown-button block border-[#d3d3d33d] md:border-b-2 px-3 py-2 mb-2 md:mb-0"
                  }
                  to="/subjects-stage-three"
                >
                  المرحلة الثاثة
                </NavLink>
                <NavLink
                  onClick={() => {setMenu(false); setDropdown(false)}}
                  title="المرحلة الرابعة"
                  className={({ isActive }) =>
                    isActive
                      ? "disabled-link block px-3 py-2 mt-2 mb-2 md:mb-0 active"
                      : "disabled-link dropdown-button block px-3 py-2 mb-2 md:mb-0"
                  }
                  to="/subjects-stage-four"
                >
                  المرحلة الرابعة
                </NavLink>
              </li>
            </ul>
            </li>

              <li>
            <NavLink
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                isActive
                  ? "button px-3 py-2 mt-2 md:mt-0 mb-4 md:mb-0 md:ml-2 active"
                  : "button px-3 py-2 mt-2 md:mt-0 mb-4 md:mb-0 md:ml-2"
              }
              to="/about"
            >
              حول
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
