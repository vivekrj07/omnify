import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <Section />
    </main>
  );
}
