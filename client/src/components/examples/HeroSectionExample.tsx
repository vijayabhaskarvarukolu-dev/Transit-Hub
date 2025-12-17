import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      onBookClick={() => console.log("Book clicked")}
      onViewServicesClick={() => console.log("View services clicked")}
    />
  );
}
