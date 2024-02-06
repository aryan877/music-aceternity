'use client';

import Link from 'next/link';
import React from 'react';
import coursesData from '../data/music_courses.json';
import { BackgroundGradient } from '@/components/ui/background-gradient';

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = coursesData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white">
            Learn With the Best
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex w-full max-w-sm">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full w-full">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 py-2 px-4 mt-4"
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/courses"
            className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
