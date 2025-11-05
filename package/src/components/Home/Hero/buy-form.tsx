import { useState } from 'react'
import toast from 'react-hot-toast'
import Logo from '@/components/Layout/Header/Logo'
import { SecurityServicesData } from '@/app/api/data'

interface SecurityService {
  name: string
  description: string
}

const SecurityRequest = () => {
  const [loading, setLoading] = useState(false)
  const [services] = useState<SecurityService[]>(SecurityServicesData)
  const [formData, setFormData] = useState<{
    service: string
    companyName: string
    email: string
    phone: string
    message: string
  }>({
    service: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleDropdownSelect = (service: SecurityService) => {
    setFormData((prevData) => ({
      ...prevData,
      service: service.name,
    }))
    setIsDropdownOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Security audit request submitted successfully!')
      setFormData({
        service: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      toast.error('An error occurred. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-md mx-auto p-4'>
      <div className='flex justify-center mb-16'>
        <Logo />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4 relative'>
          <label className='block text-white text-sm mb-2'>Security Service</label>
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className='cursor-pointer text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 text-start'>
            {formData.service || 'Select a service'}
          </div>
          {isDropdownOpen && (
            <div className='absolute z-10 bg-dark border border-dark_border/60 mt-1 rounded-md w-full max-h-60 overflow-y-auto'>
              {services.map((service) => (
                <div
                  key={service.name}
                  onClick={() => handleDropdownSelect(service)}
                  className='px-3 bg-dark_grey text-white hover:text-darkmode py-2 hover:bg-primary cursor-pointer'>
                  <div className='font-medium'>{service.name}</div>
                  <div className='text-sm text-muted/60'>{service.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Company Name</label>
          <input
            type='text'
            name='companyName'
            placeholder='Your company name'
            value={formData.companyName}
            onChange={handleChange}
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='your.email@company.com'
            value={formData.email}
            onChange={handleChange}
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Phone</label>
          <input
            type='tel'
            name='phone'
            placeholder='+1 (555) 000-0000'
            value={formData.phone}
            onChange={handleChange}
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Message</label>
          <textarea
            name='message'
            placeholder='Tell us about your security needs...'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0 resize-none'
          />
        </div>
        <button 
          disabled={loading}
          className='text-darkmode font-medium text-18 bg-primary w-full border border-primary rounded-lg py-3 hover:text-primary hover:bg-transparent disabled:opacity-50'>
          {loading ? 'Submitting...' : 'Request Audit'}
        </button>
      </form>
    </div>
  )
}

export default SecurityRequest
