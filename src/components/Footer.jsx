import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#94a3b81a] text-center mt-12 textGlow">
      Made by Haidar Ahmed ( error⁴⁰⁴ )
      <br />
      <Link to="/about" className="underline underline-offset-4">About Me</Link>
    </div>
  );
};

export default Footer;
