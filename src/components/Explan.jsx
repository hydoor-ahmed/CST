import ExplanBox from "./ExplanBox";
import { expData } from "../Explan-Data";
import { Link } from "react-router-dom";

const Explan = () => {
  const style = {
    height: "calc(100vh - 154px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="pt-[100px]" style={style}>
      <h1 className="text-7xl font-extrabold">
        ..Comming Soon
        <Link
          to="/"
          className="button text-base w-fit px-4 py-2 font-normal mx-auto mt-6"
        >
          الصفحة الرئيسية
        </Link>
      </h1>
    </div>
  );
};
//  container grid grid-cols-5 gap-y-8 gap-x-4
// expData.length > 0 ? (
//   expData.map((data) => {
//     return (
//       <ExplanBox key={data.id} img={data.img} text={data.text} />
//     )
//   })
// ) : <h1>DataBase Is Empty.!</h1>
export default Explan;
