import MalazemBox from "./components/SubjectBoxStageOne";
import digital from "/src/assets/malazem/digital.jpg";
import programming from "/src/assets/malazem/programming.jpg";
import HumanRights from "/src/assets/malazem/human-rights.png";
import math from "/src/assets/malazem/math.jpg";
import networks from "/src/assets/malazem/networks.jpg";
import engineeringDrawing from "/src/assets/malazem/engineeringDrawing.jpg";
import arabicLang from "/src/assets/malazem/arabicLang.webp";

const Malazem = () => {
  return (
    <div className="pt-[100px]">
      <h1 className="line pb-2 block mx-auto mb-8 transition-all duration-700 hover:tracking-[4px]">
        المرحلة الأولى  |  الكورس الثاني  |  قسم الأمن السيبراني
      </h1>

      <div className="container grid grid-cols-1 sm:flex justify-evenly items-center flex-wrap gap-y-9">
        <MalazemBox
          img={digital}
          title="مصطلح يشير إلى مبادئ الإلكترونيات الرقمية والأساسيات التقنية التي تحكم عملية التشفير والتفكيك في الأنظمة الرقمية"
          pageLink="/digital-fundamentals"
          linkTitle="Digital Fundamentals"
        />
        <MalazemBox
          img={programming}
          title="البرمجة هي عملية كتابة مجموعة من التعليمات أو الأوامر التي تقوم بتحديد سلوك الحاسوب للقيام بمهمة معينة."
          pageLink="/programming"
          linkTitle="Programming"
        />
        <MalazemBox
          img={HumanRights}
          title="حقوق الإنسان هي الحقوق الأساسية والتي تنص عليها المعايير الدولية لحماية كرامة الإنسان وضمان حياته بكرامة وحرية."
          pageLink="/human-rights"
          linkTitle="Human Rights"
        />
        <MalazemBox
          img={math}
          title="الرياضيات هي فرع من العلوم يدرس الأعداد والكميات والتناظر والتنسيق والفرضيات والتكافؤ والتبادل. تشمل مجالات الرياضيات مجموعة متنوعة من المواضيع، بما في ذلك الجبر، والهندسة، والتحليل، والاحتمالات"
          pageLink="/math"
          linkTitle="Mathmatics"
        />
        <MalazemBox
          img={networks}
          title="الشبكات هي نظم تكنولوجية تمكن الأجهزة المختلفة من التواصل مع بعضها البعض لمشاركة المعلومات والموارد. يمكن أن تكون هذه الأجهزة أجهزة كمبيوتر، هواتف ذكية، طابعات، أجهزة تخزين، أو أي نوع من الأجهزة التي يمكنها التواصل عبر الشبكة."
          pageLink="/networks"
          linkTitle="Networks"
        />
        <MalazemBox
          img={engineeringDrawing}
          title="الرسم الهندسي هو عملية تمثيل الأشكال والأجسام بواسطة خطوط وأشكال هندسية محددة وفقًا لمعايير محددة. يهدف الرسم الهندسي إلى توضيح التصاميم والأبعاد والتفاصيل التقنية للأشياء بشكل دقيق وواضح. "
          pageLink="/engineering-drawing"
          linkTitle="Engineering drawing"
        />
        <MalazemBox
          img={arabicLang}
          title="اللغة العربية هي واحدة من أقدم اللغات في العالم، وهي لغة سامية تستخدم بشكل واسع في الوطن العربي وبعض البلدان الأخرى. "
          pageLink="/arabic-language"
          linkTitle="Arabic Language"
        />
      </div>
    </div>
  );
};

export default Malazem;
