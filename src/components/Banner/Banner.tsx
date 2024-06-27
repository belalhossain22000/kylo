"use client"
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="h-full w-full  flex items-center  justify-center pt-[200px]" style={{
            backgroundImage: `
          radial-gradient(circle at top, rgba(253,98,12,1) 7%, rgba(237,204,103,1) 53%),
          url(/background-image.png)
        `,
            
            backgroundBlendMode: 'lighten',
           
           

        }}>
            <div className="text-center">

                <p className="text-2xl text-black mb-8">
                    I’M KYLO, FREELANCE ILLUSTRATOR
                </p>
                <h1 className="text-[120px] leading-[127px] font-bold text-black font-serif">
                    Welcome To My <br />
                    Creative World
                </h1>

                <div className='w-full relative mt-10'>
                    <Image src="/hero_team_03.png" alt='hero' height={100} width={100} layout="responsive" />

                    {/* experience */}
                    <div className='absolute top-12 left-[150px] '>
                        <div className=''>
                            <div className='flex items-center gap-x-5'>
                                <span><FaStar size={30} className='text-[#FD8539]' /></span>
                                <span><FaStar size={30} className='text-[#FD8539]' /></span>
                                <span><FaStar size={30} className='text-[#FD8539]' /></span>
                                <span><FaStar size={30} className='text-[#FD8539]' /></span>
                                <span><FaStar size={30} className='text-[#FD8539]' /></span>
                            </div>
                            <h2 className='font-bold text-6xl my-2'>10 Years </h2>
                            <div className='flex items-end justify-end text-end'>
                                <p className='text-xl font-semibold  text-end'>Experience</p>
                            </div>

                        </div>
                    </div>

                    {/* client rating */}
                    <div className='absolute top-16 right-[180px]'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center -space-x-5'>
                                <Image src="/profile.avif" alt='profile' width={100} height={100} className='h-[40px] w-[40px] rounded-full object-cover' />
                                <Image src="/profile.avif" alt='profile' width={100} height={100} className='h-[40px] w-[40px]  rounded-full object-cover' />
                                <Image src="/profile.avif" alt='profile' width={100} height={100} className='h-[40px] w-[40px]  rounded-full object-cover' />
                                <Image src="/profile.avif" alt='profile' width={100} height={100} className='h-[40px] w-[40px]  rounded-full object-cover' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaStar size={20} className='text-black' />
                                <span>4.9 Client Raring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner