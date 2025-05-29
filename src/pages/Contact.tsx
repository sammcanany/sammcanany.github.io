import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    }
    try {
      const res = await fetch(
        'https://portfoliobackend-fwm7.onrender.com/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
        Contact
      </h2>
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-12 items-start justify-center">
        {/* Contact Form */}
        <form
          className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 w-full md:w-2/3 flex flex-col gap-6 transition-colors duration-300"
          onSubmit={handleSubmit}
        >
          <label className="text-lg font-medium text-blue-900 dark:text-blue-200">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition"
            />
          </label>
          <label className="text-lg font-medium text-blue-900 dark:text-blue-200">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition"
            />
          </label>
          <label className="text-lg font-medium text-blue-900 dark:text-blue-200">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition"
            />
          </label>
          <button
            type="submit"
            className="mt-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors shadow"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Email'}
          </button>
          {status === 'sending' && (
            <p className="text-blue-700 dark:text-blue-300 font-medium mt-2">
              Please note it may take up to 50 seconds to send, please wait...
            </p>
          )}
          {status === 'sent' && (
            <p className="text-green-600 font-medium mt-2">Message sent!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 font-medium mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
