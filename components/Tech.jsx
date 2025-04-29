import React from 'react'
import { SectionWrapper } from '@/hoc'
import { technologies } from '@/constants'
import {motion} from 'framer-motion'
import { styles } from '@/styles/styles'


const Technology = ({technology,value}) =>{
  return(
    <div className='group relative flex cursor-pointer xl:mt-70'>
      <motion.img
        initial={{
          x:  200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={technology.icon.src}
        alt=''
        className='rounded-full border border-gray-500 object-cover 
        w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale
        transition duration-300 ease-in-out'
      />
      <div 
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{technology.value}%</p>
        </div>
      </div>
    </div>
  )
}

const Tech = () => {
  return (
    <div className='min-h-screen flex flex-col text-center relative max-w-[2000px] mx-auto
    justify-center items-center md:text-left xl:flex-row xl:px-10 xl:space-y-0 
    '>
      <h3 className={`${styles.sectionHeadText} tracking-[5px] font-serif absolute top-24 uppercase text-2xl`}>Technologies</h3>
      <h3
        className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'
      >Hover over a technology for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5 absolute top-48'>
        {technologies?.slice(0, technologies.length / 2).map((technology) => (
          <Technology key={technology.name} technology={technology} />
        ))}

        {technologies?.slice(technologies.length / 2, technologies.length).map((technology) => (
          <Technology key={technology.name} technology={technology} />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")