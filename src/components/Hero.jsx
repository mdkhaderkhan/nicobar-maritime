import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#Aboutus" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contactus" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = ["/freight1.jpg", "/freight2.jpg", "/freight3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-3 py-2 sm:px-6 lg:px-8 text-[#35708a] bg-slate-300 shadow-md">
          <div className="flex items-center">
            <img
              className="h-20 w-18 sm:h-14 sm:w-14 mr-1"
              src="/nicobar.png"
              alt="Nicobar Logo"
            />
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
                className="font-bold text-gray-900 hover:text-sky-500 transition"
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
        <div className="relative w-full h-[600px] sm:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Images with fade + zoom */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[2000ms] ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg animate-fadeIn">
              Empowering Global Supply Chains
            </h1>
            <h2 className="text-lg sm:text-2xl mt-4 font-semibold text-sky-200 animate-fadeIn delay-200">
              with Nicobar Maritime Services
            </h2>
            <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-white/90 max-w-xl animate-fadeIn delay-500">
              Fast, secure, and intelligent freight logistics tailored for your
              industry — with global reach, real-time tracking, and personalized
              service.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-sky-300 to-indigo-500 text-black font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-sky-500/50 transition duration-300"
            >
              🚀 Explore Services
            </a>

            {/* Dots Navigation */}
            <div className="flex space-x-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full border-2 border-white transition ${
                    index === currentIndex
                      ? "bg-white shadow-lg shadow-white/50 scale-110"
                      : "bg-transparent"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
