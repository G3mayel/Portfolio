import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { WorksSection } from "@/components/WorksSection";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden flex flex-col pt-1 sm:pt-2">
      <CustomCursor />
      <Navbar />
      <WorksSection />
      <div className="mt-auto">
        <ContactSection />
      </div>
    </main>
  );
}
