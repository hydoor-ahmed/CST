const HaackComp = ({ img, explan, link, color, linkTitle, title }) => {
  return (
    <div className="mt-[100px]" d data-aos="zoom-out">
      <div className="px-6 border border-slate-800 hackSec-shadow rounded-xl py-12 flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <div className="w-[100%] sm:max-w-[300px] sm:w-[400px] mb-6 lg:mb-0 lg:border-slate-800 lg:border-r lg:pr-10">
          <img className="mx-auto" src={img} alt="Htb Logo" />
        </div>

        <div className="text-right">
          <h1 className="mb-4 border-b-2 border-blue-700 w-fit mx-auto lg:mx-0 lg:ml-auto">
            {title}
          </h1>
          <p className="md:w-[480px] text-sm lg:text-md text-right">
            {explan}
            <br />
            <a className={`${color}`} href={link}>
              {linkTitle}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HaackComp;
