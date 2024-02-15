import SideNav from "@/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen lg:flex lg:flex-row">
      <div className="lg:w-56 lg:h-screen w-full h-20">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-gray-100 dark:bg-slate-600 lg:p-12 ">
        {children}
      </div>
    </div>
  );
}
