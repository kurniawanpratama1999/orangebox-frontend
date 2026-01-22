import { UiFooter } from "@/components/UiFooter";
import { UiHeader } from "@/components/UiHeader";
import { Outlet } from "react-router";
export const AudienceLayout = () => {
  return (
    <>
      <UiHeader />
      <main className="max-w-dvw overflow-hidden bg-neutral-300">
        <Outlet />
      </main>
      <UiFooter />
    </>
  );
};
