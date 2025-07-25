import Link from 'next/link'
import React, { useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000) // Reset after 4s
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000) // Reset after 4s
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
          Contact Me
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </section>

          {/* Contact Info */}
          <section className="space-y-6">
            <ContactInfo
              icon={<FaEnvelope className="text-blue-600" />}
              label="Email"
              value="bhanukabothejuofficial@gmail.com"
              link="mailto:bhanukabothejuofficial@gmail.com"
            />
            <ContactInfo
              icon={<FaPhone className="text-blue-600" />}
              label="Phone"
              value="+94 766420749"
              link="tel:+94766420749"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt className="text-blue-600" />}
              label="Address"
              value="574, Enderamulla, Wattala"
            />
          </section>

          {/* Contact Form */}
          <section className="mt-8">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <FormField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />
              <FormField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                textarea
                rows={5}
                required
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-shadow duration-300 shadow-md ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'shadow-blue-500/40'
                }`}
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent ✅'
                  : status === 'error'
                  ? 'Error! Try Again'
                  : 'Send Message'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

// Subcomponents
function ContactInfo({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode
  label: string
  value: string
  link?: string
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-gray-900">{label}:</p>
        {link ? (
          <Link
            href={link}
            className="text-blue-600 hover:underline transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </Link>
        ) : (
          <p className="text-gray-700">{value}</p>
        )}
      </div>
    </div>
  )
}

function FormField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  textarea = false,
  rows,
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  type?: string
  textarea?: boolean
  rows?: number
  required?: boolean
}) {
  const baseClasses =
    'w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none transition'

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-gray-900">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          className={baseClasses}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className={baseClasses}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={`Enter your ${label.toLowerCase()}`}
          autoComplete={name === 'email' ? 'email' : undefined}
        />
      )}
    </div>
  )
}
