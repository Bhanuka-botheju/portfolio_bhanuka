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

    // Simulate API call (replace with your backend logic)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="container max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-center">Contact Me</h1>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 md:w-2/3">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Contact Info */}
        <div className="space-y-4">
          <ContactInfo icon={<FaEnvelope className="text-primary" />} label="Email" value="bhanukabothejuofficial@gmail.com" link="mailto:bhanukabothejuofficial@gmail.com" />
          <ContactInfo icon={<FaPhone className="text-primary" />} label="Phone" value="+94 766420749" link="tel:+94766420749" />
          <ContactInfo icon={<FaMapMarkerAlt className="text-primary" />} label="Address" value="574, Enderamulla, Wattala" />
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
              rows={4}
              required
            />

            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
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
    <div className="flex items-start gap-4">
      <div className="text-xl">{icon}</div>
      <div>
        <p className="font-medium">{label}:</p>
        {link ? (
          <Link
            href={link}
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            {value}
          </Link>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{value}</p>
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
    'w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:outline-none transition'

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
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
        />
      )}
    </div>
  )
}
