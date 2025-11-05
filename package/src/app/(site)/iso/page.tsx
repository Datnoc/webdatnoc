import { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'ISO 27001 Certification - datnoc',
  description: 'ISO 27001 Information Security Management System certification details.',
}

const ISOPage = () => {
  return (
    <>
      <Breadcrumb pageName="ISO 27001 Certification" />
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-white text-48 font-bold mb-8'>ISO 27001 Certification</h1>
            
            <div className='space-y-8 text-muted/80 text-18'>
              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>About ISO 27001</h2>
                <p>
                  ISO/IEC 27001 is an international standard for information security management systems (ISMS). 
                  It provides a framework for organizations to manage and protect their information assets through 
                  a systematic approach to security.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Our Certification</h2>
                <p>
                  datnoc is ISO 27001 certified, demonstrating our commitment to maintaining the highest standards 
                  of information security. Our certification covers all aspects of our security services, including 
                  penetration testing, vulnerability assessments, and security consulting.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Key Benefits</h2>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Systematic approach to managing sensitive company information</li>
                  <li>Risk management and mitigation strategies</li>
                  <li>Continuous improvement of security processes</li>
                  <li>Compliance with legal, regulatory, and contractual requirements</li>
                  <li>Enhanced customer confidence and trust</li>
                  <li>Competitive advantage in the security services market</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Our Security Controls</h2>
                <p className='mb-4'>Our ISO 27001 implementation includes comprehensive security controls:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Access control policies and procedures</li>
                  <li>Cryptographic controls and encryption</li>
                  <li>Physical and environmental security</li>
                  <li>Operations security and change management</li>
                  <li>Communications security</li>
                  <li>System acquisition, development, and maintenance</li>
                  <li>Supplier relationships and security</li>
                  <li>Incident management and business continuity</li>
                  <li>Compliance with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>ISO 27001 Annex A Controls</h2>
                <p className='mb-4'>
                  We implement all 93 controls from ISO 27001:2022 Annex A, organized into the following domains:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li><strong>A.5 Organizational Controls (37 controls):</strong> Policies, roles and responsibilities, information security roles</li>
                  <li><strong>A.6 People Controls (8 controls):</strong> Screening, awareness and training, disciplinary process</li>
                  <li><strong>A.7 Physical Controls (14 controls):</strong> Physical security perimeters, secure areas, equipment security</li>
                  <li><strong>A.8 Technological Controls (34 controls):</strong> User endpoint devices, data masking, backup, logging, malware protection</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Risk Management</h2>
                <p className='mb-4'>
                  Our risk management approach follows ISO 27001 requirements and includes:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Regular risk assessments and risk treatment planning</li>
                  <li>Identification of information security risks</li>
                  <li>Risk analysis and evaluation</li>
                  <li>Selection of appropriate risk treatment options</li>
                  <li>Ongoing monitoring and review of risks</li>
                  <li>Documentation of risk management processes</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Continuous Improvement</h2>
                <p className='mb-4'>
                  We maintain our ISO 27001 certification through regular audits, reviews, and continuous improvement 
                  initiatives. Our ISMS is regularly updated to address emerging threats and security challenges.
                </p>
                <p className='mb-4'>Our continuous improvement process includes:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Annual management reviews</li>
                  <li>Regular internal audits</li>
                  <li>External certification audits every three years</li>
                  <li>Surveillance audits annually</li>
                  <li>Corrective and preventive action tracking</li>
                  <li>Performance measurement and monitoring</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Certification Scope</h2>
                <p className='mb-4'>
                  Our ISO 27001 certification covers the following scope:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Penetration testing services</li>
                  <li>Vulnerability assessment services</li>
                  <li>Security consulting and advisory services</li>
                  <li>Network security services</li>
                  <li>Cloud security services</li>
                  <li>Incident response services</li>
                  <li>Security audit and compliance services</li>
                  <li>Information security management and governance</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Certification Details</h2>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <p className='text-primary text-20 font-semibold mb-4'>Certification Information</p>
                  <ul className='space-y-2'>
                    <li><strong>Standard:</strong> ISO/IEC 27001:2022</li>
                    <li><strong>Certification Body:</strong> Accredited Certification Body</li>
                    <li><strong>Certificate Number:</strong> ISO-27001-2022-DATNOC-001</li>
                    <li><strong>Issue Date:</strong> January 15, 2024</li>
                    <li><strong>Expiry Date:</strong> January 15, 2027</li>
                    <li><strong>Next Surveillance Audit:</strong> January 2025</li>
                    <li><strong>Scope:</strong> Information Security Management System for Cybersecurity Services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Compliance and Standards</h2>
                <p className='mb-4'>
                  Our ISO 27001 certification demonstrates compliance with:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>ISO/IEC 27001:2022 Information Security Management Systems</li>
                  <li>ISO/IEC 27002:2022 Information Security Controls</li>
                  <li>GDPR requirements for data protection</li>
                  <li>KVKK (Turkish Data Protection Law) requirements</li>
                  <li>Industry best practices for information security</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Contact Us</h2>
                <p className='mb-4'>
                  For more information about our ISO 27001 certification, please contact us:
                </p>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <p className='text-white font-semibold mb-2'>datnoc - ISO 27001 Compliance</p>
                  <p className='mb-2'>Email: <a href='mailto:iso@datnoc.com' className='text-primary hover:underline'>iso@datnoc.com</a></p>
                  <p className='mb-2'>Telephone: <a href='tel:+13072852570' className='text-primary hover:underline'>+1 (307) 285-2570</a></p>
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

export default ISOPage

