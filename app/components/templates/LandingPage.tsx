import { FullScreenBackgroundVideo } from "~/components/organisms/FullScreenBackgroundVideo";
import { TopNavigation } from "~/components/organisms/TopNavigation";
import { SocialSharing } from "~/components/molecules/SocialSharing";
import { HeroSection } from "~/components/organisms/HeroSection";
import { ScrollDownArrow } from "../molecules/ScrollDownArrow";
import { AboutUs } from "../molecules/AboutUs";
import { SubscribeNewsletter } from "../molecules/SubscribeNewsletter";
import { Footer } from "../organisms/Footer";

import backgroundVideo from "@static/background.mp4";

export function LandingPage() {
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center bg-transparent h-full">
      {/* Background Video */}
      <div className="relative w-full h-full">
        <FullScreenBackgroundVideo
          src={backgroundVideo}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* TopNavigation */}
      <div className="fixed top-0 left-0 right-0 md:left-6 md:right-6 z-30">
        <TopNavigation />
      </div>
      
      <div className="flex flex-col items-center justify-center">
        {/* Social Sharing */}
        <div className="hidden md:flex fixed top-1/2 right-6 transform -translate-y-1/2 z-20">
          <SocialSharing />
        </div>

        {/* Hero Content */}
        <HeroSection />

        {/* ScrollDownArrow */}
        <ScrollDownArrow />
        
        <div className="h-[200px]" />

        {/* AboutUs */}
        <AboutUs />

        {/* SubscribeNewsletter */}
        <SubscribeNewsletter />
        <div className="md:hidden">
          <SocialSharing />
        </div>

        <div className="h-[40px]" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
