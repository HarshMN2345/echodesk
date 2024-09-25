"use client";
import { ArticleScrollComponent } from "@/components/ArticleScrollComponent";
import InsightsComponent from "@/components/InsightsComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { buttonVariants } from "@/components/ui/buttons";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('top-news');
  return (
    <>
      <MaxWidthWrapper className="mb-12 px-10 mt-28 sm:mt-40 flex flex-col items-center justify-center">
        <div className="mx-auto mb-10 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-4 border-white-100 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-yellow-200 hover:bg-white-100">
          <p className="text-md font-semibold text-gray-700">
            A NewsDesk for Your Unlimited News Demands
          </p>
        </div>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          What&apos;s more innovative than EchoDesk?{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Revolutionary Insights.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Revolutionary Insights.</span>
            </div>
          </div>
        </h2>
        <Link
        href="#top-news"
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          
          target="_blank"
        >
          Start here <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <BackgroundBeamsWithCollision className="mt-24 mb-24">
        <div className="flex flex-col overflow-hidden mb-12 mt-24">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/newsdesk.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
        </BackgroundBeamsWithCollision>
        <div className="mt-18 ">
          <div className="flex justify-start space-x-4 mb-8">
            <h1 
              className={`text-4xl font-bold cursor-pointer ${
                activeTab === 'top-news' 
                  ? 'bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('top-news')}
            >
              Top News
            </h1>
            <span className="text-4xl font-bold text-gray-300">|</span>
            <h1 
              className={`text-4xl font-bold cursor-pointer ${
                activeTab === 'insights' 
                  ? 'bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('insights')}
            >
              Insights
            </h1>
          </div>
        </div>
        
        <div className="mt-8 w-full">
          {activeTab === 'top-news' ? (
            <div id="top-news">
              <ArticleScrollComponent />
            </div>
          ) : (
            <div id="insights">
              <InsightsComponent />
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
