import landing from "../assets/landing.png";

const Landing = () => {
  return (
    <div>
      <div className="landing flex flex-col md:flex-row-reverse justify-evenly items-center pt-[80px] container ">
        <div className="floating-animation">
          <img width="280" src={landing} alt="Landing Image" />
        </div>

        <div className="sm:ml-6 lg:ml-0">
          <h1 className="text-2xl md:text-4xl text-center md:text-left mb-7 mt-3 font-bold">
            CyberScurity Team
          </h1>
          <p className="text-sm md:text-base text-center md:text-left md:w-[500px]">
          الأمن السيبراني هو مجال متخصص يهتم بحماية الأنظمة والشبكات والبرامج من الهجمات الإلكترونية. يشمل ذلك تطبيق مجموعة من التقنيات، والسياسات، والممارسات الأمنية لحماية البيانات من الوصول غير المصرح به أو التلف.
          </p>
        </div>
      </div>
      <i className="bx bx-chevron-down bx-tada text-3xl text-center w-full"></i>
    </div>
  );
};

export default Landing;
