import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex gap-4 w-full h-screen items-center justify-center bg-black">
      <img alt="logo" src="/logo.png" className="w-[100px] h-[100px]" />
      <div className="flex flex-wrap items-center gap-2">
        <Spinner aria-label="Medium sized spinner example" size="md" />
        <Spinner aria-label="Large spinner example" size="lg" />
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    </div>
  );
}
