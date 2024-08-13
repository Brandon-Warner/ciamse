import SideNav from "@/app/ui/dashboard/sidenav";
import BlogNav from "../ui/blogs/blognav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
        <div>
              <div className="flex h-[120px] w-screen items-center gap-2 p-4 rounded-md bg-white shadow-md">
                  <h1 className="text-3xl font-bold">Header Title</h1>
              </div>
        <BlogNav />
        </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}