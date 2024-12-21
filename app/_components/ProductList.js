import { unstable_noStore as noStore } from "next/cache";
import ProductCard from "@/app/_components/ProductCard";
import { getProducts } from "../_lib/data-service";

async function ProductList({ filter }) {
  //noStore();
  const products = await getProducts();

  if (!products.length) return null;
  let displayedProducts;
  if (filter === "all") displayedProducts = products;
  if (filter === "allover")
    displayedProducts = products.filter(
      (product) => product.category === "allover"
    );
  if (filter === "neck")
    displayedProducts = products.filter(
      (product) => product.category === "neck"
    );
  if (filter === "boat")
    displayedProducts = products.filter(
      (product) => product.category === "boat"
    );
  if (filter === "mirror")
    displayedProducts = products.filter(
      (product) => product.category === "mirror"
    );
  if (filter === "kids")
    displayedProducts = products.filter(
      (product) => product.category == "kids"
    );
  if (filter === "kutch")
    displayedProducts = products.filter(
      (product) => product.category === "kutch"
    );
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
