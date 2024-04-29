import aboutMeProgrammer from "../assets/aboutMe-programmer.webp";
import technologyImage from "../assets/aboutPage-technology.png";
import experience from "../assets/aboutPage-experience.png";

const AboutMe = () => {
  return (
    <div className="pt-[40px] container">
      <div className="flex flex-col xs:flex-row justify-evenly items-center landing">
        <img
          className="w-1/2 xs:w-[35%] mb-4 xs:mb-0 "
          src={aboutMeProgrammer}
          alt="Programmer Image"
        />
        <h1 className="text-base md:text-2xl lg:text-3xl text-left xs:w-[45%]">
          ,Hello
          <br /> My Name Is Haidar Ahmed, Here Is Some Information
          About Me
        </h1>
      </div>

      <div className="w-full text-center">
        <i className="bx bx-chevron-down bx-tada text-3xl"></i>
      </div>

      <div className="text-center border-blue-700 border-b-4 w-fit mx-auto pb-2 mt-[100px] mb-[70px]  ">
        <h1 className="md:text-lg">مرحباً اليك بعض المعلومات عني</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="md:text-lg">
            مبرمج تطبيقات ويب متحمس يمتلك خبرة في تطوير وتصميم تطبيقات الويب
            باستخدام HTML، CSS، JavaScript, React.js, Tailwindcss. مهتم بالتقنية
            والحواسيب، وأسعى دائمًا لتعلم أحدث التقنيات واستخدامها لبناء تطبيقات
            فعالة ومبتكرة.
          </h1>
        </div>

        <img
          className="w-[70%] md:w-1/3"
          src={technologyImage}
          alt="Tecnology Image"
        />
      </div>

      <div className="text-center border-blue-700 border-b-4 w-fit mx-auto pb-2 mt-[100px] mb-[70px]  ">
        <h1 className="md:text-lg">الخبرة العلمية</h1>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-evenly items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="md:text-lg">
            مبرمج تطبيقات ويب مستقل (2020 - 2024)
            <br />
            تطوير وتصميم تطبيقات الويب القائمة على HTML، CSS، JavaScript,
            React.js, Tailwindcss. تحسين تجربة المستخدم واجهات المستخدم لتطبيقات
            الويب. التعامل مع APIs والتكامل معها لإضافة ميزات جديدة إلى
            التطبيقات.
          </h1>
        </div>

        <img
          className="w-[70%] md:w-1/3"
          src={experience}
          alt="Experience Image"
        />
      </div>

      <div className="text-center border-blue-700 border-b-4 w-fit mx-auto pb-2 mt-[100px] mb-[70px]  ">
        <h1 className="md:text-lg">المهارات</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="md:text-lg">
            مبرمج تطبيقات ويب مستقل (2020 - 2024)
            <br />
            تطوير وتصميم تطبيقات الويب القائمة على HTML، CSS، JavaScript,
            React.js, Tailwindcss. تحسين تجربة المستخدم واجهات المستخدم لتطبيقات
            الويب. التعامل مع APIs والتكامل معها لإضافة ميزات جديدة إلى
            التطبيقات.
          </h1>
        </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center w-full md:w-1/3">
        <div className="skills-progress text-left">

          <div className="bg-slate-700 rounded-md"><span className="rounded-md bg-red-700 w-[95%]"><h1>HTML</h1>
          <h1>95%</h1></span></div>
          <div className="bg-slate-700 rounded-md"><span className="rounded-md bg-blue-700 w-[90%]"><h1>CSS</h1>
          <h1>90%</h1></span></div>
          <div className="bg-slate-700 rounded-md"><span className="rounded-md bg-yellow-500 w-[60%]"><h1>JavaScript</h1>
          <h1>60%</h1></span></div>
          <div className="bg-slate-700 rounded-md"><span className="rounded-md bg-sky-500 w-[70%]"><h1>React</h1>
          <h1>70%</h1></span></div>
          <div className="bg-slate-700 rounded-md"><span className="rounded-md bg-emerald-500 w-[80%]"><h1>Tailwindcss</h1>
          <h1>80%</h1></span></div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default AboutMe;
