import { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'GDPR Compliance - datnoc',
  description: 'General Data Protection Regulation (GDPR) compliance information for datnoc security services.',
}

const GDPRPage = () => {
  return (
    <>
      <Breadcrumb pageName="GDPR Compliance" />
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-white text-48 font-bold mb-8'>GDPR Compliance</h1>
            
            <div className='space-y-8 text-muted/80 text-18'>
              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Overview</h2>
                <p>
                  datnoc is committed to ensuring compliance with the General Data Protection Regulation (GDPR) 
                  (EU Regulation 2016/679). This regulation strengthens and unifies data protection for individuals 
                  within the European Union (EU) and addresses the export of personal data outside the EU.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Our Commitment</h2>
                <p>
                  We understand the importance of data protection and privacy. Our security services are designed 
                  with GDPR principles at their core, ensuring that personal data is processed lawfully, fairly, 
                  and transparently.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Key Principles</h2>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Lawfulness, fairness, and transparency in data processing</li>
                  <li>Purpose limitation - data is collected for specified purposes</li>
                  <li>Data minimization - only necessary data is collected</li>
                  <li>Accuracy - ensuring data is kept up to date</li>
                  <li>Storage limitation - data is not kept longer than necessary</li>
                  <li>Integrity and confidentiality - appropriate security measures</li>
                  <li>Accountability - demonstrating compliance with GDPR</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Your Rights</h2>
                <p className='mb-4'>Under GDPR, you have the following rights:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li><strong>Right to access:</strong> You can request copies of your personal data</li>
                  <li><strong>Right to rectification:</strong> You can request correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> You can request deletion of your data</li>
                  <li><strong>Right to restrict processing:</strong> You can request limitation of data processing</li>
                  <li><strong>Right to data portability:</strong> You can request transfer of your data</li>
                  <li><strong>Right to object:</strong> You can object to processing of your data</li>
                  <li><strong>Rights related to automated decision-making:</strong> Including profiling</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Processing</h2>
                <p className='mb-4'>
                  We process personal data only for legitimate business purposes, including:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Providing security services and consultations</li>
                  <li>Responding to inquiries and support requests</li>
                  <li>Legal compliance and regulatory requirements</li>
                  <li>Improving our services and website functionality</li>
                  <li>Marketing communications (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Security</h2>
                <p className='mb-4'>
                  We implement appropriate technical and organizational measures to ensure a level of security 
                  appropriate to the risk, including:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Secure data centers with physical security measures</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Incident response procedures and breach notification protocols</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was 
                  collected, or as required by law. When data is no longer needed, it is securely deleted or anonymized. 
                  Retention periods vary depending on the type of data and legal requirements.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>International Data Transfers</h2>
                <p>
                  When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate 
                  safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European 
                  Commission, or adequacy decisions by the European Commission.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Breach Notification</h2>
                <p>
                  In the event of a personal data breach that poses a high risk to your rights and freedoms, we will 
                  notify the relevant supervisory authority within 72 hours and inform affected individuals without 
                  undue delay, in accordance with GDPR requirements.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Data Protection Officer (DPO)</h2>
                <p>
                  We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance efforts. You can 
                  contact our DPO for any questions or concerns regarding data protection at: 
                  <a href='mailto:dpo@datnoc.com' className='text-primary hover:underline ml-2'>dpo@datnoc.com</a>
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Exercising Your Rights</h2>
                <p className='mb-4'>
                  To exercise any of your GDPR rights, please submit a request to us. We will respond to your request 
                  within one month. In some cases, we may extend this period by up to two additional months if the 
                  request is complex. We will inform you of any such extension and the reasons for it.
                </p>
                <p>
                  You also have the right to lodge a complaint with a supervisory authority if you believe that our 
                  processing of your personal data violates GDPR.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Contact Us</h2>
                <p className='mb-4'>
                  If you have any questions about our GDPR compliance or wish to exercise your rights, please 
                  contact us:
                </p>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <p className='text-white font-semibold mb-2'>datnoc - Data Protection</p>
                  <p className='mb-2'>Email: <a href='mailto:privacy@datnoc.com' className='text-primary hover:underline'>privacy@datnoc.com</a></p>
                  <p className='mb-2'>DPO Email: <a href='mailto:dpo@datnoc.com' className='text-primary hover:underline'>dpo@datnoc.com</a></p>
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

export default GDPRPage

