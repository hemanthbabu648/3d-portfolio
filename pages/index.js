import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SocialIcon } from 'react-social-icons';

const inter = Inter({ subsets: ['latin'] })

import { Navbar, Hero, About, Experience, Tech, Works, Contact, Feedbacks, StarsCanvas } from '@/components'
import { socialIcons } from '@/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>HEMANTH BABU | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>

          <div className="fixed top-[30%] w-16 h-80 z-30 bg-green-500 rounded-l-2xl right-0">
            <div className=' space-y-3 flex flex-col mt-3 ml-2'>
              {socialIcons.map((socialIcon) => (
                <SocialIcon
                  key={socialIcon.title}
                  network={socialIcon.network}
                  url={socialIcon.url}
                  bgColor='white'
                  target={'_blank'}
                />
              ))}
            </div>
          </div>

          <About />
          <Experience />
          <Works />
          <Tech />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}
