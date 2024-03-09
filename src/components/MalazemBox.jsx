import { Link } from "react-router-dom";

const MalazemBox = ({ img, title, download, pageLink, linkTitle }) => {
  return (
    <div className="overflow-hidden rounded-xl malazem-box flex flex-row-reverse justify-between items-center max-w-[500px] w-[500px] max-h-[230px] h-[230px]">
      <div className="overflow-hidden max-w-1/2 w-1/2 h-full">
        <img loading="lazy" className="w-full h-full object-cover" src={img} alt="Box Image" />
      </div>

      <div className="w-1/2">
        <h1 className="px-2 text-[15px]">{title}</h1>

        <div className="flex justify-evenly items-center mt-2">
          <Link
            className="block mx-auto w-fit mt-2 glow-on-hover px-3 py-2 rounded-md text-base"
            to={pageLink}
          >
            {linkTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MalazemBox;
