import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import ProductList from "@/app/_components/ProductList";
import Filter from "../_components/Filter";

export const revalidate = 3600;
export const metadata = {
  title: "Products",
};

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Designs</h1>
      <p className="text-primary-200 text-lg mb-10">
        Excellent designs for all
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />}>
        <ProductList filter={filter} />
      </Suspense>
    </div>
  );
}
