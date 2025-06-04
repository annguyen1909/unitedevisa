import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import TopDestinations from "./components/TopDestinations";
import VisaTypes from "./components/VisaTypes";
import Steps from "./components/Steps";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Guarantee from "./components/Guarantee";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <TopDestinations />
      <VisaTypes />
      <Steps />
      <Support />
      <Pricing />
      <Guarantee/>
      <Footer />
    </>
  );
}
