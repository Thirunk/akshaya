import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} width="120" quality={100} alt="Akshaya Thread World" />
      <span className="text-xl font-semibold text-primary-100">
        Akshaya Thread World
      </span>
    </a>
  );
}

export default Logo;
