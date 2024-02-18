import SideNav from "@/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative -z-2 min-h-screen min-w-screen bg-white dark:bg-[--background] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,255,0.3),rgba(255,255,255,0))]">
        <div className="grid grid-cols-[224px,_1fr] space-x-4 p-4 min-h-screen">
          <SideNav />
          <div className="p-4 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-10 border-4 border-blue-200 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
