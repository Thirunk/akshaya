"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("category") ?? "all";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All designs
      </Button>
      <Button
        filter="allover"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Allover Blouses
      </Button>
      <Button
        filter="neck"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Blouse Necks
      </Button>

      <Button
        filter="boat"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Boat Necks
      </Button>
      <Button
        filter="mirror"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Mirror Designs
      </Button>
      <Button
        filter="kids"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Kids Designs
      </Button>
      <Button
        filter="kutch"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Kutch Work
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
