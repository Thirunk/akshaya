"use server";
import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { writeFile } from "fs/promises";

export async function createProduct(formData) {
  const fl = formData.get("image");
  const name = formData.get("name");
  const category = parseInt(formData.get("category"));
  const price = parseFloat(formData.get("price"));
  const discount = parseFloat(formData.get("discount"));
  const description = formData.get("description");
  //const imageurl = fl.name;
  //const filePath = `./public/file/${fl.name}`;
  // const res = await fs.writeFile(filePath, fl);
  const buffer = Buffer.from(await fl.arrayBuffer());
  let dt = Date.now();
  const imageurl = "/uploads/" + dt + fl.name;
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + dt + fl.name),
      buffer
    );
  } catch (error) {
    console.log("Error occurred ", error);
  }

  const uploadData = {
    name,
    category,
    price,
    discount,
    description,
    imageurl,
  };

  const { data, error } = await supabase.from("products").insert(uploadData);

  if (error) {
    console.error(error);
    throw new Error("product could not be updated");
  }
  revalidatePath("/product");
  console.log(formData);
}
export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged In!");
  console.log(formData);
  const phone = formData.get("phone");
  const address = formData.get("address");
  const city = formData.get("city");
  const pincode = formData.get("pincode");
  const state = formData.get("state");
  const updateData = { phone, address, city, pincode, state };
  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("User could not be updated");
  }
  revalidatePath("/account/profile");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
