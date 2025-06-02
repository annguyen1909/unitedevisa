import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import TopDestinations from "./components/TopDestinations";
import VisaTypes from "./components/VisaTypes";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <TopDestinations/>
      <VisaTypes/>
      <Steps/>
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
