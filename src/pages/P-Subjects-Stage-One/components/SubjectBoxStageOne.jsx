import { Link } from "react-router-dom";

const MalazemBox = ({ img, title, pageLink, linkTitle }) => {
  return (
    <div
      className="overflow-hidden rounded-xl malazem-box flex flex-col sm:flex-row-reverse mx-auto sm:mx-0 sm:justify-between items-center sm:max-w-[500px] sm:w-[500px] sm:max-h-[230px] sm:h-[230px]">
      <div className="overflow-hidden sm:max-w-1/2 sm:w-1/2 sm:h-full">
        <img
          loading="lazy"
          className="sm:w-full sm:h-full object-cover"
          src={img}
          alt="Box Image"
        />
      </div>
      <div className="sm:w-1/2">
        <div className="flex justify-evenly items-center mb-2">
          <Link
            className="block mx-auto w-fit mb-2 sm:mb-0 mt-4 sm:mt-0 glow-on-hover px-3 py-2 rounded-md text-base"
            to={pageLink}
          >
            {linkTitle}
          </Link>
        </div>
        <h1 className="px-2 text-[15px] py-2 sm:py-0">{title}</h1>

      </div>

    </div>
  );
};

export default MalazemBox;
