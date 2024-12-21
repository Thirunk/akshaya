import CreateProduct from "@/app/_components/CreateProduct";
import UploadFile from "@/app/_components/UploadFile";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Product",
};
export default function Page() {
  // CHANGE
  //const session = await auth();

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Create a Product
      </h2>

      {/* <UploadFile></UploadFile> */}
      <CreateProduct></CreateProduct>
    </div>
  );
}
