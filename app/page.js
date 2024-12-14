import Image from "next/image";
import bg from "@/public/bg.jpg";

export default function Page() {
  return (
    <main className="mt-24">
      {/* <Image fill className="object-cover" src={bg} alt="Explore new designs" /> */}

      <div className="relative z-10 text-center ">
        <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Akshaya Thread World.
        </h1>
        <a
          href="/products"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Embroidery designs
        </a>
      </div>
    </main>
  );
}
