import React, { FC } from 'react'
import Link from 'next/link'
import { headerData } from '../Header/Navigation/menuData'
import { footerlabels } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16'>
          <div className='lg:col-span-4 md:col-span-6 col-span-6'>
            <Logo />
            <div className='mt-8 space-y-4'>
              <div className='flex items-start gap-3'>
                <Icon
                  icon='mdi:map-marker'
                  width='20'
                  height='20'
                  className='text-primary mt-1 flex-shrink-0'
                />
                <p className='text-white text-16'>
                  30N Gould Street<br />
                  Sheridan, Wyoming<br />
                  US 82801
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Icon
                  icon='mdi:email'
                  width='20'
                  height='20'
                  className='text-primary flex-shrink-0'
                />
                <a href='mailto:info@datnoc.com' className='text-white text-16 hover:text-primary'>
                  info@datnoc.com
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Icon
                  icon='mdi:phone'
                  width='20'
                  height='20'
                  className='text-primary flex-shrink-0'
                />
                <a href='tel:+13072852570' className='text-white text-16 hover:text-primary'>
                  +1 (307) 285-2570
                </a>
              </div>
            </div>
            <div className='flex gap-6 items-center mt-8 relative z-1'>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:linkedin'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
            </div>
            <p className='text-white text-18 font-medium sm:mt-20 mt-12'>
              © 2025 datnoc. All rights reserved.
            </p>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.href}
                    className='text-white hover:text-primary text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Information</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.herf}
                    className='text-white hover:text-primary text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-4 md:col-span-4 col-span-6'>
            <h3 className='text-white text-24 font-medium'>Subscribe</h3>
            <p className='text-muted/60 text-18 mt-5'>
              Subscribe to get the latest
              <br /> news form us
            </p>
            <div className='relative lg:w-80%'>
              <input
                type='email'
                name='mail'
                id='mail'
                placeholder='Enter Email'
                className='bg-transparent border border-dark_border/60 py-4 text-white rounded-lg w-full mt-6 px-6'
              />
              <Icon
                icon='tabler:send'
                width='24'
                height='24'
                className='text-primary absolute right-7 bottom-4'
              />
            </div>
          </div>
        </div>
        <div className='border-t border-dark_border/20 pt-8 pb-8'>
          <div className='flex flex-wrap items-center justify-between gap-6'>
            <div className='flex flex-wrap items-center gap-6'>
              <Link href='/gdpr' className='text-white hover:text-primary text-16'>
                GDPR
              </Link>
              <Link href='/kvkk' className='text-white hover:text-primary text-16'>
                KVKK
              </Link>
              <Link href='/iso' className='text-white hover:text-primary text-16'>
                ISO 27001
              </Link>
              <Link href='/privacy-policy' className='text-white hover:text-primary text-16'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-white hover:text-primary text-16'>
                Terms of Service
              </Link>
              <Link href='/support' className='text-white hover:text-primary text-16'>
                Support
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-muted/60 text-14'>Certified:</span>
              <span className='text-primary text-14 font-medium'>ISO 27001</span>
              <span className='text-muted/60 text-14'>•</span>
              <span className='text-primary text-14 font-medium'>GDPR Compliant</span>
              <span className='text-muted/60 text-14'>•</span>
              <span className='text-primary text-14 font-medium'>KVKK Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
