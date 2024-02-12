import SideNav from "@/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-56">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-gray-100 dark:bg-gray-600 md:p-12 ">
        {children}
      </div>
    </div>
  );
}
