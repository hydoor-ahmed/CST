import HackComp from "./HaackComp";
import htb from "../assets/logo-htb.svg";
import cybrary from "../assets/cybrary-logo.svg";
import tryhackme from "../assets/tryhackme_logo_icon_249349.png";
import portSwigger from "../assets/portswigger-logo-svg.png";
const HackingSec = () => {
  return (
    <div className="container mt-16">
      <div className="text-center border-blue-700 border-b-4 w-fit mx-auto pb-2">
        <h1>مواقع للتطبيق العملي على الاختراق</h1>
      </div>
      <HackComp
       data-aos="fade-right"
        title="Hack The Box"
        img={htb}
        color="htb-link-color"
        link="https://www.hackthebox.com/"
        linkTitle="HTB"
        explan="هو منصة عبر الإنترنت تقدم تدريبًا على الأمن السيبراني من خلال تحديات
            واقعية ومحاكاة لسيناريوهات الحياة الفعلية في بيئة آمنة وقانونية.
            تأسست المنصة بهدف توفير طريقة للأفراد لتطوير واختبار مهاراتهم في
            مجال الأمن السيبراني واختبار الاختراق، وهي تستهدف مجموعة واسعة من
            المستخدمين من مبتدئين إلى خبراء"
      />
      <HackComp
        title="Cybrary"
        img={cybrary}
        color="cybrary-link-color"
        link="https://www.cybrary.it/"
        linkTitle="CYBRARY"
        explan="هو موقع ومنصة تعليمية عبر الإنترنت تقدم دورات مجانية ومدفوعة في مجالات تكنولوجيا المعلومات وأمن المعلومات. يهدف إلى توفير فرص التعلم المتاحة للجميع في مجالات الأمن السيبراني وتكنولوجيا المعلومات، سواء كانوا مبتدئين أو محترفين متقدمين"
      />
      <HackComp
        title="TryHackMe"
        img={tryhackme}
        color="tryhackme-link-color"
        link="https://tryhackme.com/"
        linkTitle="TRYHACKME"
        explan=" هو موقع عبر الإنترنت يقدم بيئة تعليمية متخصصة في مجال اختبار الاختراق وأمن المعلومات. يهدف إلى توفير تجربة تعليمية تفاعلية وممتعة للمبتدئين والمحترفين في مجال الأمن السيبراني. يوفر الموقع مجموعة متنوعة من الأنشطة التعليمية بما في ذلك الغرف التعليمية والتحديات الواقعية التي تساعد على تطوير المهارات العملية وفهم عميق لمفاهيم الأمن السيبراني"
      />
      <HackComp
        title="PortSwigger"
        img={portSwigger}
        color="portSwigger-link-color"
        link="https://portswigger.net/"
        linkTitle="PORTSWIGGER"
        explan="هو موقع وشركة تقدم أدوات وموارد لاختبار الأمان واختبار الاختراق، يتميز بتوفير موارد تعليمية وأدوات تساعد على فهم وتعزيز المهارات في مجال اختبار الاختراق واستخدام أدوات الأمان بكفاءة"
      />
    </div>
  );
};

export default HackingSec;
