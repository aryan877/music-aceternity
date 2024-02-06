import { Spotlight } from '@/components/ui/Spotlight';
import React from 'react';
import { Button } from './ui/moving-border';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center justify-center relative overflow-hidden max-w-7xl mx-auto py-10 md:py-0">
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        {/* Increased top margin for the h1 on smaller screens */}
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link
            href="/courses"
            className="inline-block bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-1.75rem py-2 px-4"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
