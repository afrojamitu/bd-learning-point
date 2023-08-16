import { lazy, Suspense } from "react";
import HeroSection from "./components/HeroSection.jsx";
const CardSection = lazy(() => import("./components/CardSection.jsx"));
const PCourseSection = lazy(() => import("./components/PCourseSection.jsx"));
const OurServices = lazy(() => import("./components/OurServicesSection.jsx"));
// const OurTeams = lazy(() => import("./components/OurTeamsSection.jsx"));
// const EventSection = lazy(() => import("./components/EventSection.jsx"));
const Contact = lazy(() => import("./components/ContactSection.jsx"));
const FAQSection = lazy(() => import("./components/FAQSection.jsx"));
const CallToAction = lazy(() => import("./components/CallToAction.jsx"));

function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <CardSection />
        <PCourseSection />
        <OurServices />
        {/* <OurTeams /> */}
        {/* <EventSection /> */}
        <Contact />
        <FAQSection />
        <CallToAction />
      </Suspense>
    </>
  );
}

export default Home;
