import SideBar from "../_components/SideBar";


export default function OrganizationLayout({ children }: { children: React.ReactNode }) {
  return (
       <main  className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-2xl mx-auto">
        <div className="flex space-x-7">
            <div className="w-64  shrink-0 hidden md:block">
                 <SideBar/>
            </div>
            {children}
        </div>
      
       </main>
 
  );
}
