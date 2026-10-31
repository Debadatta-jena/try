import Hero from "@/components/sections/Hero";
import FamilyStory from "@/components/sections/FamilyStory";
import FamilyHighlights from "@/components/sections/FamilyHighlights";
import MemoryShowcase from "@/components/sections/MemoryShowcase";
import FamilyTreePreview from "@/components/sections/FamilyTreePreview";
import TimelinePreview from "@/components/sections/TimelinePreview";
import SceneSection from "@/components/sections/SceneSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FamilyStory />
      <FamilyHighlights />
      <SceneSection />
      <MemoryShowcase />
      <FamilyTreePreview />
      <TimelinePreview />
    </div>
  );
}
