import MalazemBox from "./MalazemBox";
import programmingImg from "../assets/malazem/programming.jpg";
import cyberscurity from "../assets/malazem/cyberscurity.jpg";
import computerSkills from "../assets/malazem/cmputer-skills.jpg";
import math from "../assets/malazem/math.jpg";
import physics from "../assets/malazem/physics.jpg";

const Malazem = () => {
  return (
    <div className="pt-[100px] container flex justify-evenly items-center flex-wrap gap-y-9">
      <MalazemBox
        img={programmingImg}
        title="البرمجة المهيكلة هي نهج لتطوير البرمجيات يهدف إلى تحسين قابلية فهم الكود، تسهيل التصحيح، وتسريع عملية التطوير من خلال تقسيم البرنامج إلى وحدات أو كتل صغيرة ومنفصلة."
        pageLink="/structred-programming"
        linkTitle="Structred Programming"
      />
      <MalazemBox
        img={cyberscurity}
        title="الأمن السيبراني هو المجال الذي يهتم بحماية أنظمة المعلومات، والشبكات، والبرمجيات، والبيانات من التهديدات الإلكترونية والهجمات السيبرانية."
        pageLink="/cyberscurity"
        linkTitle="Cyberscurity"
      />
      <MalazemBox
        img={computerSkills}
        title="مهارات الحاسوب هي مجموعة المعرفة والمهارات التقنية التي يحتاجها الفرد للعمل بفعالية مع التكنولوجيا الحاسوبية."
        pageLink="/computer-skills"
        linkTitle="Computer Skills"
      />
      <MalazemBox
        img={math}
        title="الرياضيات هي فرع من العلوم يدرس الأعداد والكميات والتناظر والتنسيق والفرضيات والتكافؤ والتبادل. تشمل مجالات الرياضيات مجموعة متنوعة من المواضيع، بما في ذلك الجبر، والهندسة، والتحليل، والاحتمالات"
        pageLink="/math"
        linkTitle="Mathmatics"
      />
      <MalazemBox
        img={physics}
        title="الدوائر الكهربائية هي تركيبات من مكونات كهربائية متصلة ببعضها البعض بواسطة موصلات كهربائية لتشكيل مسار لتدفق التيار الكهربائي."
        pageLink="/electric-circuit"
        linkTitle="Electric Circuit"
      />
    </div>
  );
};

export default Malazem;
