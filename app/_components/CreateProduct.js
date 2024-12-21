"use client";
import Image from "next/image";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { createProduct, uploadFile } from "../_lib/actions";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
function CreateProduct() {
  return (
    <form
      action={createProduct}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>ProductName</label>
        <input
          name="name"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Category</label>
        <div className="grid grid-cols-1 focus-within:relative">
          <select
            id="category"
            name="category"
            autoComplete="category-name"
            aria-label="Category"
            className="col-start-1 row-start-1 w-full appearance-none rounded-t-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="allover">Allover Blouses</option>
            <option value="necks">Blouse Necks</option>
            <option value="boat">Boat Necks</option>
            <option value="mirror">Mirror Designs</option>
            <option value="kids">Kids Designs</option>
            <option value="kutch">Kutch Work</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label>Upload Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label>Price</label>
        <input
          name="price"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label>Discount</label>
        <input
          name="discount"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label>Description</label>
        <input
          name="description"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Product"}
    </button>
  );
}
export default CreateProduct;
