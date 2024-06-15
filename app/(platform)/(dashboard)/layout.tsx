import NavBar from "./_components/NavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-neutral-100 flex flex-col gap-3">
      <div className="">
        <NavBar />
      </div>
       <main>
       {children}
       </main>
      
    </div>
  );
}
