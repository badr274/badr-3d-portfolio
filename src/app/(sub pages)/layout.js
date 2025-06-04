import HomeBtn from "@/src/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 container mx-auto px-5 font-inter">
      <HomeBtn />
      {children}
    </main>
  );
}
