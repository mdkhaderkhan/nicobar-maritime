import React from 'react'
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About us', href: '#Aboutus' },
  { name: 'Services', href: '#services' },
  { name: 'Contact us', href: '#contactus' },
];


function Navbar(handleClick) {
  return (
    <>
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

    </>
  )
}

export default Navbar
