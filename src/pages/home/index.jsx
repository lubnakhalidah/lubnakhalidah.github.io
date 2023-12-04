import React from "react";
import Navbar from "../../components/Navbars";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Konten utama */}
        <h1 className="text-5xl lg:text-8xl font-bold mb-8 text-center">
          Hi, I'm Lubna
        </h1>
        <h2 className="text-xl lg:text-3xl text-center">
          A learner of frontend development and data.
        </h2>
      </div>

      <div className="absolute bottom-0 w-full text-center">
        <Footer />
      </div>
      {/* <Footer /> */}

      {/* <div className="max-h-screen">
        <div className="flex h-full w-full items-center">
          <div className="m-auto py-24">
            <label className="swap swap-rotate absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              <svg
                className="swap-on fill-current w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <div className="m-16">
              <h1 class="relative text-center">
                <span class="text-8xl font-bold mb-4 block">Hi, I'm Lubna</span>
                <br />
                <span class="text-2xl mt-4 block">
                  A learner of frontend development and data.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="abolute bottom-0">
        <Footer />
      </div> */}
    </div>
  );
}
