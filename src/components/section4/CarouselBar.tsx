

import React, { Component } from "react";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OfferBox from "../OfferBox";


type Props = {}

export default function CarouselBar({}: Props) {

    const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      ];
      const texts = [
        "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
        "React Carousel with Server Side Rendering Support – Part 1",
        "React Carousel with Server Side Rendering Support – Part 2",
        "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"
      ];
    const fakerData = Array(12)
    .fill(0)
    .map((item, index) => {
      return {
        image: images[index],
        headline: "w3js -> web front-end studio",
        description: texts[index] || texts[0]
      };
    });
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className=' flex flex-col flex-1 w-auto h-auto items-center justify-center border bg-gray-600'>
        <div>
            <h3 className='font-bold text-center text-4xl'>Our <span className=' text-4xl text-center text-blue-800'>practices</span></h3>
            <h3 className='mt-10 text-center'>At Astanga Yoga Studio we explore a wide variety. student practice<br/>
            at their own pace with advice and sometimes adjustments given by the teacher. </h3>
        </div>
        <div className='mt-8 flex flex-1 flex-row w-full bg-orange-800  mb-4'>
            <div className='flex w-56 items-end justify-end  bg-red-500'>
                <div className='border border-black bg-bor rounded-full w-10 h-10 p-1'>
                <ChevronLeftIcon className="h-7 w-7 " />
                </div>
            </div>
            <div className='flex flex-1 items-center justify-center bg-lime-600' >
                

           
                
            </div>


            <div className='flex w-56  bg-red-500'>
            <div className='border border-black bg-bor rounded-full w-10 h-10 p-1'>
                <ChevronRightIcon className="h-7 w-7 " />
                </div>
            </div>
        </div>
    </div>
  )
}