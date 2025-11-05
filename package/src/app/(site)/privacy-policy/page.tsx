import { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy - datnoc',
  description: 'datnoc privacy policy and data protection information.',
}

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" />
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-white text-48 font-bold mb-8'>Privacy Policy</h1>
            
            <div className='space-y-8 text-muted/80 text-18'>
              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Introduction</h2>
                <p>
                  At datnoc, we are committed to protecting your privacy and ensuring the security of your personal 
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our security services and website.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Information We Collect</h2>
                <p className='mb-4'>We may collect the following types of information:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Business Information:</strong> Company details, job title, business address</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                  <li><strong>Usage Data:</strong> How you interact with our website and services</li>
                  <li><strong>Communication Data:</strong> Messages and inquiries sent to us</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>How We Use Your Information</h2>
                <p className='mb-4'>We use the collected information for the following purposes:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>To provide and maintain our security services</li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To send you updates and communications about our services</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>To analyze usage patterns and trends</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information. These include 
                  encryption, access controls, secure servers, and regular security assessments. However, no method of 
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information 
                  only in the following circumstances:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4 mt-4'>
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In case of business transfers or mergers</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
                  this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Your Rights</h2>
                <p className='mb-4'>You have the following rights regarding your personal information:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can control cookie preferences through 
                  your browser settings. For more information, please refer to our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure that appropriate safeguards are in place to protect your information in accordance with this 
                  Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                  information from children.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20 mt-4'>
                  <p className='text-white font-semibold mb-2'>datnoc</p>
                  <p className='mb-2'>Email: <a href='mailto:privacy@datnoc.com' className='text-primary hover:underline'>privacy@datnoc.com</a></p>
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

export default PrivacyPolicyPage

