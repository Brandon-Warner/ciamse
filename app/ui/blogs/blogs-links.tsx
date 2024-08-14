"use client";

import {
  HomeIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const blogLinksArray = [

    //Insert Query to Mongp
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
    { name: "TestRoute1", href: "/", icon: HomeIcon, description: "Random Text"},
];

export default function blogLinks() {
  const pathname = usePathname();
  return (
    <>
      {blogLinksArray.map((link) => {
        return (
          
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-col h-[300px] w-screen grow items-start justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-row md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 md:text-2xl text-left">
                {link.name}
              </h2>  
              <div className="flex flex-row w-full gap-2">
                  <div className="flex h-[200px] w-[200px] items-center gap-2 p-4 rounded-md border border-gray-300 bg-white shadow-md">
                  </div>
                <div className="flex-1 p-4 bg-gray-100 rounded-md border border-gray-300 shadow-md w-screen">
                  {link.description}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
