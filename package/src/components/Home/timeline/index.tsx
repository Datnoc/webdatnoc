'use client'
import Image from 'next/image'
import { timelineData } from '@/app/api/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }
  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <p className='text-muted sm:text-28 text-18 mb-9'>
              Security <span className='text-primary'>Process</span>
            </p>
            <h2 className='text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20'>
              We can enter at any point or help you all the way through the
              security implementation cycle.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='md:block hidden relative'>
              <div>
                <Image
                  src='/images/timeline/img-timeline.png'
                  alt='Security Process Timeline'
                  width={1220}
                  height={1000}
                  className='w-80% mx-auto'
                />
              </div>
              {timelineData.map((item, index) => {
                const isLeft = item.position.includes('left')
                const isTop = item.position.includes('top')
                const positionClass = isTop
                  ? 'lg:top-10 top-8'
                  : 'lg:bottom-10 bottom-8'
                const sideClass = isLeft
                  ? 'lg:left-0 -left-20'
                  : 'lg:right-0 -right-20'

                return (
                  <div
                    key={index}
                    className={`absolute ${positionClass} ${sideClass} w-64 flex items-center gap-4 z-10`}>
                    {isLeft ? (
                      <>
                        <div className='text-right bg-dark_grey/90 backdrop-blur-md px-5 py-3 rounded-lg border border-primary/20 shadow-lg'>
                          <h5 className='text-white text-24 mb-2 font-semibold'>{item.title}</h5>
                          <p className='text-white/90 text-16 leading-tight'>{item.text}</p>
                        </div>
                        <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={44}
                            height={44}
                            className='w-16 h-16'
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={44}
                            height={44}
                            className='w-16 h-16'
                          />
                        </div>
                        <div className='text-left bg-dark_grey/90 backdrop-blur-md px-5 py-3 rounded-lg border border-primary/20 shadow-lg'>
                          <h5 className='text-white text-24 mb-2 font-semibold'>
                            {item.title}
                          </h5>
                          <p className='text-white/90 text-16 leading-tight'>{item.text}</p>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
            <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='bg-light_grey/45 p-6 rounded-full'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='text-28 text-white mb-2 font-semibold'>{item.title}</h4>
                    <p className='text-white/90 text-18'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
