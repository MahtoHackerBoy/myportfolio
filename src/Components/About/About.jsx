import React from 'react'
import aboutImg from '../../assets/about-bg.png'
import { IoArrowForward } from 'react-icons/io5';
const About = () => {
    return (
        <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img src={aboutImg} alt="" className='md:h-80' />
                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                                <p className='text-xl md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid unde facilis minus cupiditate voluptatem sed vero impedit amet dolorem, magni nisi molestiae exercitationem iure.</p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-xl md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid unde facilis minus cupiditate voluptatem sed vero impedit amet dolorem, magni nisi molestiae exercitationem iure.</p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Full Stack  Developer</h1>
                                <p className='text-xl md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid unde facilis minus cupiditate voluptatem sed vero impedit amet dolorem, magni nisi molestiae exercitationem iure.</p>
                            </span>
                        </div>
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About