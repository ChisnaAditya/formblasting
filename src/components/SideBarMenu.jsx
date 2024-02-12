import { Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards } from "react-icons/hi";

export default function SideBarMenu() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Items className="bg-white rounded-xl shadow-xl p-5">
        <div className="flex items-center gap-4">
          {/* <img
            href="/"
            src="/logo.png"
            alt="logo"
            className="rounded-full w-[30px]"
          /> */}
          <p className="text-xl font-bold">Kampung Inggris LC</p>
        </div>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiViewBoards}>
            Form Survey
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
