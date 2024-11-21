import Sidebar from "@/components/sidebar";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen ">
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen lg:ml-[15%] w-full shadow">{children}</div>
      </div>
    </div>
  );
}
