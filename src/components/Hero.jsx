import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About us', href: '#Aboutus' },
  { name: 'Services', href: '#services' },
  { name: 'Contact us', href: '#contactus' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = ['/freight1.jpg', '/freight2.jpg', '/freight3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-3 py-2 sm:px-6 lg:px-8 text-[#35708a] bg-slate-300 shadow-md">
          <div className="flex items-center">
          <img className="h-20 w-18 sm:h-14 sm:w-14 mr-1" src="/nicobar.png" alt="Nicobar Logo" />

            <span className="text-xl sm:text-2xl font-bold text-[#174f67] tracking-wide">
              NICOBAR MARITIME
            </span>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-800"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-bold text-gray-900 hover:text-white hover:underline transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-between items-center">
              <img className="h-10 w-auto" src="/nicobar.png" alt="Nicobar" />
              <button
                type="button"
                className="p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Slide Background */}
        <div className="relative w-full h-[600px] sm:h-[700px] rounded-2xl overflow-hidden shadow-xl">
          {/* Background Image */}
          <img
            src={slides[currentIndex]}
            alt="Background slide"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          />

          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/20 backdrop-brightness-75"></div>

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Empowering Global Supply Chains
            </h1>
            <h2 className="text-lg sm:text-2xl mt-3 font-semibold text-white">
              with Nicobar Maritime Services
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white/90 max-w-xl">
              Fast, secure, and intelligent freight logistics tailored for your industry —
              with global reach, real-time tracking, and personalized service.
            </p>
            <a
              href="#services"
              className="mt-6 inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-300 to-pink-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              🚀 Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
