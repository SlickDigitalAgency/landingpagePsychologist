import React from 'react';
import Navbar from '../../components/common/navbar/Navbar';
import Hero from '../../components/sections/Hero';
import VideoIntro from '../../components/sections/VideoIntro';
import Services from '../../components/sections/Services';
import About from '../../components/sections/About';
import SuccessStories from '../../components/sections/SuccessStories';
import Blog from '../../components/sections/Blog';
import Testimonials from '../../components/sections/Testimonials';
import Quiz from '../../components/sections/Quiz/Quiz';
import Booking from '../../components/sections/Booking/Booking';
import Resources from '../../components/sections/Resources/Resources';
import Footer from '../../components/common/footer/Footer';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <VideoIntro />
      <Services />
      <About />
      <SuccessStories />
      <Blog />
      <Testimonials />
      <Quiz />
      <Booking />
      <Resources />
      <Footer />
    </div>
  );
};

export default Home;