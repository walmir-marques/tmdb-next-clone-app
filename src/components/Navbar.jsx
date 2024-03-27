import { Suspense } from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <Suspense>
        <NavbarItem title="Em Alta" param="fetchTrending" />
        <NavbarItem title="Melhores Avaliados" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}

export default Navbar;
