import { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service - datnoc',
  description: 'Terms of Service for datnoc security services.',
}

const TermsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms of Service" />
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-white text-48 font-bold mb-8'>Terms of Service</h1>
            
            <div className='space-y-8 text-muted/80 text-18'>
              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Agreement to Terms</h2>
                <p>
                  By accessing and using datnoc&apos;s security services and website, you agree to be bound by these Terms 
                  of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Services</h2>
                <p>
                  datnoc provides cybersecurity services including but not limited to penetration testing, vulnerability 
                  assessments, security consulting, network security, cloud security, and incident response services. 
                  All services are subject to availability and our acceptance of your request.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Use License</h2>
                <p className='mb-4'>Permission is granted to temporarily access our website for personal, non-commercial use. This license does not include:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Modifying or copying materials</li>
                  <li>Using materials for commercial purposes</li>
                  <li>Removing copyright or proprietary notations</li>
                  <li>Transferring materials to another person or mirroring on another server</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>User Obligations</h2>
                <p className='mb-4'>When using our services, you agree to:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual service agreements. All fees are non-refundable unless 
                  otherwise stated. We reserve the right to change our pricing at any time, with notice to existing 
                  clients as applicable.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Intellectual Property</h2>
                <p>
                  All content, materials, and intellectual property on our website and in our services, including but not 
                  limited to text, graphics, logos, and software, are the property of datnoc or its licensors and are 
                  protected by copyright and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Limitation of Liability</h2>
                <p>
                  datnoc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including but not limited to loss of profits, data, or business opportunities, arising out of or in 
                  connection with the use of our services.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Confidentiality</h2>
                <p>
                  We maintain strict confidentiality regarding all client information and security assessments. All 
                  information obtained during the course of our services will be kept confidential and used solely 
                  for the purpose of providing our services.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Termination</h2>
                <p>
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, 
                  for any breach of these Terms of Service or for any other reason we deem necessary.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                  without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material 
                  changes by posting the updated terms on our website. Your continued use of our services after such 
                  modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20 mt-4'>
                  <p className='text-white font-semibold mb-2'>datnoc</p>
                  <p className='mb-2'>Email: <a href='mailto:legal@datnoc.com' className='text-primary hover:underline'>legal@datnoc.com</a></p>
                  <p className='mb-2'>Phone: <a href='tel:+13072852570' className='text-primary hover:underline'>+1 (307) 285-2570</a></p>
                  <p>Address: 30N Gould Street, Sheridan, Wyoming, US 82801</p>
                </div>
              </div>

              <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                <p className='text-primary text-20 font-semibold mb-2'>Last Updated</p>
                <p>January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsPage

