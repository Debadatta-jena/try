import Link from "next/link";
import { Heart } from "lucide-react";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/10 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 gradient-text">{SITE_NAME}</h3>
            <p className="text-white/70 text-sm">
              Preserving our family memories for generations to come.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Gallery
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-white/70 text-sm mt-2 md:mt-0 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 fill-current" /> for family
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
