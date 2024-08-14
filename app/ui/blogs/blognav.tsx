import Link from "next/link";
import BlogLinks from "/Users/jeffreyciferno/ciamse/app/ui/blogs/blogs-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function BlogNav() {
  return (
    <div>
      <div className="flex-container">
         <div></div>
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-auto overflow-x-hidden flex h-screen w-screen">
          <BlogLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          </div>
        </div>
    </div>
  );
}