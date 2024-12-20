import { DocumentIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const { id, name, category, price, discount, description, imageurl } =
    product;

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-1 relative">
        <Image
          fill
          src={imageurl}
          alt={`Product ${name}`}
          className=" object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Design {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <DocumentIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              <span className="font-bold">{description}</span>
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">{price - discount}</span>
                <span className="line-through font-semibold text-primary-600">
                  {price}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">{price}</span>
            )}
            {/* <span className="text-primary-200">/ night</span> */}
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/products/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Product Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
