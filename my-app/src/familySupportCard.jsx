import React from "react";
import bgImage from "./assets/images/bg.jpeg";
import logo from "./assets/images/logo.jpg";
import { ArrowUpRight } from "lucide-react";
import EducationalAssistanceCard from "./educationalAssistanceCard";

export default function FamilySupportCard() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
        <div className="relative w-[600px] h-[400px] rounded-[20px] shadow-lg overflow-hidden">
          {/* SVG Masked Background Image */}
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 600 400"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="l-mask" clipPathUnits="userSpaceOnUse">
                <path
                  d="
                  M 0 0
                  H 460
                  Q 480 0 480 20
                  V 80
                  Q 480 100 500 100
                  H 580
                  Q 600 100 600 120
                  V 400
                  H 0
                  Z
                "
                />
              </clipPath>
            </defs>
            <image
              href={bgImage}
              width="600"
              height="400"
              clipPath="url(#l-mask)"
              style={{ borderRadius: "20px" }}
            />
          </svg>

          <div className="absolute  top-0  h-[95px] rounded-3xl  right-0 z-10 box-border  ">
            <div>
              <img
                src={logo}
                alt="Logo"
                className=" w-[100px] h-[90px] mb-6 object-fit "
              />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-12">
            <h1 className="text-white text-5xl font-bold mb-8 leading-tight flex justify-items-start w-[400px]">
              Family Support
            </h1>

            <p className="text-white text-xl mb-12 leading-relaxed text-left font-light  ">
              We offer counseling and guidance to families, <br /> equipping
              them with strategies to foster growth <br /> and resilience.
            </p>

            <button className="bg-orange-400 hover:bg-orange-500 transition-colors duration-200 text-white font-semibold py-2 px-8 rounded-lg flex items-center justify-center gap-3 w-[250px] text-lg">
              Read more
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <EducationalAssistanceCard />
      </div>
    </>
  );
}
