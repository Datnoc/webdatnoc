import { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Support - datnoc',
  description: 'Get help and support from datnoc. Contact our support team, browse FAQs, and find resources.',
}

const SupportPage = () => {
  return (
    <>
      <Breadcrumb pageName="Support" pageDescription="We're here to help you with any questions or issues" />
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-6xl mx-auto'>
            
            {/* Contact Information */}
            <div className='mb-16'>
              <h1 className='text-white text-48 font-bold mb-8'>Get in Touch</h1>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-dark_grey/50 p-8 rounded-lg border border-primary/20'>
                  <div className='flex items-center mb-4'>
                    <svg className='w-8 h-8 text-primary mr-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                    <h3 className='text-white text-24 font-semibold'>Email Support</h3>
                  </div>
                  <p className='text-muted/80 text-16 mb-4'>Send us an email and we&apos;ll get back to you within 24 hours.</p>
                  <a href='mailto:support@datnoc.com' className='text-primary hover:underline text-18 font-medium'>
                    support@datnoc.com
                  </a>
                </div>

                <div className='bg-dark_grey/50 p-8 rounded-lg border border-primary/20'>
                  <div className='flex items-center mb-4'>
                    <svg className='w-8 h-8 text-primary mr-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                    <h3 className='text-white text-24 font-semibold'>Phone Support</h3>
                  </div>
                  <p className='text-muted/80 text-16 mb-4'>Call us for immediate assistance during business hours.</p>
                  <a href='tel:+13072852570' className='text-primary hover:underline text-18 font-medium'>
                    +1 (307) 285-2570
                  </a>
                  <p className='text-muted/60 text-14 mt-2'>Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Support Options */}
            <div className='mb-16'>
              <h2 className='text-white text-32 font-semibold mb-8'>Support Options</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <div className='w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                    </svg>
                  </div>
                  <h3 className='text-white text-20 font-semibold mb-2'>Documentation</h3>
                  <p className='text-muted/80 text-14 mb-4'>Browse our comprehensive documentation and guides.</p>
                  <a href='/documentation' className='text-primary hover:underline text-14 font-medium'>
                    View Documentation →
                  </a>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <div className='w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-white text-20 font-semibold mb-2'>FAQ</h3>
                  <p className='text-muted/80 text-14 mb-4'>Find answers to frequently asked questions.</p>
                  <a href='#faq' className='text-primary hover:underline text-14 font-medium'>
                    View FAQ →
                  </a>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <div className='w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-white text-20 font-semibold mb-2'>24/7 Support</h3>
                  <p className='text-muted/80 text-14 mb-4'>Round-the-clock security monitoring and support.</p>
                  <p className='text-primary text-14 font-medium'>Available Now</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id='faq' className='mb-16'>
              <h2 className='text-white text-32 font-semibold mb-8'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <h3 className='text-white text-20 font-semibold mb-3'>How do I get started with your security services?</h3>
                  <p className='text-muted/80 text-16'>
                    You can get started by contacting our sales team via email or phone. We&apos;ll schedule a consultation to assess your security needs and provide a customized solution.
                  </p>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <h3 className='text-white text-20 font-semibold mb-3'>What security services do you offer?</h3>
                  <p className='text-muted/80 text-16'>
                    We offer a comprehensive range of security services including penetration testing, vulnerability assessment, network security, cloud security, incident response, and security audits.
                  </p>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <h3 className='text-white text-20 font-semibold mb-3'>How quickly can you respond to security incidents?</h3>
                  <p className='text-muted/80 text-16'>
                    Our incident response team can respond to security incidents in less than 1 hour. We provide 24/7 monitoring and rapid response capabilities.
                  </p>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <h3 className='text-white text-20 font-semibold mb-3'>Do you provide ongoing security monitoring?</h3>
                  <p className='text-muted/80 text-16'>
                    Yes, we offer 24/7 security monitoring services to continuously protect your infrastructure and detect threats in real-time.
                  </p>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <h3 className='text-white text-20 font-semibold mb-3'>What certifications do you have?</h3>
                  <p className='text-muted/80 text-16'>
                    We are ISO 27001 certified and our team consists of certified security professionals with extensive experience in cybersecurity.
                  </p>
                </div>

                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <h3 className='text-white text-20 font-semibold mb-3'>How can I report a security vulnerability?</h3>
                  <p className='text-muted/80 text-16'>
                    If you discover a security vulnerability, please contact us immediately at security@datnoc.com. We take all security reports seriously and will respond promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className='mb-16'>
              <h2 className='text-white text-32 font-semibold mb-8'>Send us a Message</h2>
              <div className='bg-dark_grey/50 p-8 rounded-lg border border-primary/20'>
                <form className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label htmlFor='name' className='block text-white text-16 font-medium mb-2'>
                        Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        required
                        className='w-full px-4 py-3 bg-dark_grey border border-primary/20 rounded-lg text-white placeholder-muted/50 focus:outline-none focus:border-primary'
                        placeholder='Your name'
                      />
                    </div>
                    <div>
                      <label htmlFor='email' className='block text-white text-16 font-medium mb-2'>
                        Email *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        className='w-full px-4 py-3 bg-dark_grey border border-primary/20 rounded-lg text-white placeholder-muted/50 focus:outline-none focus:border-primary'
                        placeholder='your.email@example.com'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='subject' className='block text-white text-16 font-medium mb-2'>
                      Subject *
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      required
                      className='w-full px-4 py-3 bg-dark_grey border border-primary/20 rounded-lg text-white placeholder-muted/50 focus:outline-none focus:border-primary'
                      placeholder='What is this regarding?'
                    />
                  </div>
                  <div>
                    <label htmlFor='message' className='block text-white text-16 font-medium mb-2'>
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={6}
                      className='w-full px-4 py-3 bg-dark_grey border border-primary/20 rounded-lg text-white placeholder-muted/50 focus:outline-none focus:border-primary resize-none'
                      placeholder='Tell us how we can help...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Office Address */}
            <div className='bg-dark_grey/50 p-8 rounded-lg border border-primary/20'>
              <h2 className='text-white text-32 font-semibold mb-6'>Our Office</h2>
              <div className='flex items-start'>
                <svg className='w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <div className='text-muted/80 text-16'>
                  <p className='text-white font-semibold mb-2'>Datnoc INC</p>
                  <p>30N Gould Street</p>
                  <p>Sheridan, Wyoming, US 82801</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default SupportPage

