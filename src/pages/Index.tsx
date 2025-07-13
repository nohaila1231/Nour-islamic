import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IslamSection from "@/components/IslamSection";
import PrayerTimes from "@/components/PrayerTimes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PrayerTimes />
        <IslamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
