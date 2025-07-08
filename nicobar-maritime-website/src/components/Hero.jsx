import { useState } from 'react';
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

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 bg-[#e8b641] shadow-md">
          <div className="flex items-center">
            <img className="h-12 w-12 mr-3" src="/nicobar.png" alt="Nicobar Logo" />
            <span className="text-xl sm:text-2xl font-bold text-[#1f2937] tracking-wide">NICOBAR MARITIME</span>
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
              <a key={item.name} href={item.href} className=" font-bold  text-gray-900 hover:text-white hover:underline transition">
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
        {/* Clip-path background blob */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div
            className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-red-900 via-red-900 to-red-500 opacity-30 blur-2xl"
            style={{
              clipPath:
                'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)',
            }}
          ></div>
        </div>

        <div className="relative">
          <img
            className="w-full h-[500px] sm:h-[600px] object-cover rounded-2xl shadow-xl"
            src="/Freightimg.jpg"
            alt="Freight Background"
          />

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-md animate-pulse">
                Empowering Global Supply Chains
                <br />
                with Nicobar Maritime Services
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90">
                Fast, secure, and intelligent freight logistics tailored for your industry — with global reach,
                real-time tracking, and personalized service.
              </p>

              <a
                href="#services"
                className="mt-6 inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-300 to-pink-500 text-black font-semibold rounded-full shadow-md hover:scale-105 transition duration-300"
              >
                🚀 Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
