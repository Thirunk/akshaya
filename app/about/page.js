import Image from "next/image";

import image1 from "@/public/about1.jpeg";

import image2 from "@/public/about2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Akshaya Thread World
        </h1>

        <div className="space-y-8">
          <p>We will do embroidery designs for everyone.</p>
          <p>We have best embroidery designs for kids.</p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="col-span-2">
        <Image src={image2} alt="Family that manages The Wild Oasis" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Customized designs
        </h1>

        <div className="space-y-8">
          <p>We will do customised designs</p>

          <div>
            <a
              href="/products"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our Designs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
