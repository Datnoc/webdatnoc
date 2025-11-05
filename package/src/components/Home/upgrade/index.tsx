import { upgradeData } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Upgrade = () => {
  return (
    <section className='md:py-40 py-20' id='upgrade'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-2 sm:gap-0 gap-10 items-center'>
          <div>
            <p className='text-primary sm:text-28 text-18 mb-3'>Security</p>
            <h2 className='text-white sm:text-40 text-30  font-medium mb-5'>
              Upgrade Your Security Infrastructure
            </h2>
            <p className='text-muted/60 text-18 mb-7'>
              Get enterprise-grade security with advanced threat protection and
              real-time monitoring for your business.
            </p>
            <div className='grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5'>
              {upgradeData.map((item, index) => (
                <div key={index} className='flex gap-5'>
                  <div>
                    <Icon
                      icon='la:check-circle-solid'
                      width='24'
                      height='24'
                      className='text-white group-hover:text-primary'
                    />
                  </div>
                  <div>
                    <h4 className='text-18 text-muted/60'>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=''>
              <Image
                src='/images/upgrade/img-upgrade.png'
                alt='Security Infrastructure Upgrade'
                width={625}
                height={580}
                className='-mr-5'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade
