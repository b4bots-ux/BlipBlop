'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: '',
    website: '',
    category: '',
    description: '',
    submitter_email: '',
    pricing: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.from('Bot_submissions').insert([
      {
        name: form.name,
        website: form.website,
        category: form.category,
        description: form.description,
        submitter_email: form.submitter_email,
        pricing: form.pricing,
      },
    ])

    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Submitted successfully!')
      setForm({
        name: '',
        website: '',
        category: '',
        description: '',
        submitter_email: '',
        pricing: '',
      })
    }

    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Submit a Bot</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Bot name" className="w-full border p-3" required />

        <input name="website" value={form.website} onChange={handleChange} placeholder="Website URL" className="w-full border p-3" />

        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full border p-3" />

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-3" required />

        <input name="submitter_email" value={form.submitter_email} onChange={handleChange} placeholder="Your email" className="w-full border p-3" type="email" required />

        <input name="pricing" value={form.pricing} onChange={handleChange} placeholder="Pricing (optional)" className="w-full border p-3" />

        <button type="submit" disabled={loading} className="bg-black text-white px-4 py-3 rounded">
          {loading ? 'Submitting...' : 'Submit Bot'}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  )
}