import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <>
      <section
        id="contactus"
        className="relative z-10 overflow-hidden text-gray-100 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4 sm:px-6 md:px-8 lg:py-[90px]"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="w-full max-w-xl lg:w-1/2 xl:w-6/12">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-center lg:text-left mb-3 flex items-center justify-center">
                  Contact Us
                </h1>
                <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-dark dark:text-white text-center lg:text-left">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6 text-center lg:text-left">
                  We’re here to help! Whether you have a question about our services, need assistance with a project, or just want to say hello — we’d love to hear from you.
                </p>

                {/* Location Card */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start bg-opacity-10 mb-1.5 max-w-md mx-auto sm:mx-0">
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/10 text-primary">
                    {/* Location Icon */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="mb-1 text-lg font-bold text-dark">Our Location:</h4>
                    <p className="text-sm dark:text-dark-6">
                      9-4-124/1, 6th Floor, Mawin Super Complex, Tolichowki, Hyderabad, Telangana, 500008
                    </p>
                  </div>
                </div>

                {/* Phone Contact Block (with icon on left, two sections side-by-side) */}
                <div className="flex items-start bg-opacity-10 mb-1.5 max-w-md mx-auto sm:mx-0">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 mr-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.23 1.06l-1.5 1.5a16.001 16.001 0 006.28 6.28l1.5-1.5a1 1 0 011.06-.23l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
                      />
                    </svg>
                  </div>

              
                  <div className="flex flex-col sm:flex-row gap-8 mr-2">
                    
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-dark dark:text-white">Customer Services</h4>
                      <p className="text-sm dark:text-dark-6">
                        (+91) 9652442433<br />
                        (+91) 7097863623
                      </p>
                    </div>

                    {/* Sales */}
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-dark dark:text-white">Sales</h4>
                      <p className="text-sm dark:text-dark-6">
                        (+91) 9652442433<br />
                        (+91) 7097863623
                      </p>
                    </div>
                  </div>
                </div>


                {/* Email */}
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    {/* Email Icon */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">Email Address</h4>
                    <p className="text-base text-body-color dark:text-dark-6">info@nicobarmartime.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 text-black">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12 text-black">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
