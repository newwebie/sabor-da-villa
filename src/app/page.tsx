import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MenuHighlights from "../components/MenuHighlights";
import PhotoGallery from "../components/PhotoGallery";
import TestimonialCards from "../components/TestimonialCards";
import HoursLocation from "../components/HoursLocation";
import DeliverySection from "../components/DeliverySection";
import SmartForm from "../components/SmartForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuHighlights />
      <PhotoGallery />
      <TestimonialCards />
      <HoursLocation />
      <DeliverySection />
      <SmartForm />
    </>
  );
}
