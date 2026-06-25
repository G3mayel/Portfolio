import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { AboutHero } from "@/components/AboutHero";
import { EducationExperience } from "@/components/EducationExperience";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden flex flex-col pt-1 sm:pt-2">
      <CustomCursor />
      <Navbar />
      <AboutHero />
      <EducationExperience />
      <CapabilitiesSection />
      <ContactSection />
    </main>
  );
}
