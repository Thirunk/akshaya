import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "@/app/_components/ProductCard";
import { getCabins } from "../_lib/data-service";

async function ProductList({ filter }) {
  //noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;
  let displayedProducts;
  if (filter === "all") displayedProducts = cabins;
  if (filter === "small")
    displayedProducts = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedProducts = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedProducts = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedProducts.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default ProductList;
