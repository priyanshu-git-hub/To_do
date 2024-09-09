'use client';
import { DotLottiePlayer } from "@dotlottie/react-player";  
import productImage from "@/assets/product-image.png"
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col gap-3">
        {tabs.map((tab) => (
          <div key={tab.title} className="border border-white/15 gap-3 p-2.5 flex rounded-lg  mt-">
            <DotLottiePlayer  src={tab.icon} className="h-5 w-5 "  autoplay />
            <div>{tab.title}</div>
            {tab.isNew && <div className="text-xs align-text-top text-black font-semibold rounded-full px-2 py-0.2 bg-[#8c44ff]">
      New
    </div>
            }
          </div>
        ))}
        </div>
        
      </div>
    </section>
  );   
};