import React from 'react';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import Challenge from '@/components/sections/Challenge';
import Workflow from '@/components/sections/Workflow';
import WeeklyDelivery from '@/components/sections/WeeklyDelivery';
import LiveExample from '@/components/sections/LiveExample';
import WhyVideo from '@/components/sections/WhyVideo';
import Benefits from '@/components/sections/Benefits';
import Pricing from '@/components/sections/Pricing';
import Collaboration from '@/components/sections/Collaboration';
import WhyUs from '@/components/sections/WhyUs';
import ReadyToBig from '@/components/sections/ReadyToBig';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

const LandingPage = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Challenge />
        <Workflow />
        <WeeklyDelivery />
        <LiveExample />
        <WhyVideo />
        <Benefits />
        <Pricing />
        <Collaboration />
        <WhyUs />
        <ReadyToBig />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;