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

  const slides = [
    {
      image: '/freight1.jpg',
      heading: 'Empowering Global Supply Chains',
      subheading: 'with Nicobar Maritime Services',
      description:
        'Fast, secure, and intelligent freight logistics tailored for your industry — with global reach, real-time tracking, and personalized service.',
    },
    {
      image: '/freight2.jpg',
      heading: 'Connecting Continents with Confidence',
      subheading: 'Your cargo, our priority',
      description:
        'We ensure reliable maritime freight delivery with cutting-edge technology and unmatched global coverage.',
    },
    {
      image: '/freight3.jpg',
      heading: 'Efficient. Reliable. Global.',
      subheading: 'Nicobar Maritime Services',
      description:
        'Experience seamless logistics from port to port with our expert team and optimized routes.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 bg-[#e8b641] shadow-md">
          <div className="flex items-center">
            <img className="h-12 w-12 mr-3" src="/nicobar.png" alt="Nicobar Logo" />
            <span className="text-xl sm:text-2xl font-bold text-[#1f2937] tracking-wide">
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
        {/* Background blob */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div
            className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-br opacity-30 blur-2xl"
            style={{
              clipPath:
                'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)',
            }}
          ></div>
        </div>

        {/* Full Slide with content and image */}
        <div className="relative w-full h-[500px] sm:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.heading}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative text-center text-white px-4 sm:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-md animate-pulse">
                  {slide.heading}
                </h1>
                <h2 className="text-xl sm:text-2xl mt-2 font-semibold text-white">
                  {slide.subheading}
                </h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90">
                  {slide.description}
                </p>
                <a
                  href="#services"
                  className="mt-6 inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-300 to-pink-500 text-black font-semibold rounded-full shadow-md hover:scale-105 transition duration-300"
                >
                  🚀 Explore Services
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
