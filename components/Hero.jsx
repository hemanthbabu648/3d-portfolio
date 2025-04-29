import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles/styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>HEMANTH BABU SETTI</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I Develop User <br className='sm:block hidden'/> Interfaces and Web Applications
          </p>
          <div className='flex justify-end'>
          <motion.img
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                src="/profilePic.webp"
                alt=""
                className='w-56 h-56 rounded-full -mb-20 md:mb-0 flex-shrink-0 md:w-30 md:h-47 md:rounded-2xl xl:w-[300px] xl:h-[400px]'
            />
          </div>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero