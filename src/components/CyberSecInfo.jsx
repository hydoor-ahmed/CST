import cybersecurityImportance from "../assets/cybersecurity-importance.png";
import cybersecurityTargets from "../assets/cybersecurity-targets.png";

const CyberSecInfo = () => {
  return (
    <div className="container">
      <div className="text-center border-blue-700 border-b-4 w-fit mx-auto pb-2 mt-[100px] mb-[70px]  ">
        <h1 className="md:text-lg">معلومات حول قسم الامن السيبراني</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:w-1/2">
          <div className="text-right border-slate-700 border-b-4 w-fit ml-auto pb-2 mb-2">
            <h1 className="md:text-lg">أهمية القسم</h1>
          </div>
					<p className="text-sm md:text-base">في عصر الرقمنة المتسارع، أصبحت الشبكات الإلكترونية جزءاً أساسياً من حياة البشر وأنشطتهم اليومية. من خلال هذه الشبكات، يتم تبادل المعلومات والبيانات بشكل متزايد، مما يجعل أمن هذه البيانات أمراً ضرورياً للغاية. إن قسم الأمن السيبراني يلعب دوراً حيوياً في تأمين هذه الشبكات وحماية البيانات من التهديدات السيبرانية المتزايدة.</p>
        </div>
        <img className="w-[70%] sm:w-1/2 md:w-[40%] lg:w-1/2" src={cybersecurityImportance} alt="Cybersecurity Image" />
      </div>


      <div className="flex flex-col md:flex-row justify-evenly items-center mt-6">
        <div className="md:w-1/2">
          <div className="text-right border-slate-700 border-b-4 w-fit ml-auto pb-2 mb-2">
            <h1 className="md:text-lg">أهداف القسم</h1>
          </div>
					<p className="text-sm md:text-base">في عالم يعتمد بشكل متزايد على التكنولوجيا والإنترنت، أصبح أمن البيانات والمعلومات له أهمية كبيرة للأفراد والشركات والحكومات على حد سواء. يتمثل الهدف الرئيسي لقسم الأمن السيبراني في حماية هذه البيانات والمعلومات من التهديدات السيبرانية المتزايدة.</p>
        </div>
        <img className="w-[70%] sm:w-1/2 md:w-[40%] lg:w-1/2" src={cybersecurityTargets} alt="Cybersecurity Targetes Image" />
      </div>


    </div>
  );
};

export default CyberSecInfo;
