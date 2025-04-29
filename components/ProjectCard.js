import Image from 'next/image'
import React from 'react'
import { github } from '@/assets'
import Link from 'next/link'


function ProjectCard({ timelineItems, value }) {
    return (
        <div className='text-center'>
            <Link href={timelineItems[value]?.live_url} target='_blank'>
                <div className='relative w-1/2 mx-auto h-[250px]'>
                    <Image
                        src={timelineItems[value]?.image}
                        alt={timelineItems[value]?.name}
                        className='w-full h-full object-contain rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(timelineItems[value]?.source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Image
                                src={github}
                                alt={github}
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{timelineItems[value]?.name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{timelineItems[value]?.description}</p>
                    <div className='mt-4'>
                        {timelineItems[value]?.tags.map((tag) => (
                            <p
                                key={tag?.name}
                                className={`text-[14px] ${tag?.color}`}
                            >
                                #{tag?.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
