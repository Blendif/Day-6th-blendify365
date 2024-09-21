import { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    gsap.from('.kinetic-text', {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-white kinetic-text">Welcome to Blendify365</h1>
      <p className="text-lg text-gray-200 mt-4">Your marketplace for e-books, services, and more.</p>
      
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="glass-card p-6 rounded-lg text-center">
          <h2 className="text-3xl font-semibold">E-books & Audiobooks</h2>
          <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full">Browse</button>
        </div>
        <div className="glass-card p-6 rounded-lg text-center">
          <h2 className="text-3xl font-semibold">Freelancing Services</h2>
          <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full">Explore</button>
        </div>
        <div className="glass-card p-6 rounded-lg text-center">
          <h2 className="text-3xl font-semibold">Wallpapers</h2>
          <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full">Download</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
