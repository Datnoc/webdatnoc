import { useState } from 'react'
import toast from 'react-hot-toast'
import Logo from '@/components/Layout/Header/Logo'

const SecurityConsultation = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<{
    name: string
    email: string
    phone: string
    company: string
    consultationType: string
    message: string
  }>({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultationType: 'general',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Consultation request submitted! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        consultationType: 'general',
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
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Full Name</label>
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            value={formData.name}
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
            placeholder='john@company.com'
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
          <label className='block text-white text-sm mb-2'>Company</label>
          <input
            type='text'
            name='company'
            placeholder='Company Name'
            value={formData.company}
            onChange={handleChange}
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Consultation Type</label>
          <select
            name='consultationType'
            value={formData.consultationType}
            onChange={handleChange}
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'>
            <option value='general'>General Security Consultation</option>
            <option value='penetration'>Penetration Testing</option>
            <option value='vulnerability'>Vulnerability Assessment</option>
            <option value='network'>Network Security</option>
            <option value='cloud'>Cloud Security</option>
            <option value='incident'>Incident Response</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm mb-2'>Message</label>
          <textarea
            name='message'
            placeholder='Describe your security concerns...'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0 resize-none'
          />
        </div>
        <button 
          disabled={loading}
          className='hover:text-darkmode font-medium text-18 bg-transparent w-full border border-primary rounded-lg py-3 text-primary hover:bg-primary disabled:opacity-50'>
          {loading ? 'Submitting...' : 'Request Consultation'}
        </button>
      </form>
    </div>
  )
}

export default SecurityConsultation
