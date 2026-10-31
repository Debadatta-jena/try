import Hero from "@/components/sections/Hero";
import GalleryPage from "@/app/gallery/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div id="gallery">
        <GalleryPage />
      </div>
    </div>
  );
}
