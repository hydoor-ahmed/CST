import { useState } from "react";
import whiteFalconIcon from "../assets/white-falcon-96.png";
import { Link } from "react-router-dom";
const Nav = () => {
  const [menu, setMenu] = useState(false); // false = Menu Is Colsed.
  return (
    <div className="fixed w-full backdrop-blur-lg border-b border-slate-800 z-50 overflow-hidden">
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
          className={`flex flex-col md:flex-row-reverse items-center text-xs sm:text-base ${
            menu ? "open pt-8 md:pt-0" : "close"
          }`}
        >
          <li>
            <Link
              onClick={() => setMenu(false)}
              className="button px-3 py-2 md:mr-2 mb-2 md:mb-0"
              to="/"
            >
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              title="ملازم قسم الامن السيبراني"
              className="button px-3 py-2 md:mr-2 mb-2 md:mb-0"
              to="/malazem"
            >
              الملازم
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              title="شروحات حول الامن السيبراني"
              className="button px-3 py-2 md:mr-2 mb-2 md:mb-0"
              to="/explan"
            >
              شروحات
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
