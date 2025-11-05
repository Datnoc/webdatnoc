'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SecurityRequest from './buy-form'
import SecurityConsultation from './sell-form'
import CardSlider from './slider'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const [isRequesting, setIsRequestingOpen] = useState(false)
  const [isConsulting, setIsConsultingOpen] = useState(false)
  const RequestRef = useRef<HTMLDivElement>(null)
  const ConsultRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (RequestRef.current && !RequestRef.current.contains(event.target as Node)) {
        setIsRequestingOpen(false)
      }
      if (ConsultRef.current && !ConsultRef.current.contains(event.target as Node)) {
        setIsConsultingOpen(false)
      }
    },
    [RequestRef, ConsultRef]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    document.body.style.overflow = isRequesting || isConsulting ? 'hidden' : ''
  }, [isRequesting, isConsulting])

  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      className='relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1'
      id='main-banner'>
      <div className='container px-4'>
        <div className='grid grid-cols-12'>
          <motion.div {...leftAnimation} className='lg:col-span-5 col-span-12'>
            <div className='flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24'>
              <Icon
                icon='mdi:shield-lock'
                width={40}
                height={40}
                className='text-primary'
              />
              <p className='text-white sm:text-28 text-18 mb-0'>
                Enterprise <span className='text-primary'>Security</span>
              </p>
            </div>
            <h1 className='font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10'>
              Advanced <span className='text-primary'>Security</span> Solutions for Your Business
            </h1>
            <div className='flex items-center md:justify-start justify-center gap-8'>
              <button
                className='bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50'
                onClick={() => setIsRequestingOpen(true)}>
                Request Security Audit
              </button>
              <button
                className='bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7'
                onClick={() => setIsConsultingOpen(true)}>
                Get Consultation
              </button>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className='col-span-7 lg:block hidden'>
            <div className='ml-20 -mr-64'>
              <Image
                src='/images/hero/banner-image.png'
                alt='Enterprise Security Solutions'
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className='absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1'></div>

      {/* Modals for Security Request and Consultation */}
      {isRequesting && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={RequestRef}
            className='relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md'>
            <button
              onClick={() => setIsRequestingOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Security Request Modal'>
              <Icon
                icon='mdi:close'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <SecurityRequest />
          </div>
        </div>
      )}
      {isConsulting && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={ConsultRef}
            className='relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md'>
            <button
              onClick={() => setIsConsultingOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Consultation Modal'>
              <Icon
                icon='mdi:close'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <SecurityConsultation />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
