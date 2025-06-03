import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'

const sendContact = async (data: { name: string; email: string; message: string }) => {
  const res = await fetch('https://portfoliobackend-fwm7.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to send')
  return res.json()
}

const Contact = () => {
  const mutation = useMutation({ mutationFn: sendContact })

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        await mutation.mutateAsync(value)
        formApi.reset()
      }
      catch (error) {
        console.error('Error sending contact form:', error)
      }
    }
  })

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-blue-900 dark:to-black px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
        Contact
      </h2>
      <form
        className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 w-full max-w-lg flex flex-col gap-6 transition-colors duration-300"
        onSubmit={form.handleSubmit}
      >
        <form.Field
          name="name"
          validators={{
            onChange: (value) =>
              !value.value.trim() ? 'Name is required' : undefined
          }}
        >
          {(field) => (
            <label className="text-lg font-medium text-blue-900 dark:text-blue-200">
              Name
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                autoComplete="name" // Added for autocomplete
                className="mt-1 w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition"
              />
              {field.state.meta.errors?.[0] && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors[0]}
                </div>
              )}
            </label>
          )}
        </form.Field>
        <form.Field
          name="email"
          validators={{
            onChange: (value) =>
              !value
                ? 'Email is required'
                : !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.value)
                ? 'Invalid email'
                : undefined
          }}
        >
          {(field) => (
            <label className="text-lg font-medium text-blue-900 dark:text-blue-200">
              Email
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                autoComplete="email" // Added for autocomplete
                className="mt-1 w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition"
              />
              {field.state.meta.errors?.[0] && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors[0]}
                </div>
              )}
            </label>
          )}
        </form.Field>
        <form.Field
          name="message"
          validators={{
            onChange: (value) =>
              !value.value.trim() ? 'Message is required' : undefined
          }}
        >
          {(field) => (
            <label className="text-lg font-medium text-blue-900 dark:text-blue-200">
              Message
              <textarea
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                rows={5}
                autoComplete="off" // Usually off for message fields
                className="mt-1 w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition"
              />
              {field.state.meta.errors?.[0] && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors[0]}
                </div>
              )}
            </label>
          )}
        </form.Field>
        <button
          type="submit"
          className="mt-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors shadow"
          disabled={form.state.isSubmitting || mutation.isPending}
        >
          {form.state.isSubmitting || mutation.isPending
            ? 'Sending...'
            : 'Send Email'}
        </button>
        {mutation.isError && (
          <div className="text-red-500 mt-2">
            Something went wrong. Please try again.
          </div>
        )}
        {mutation.isSuccess && (
          <div className="text-green-600 mt-2">Message sent!</div>
        )}
      </form>
    </section>
  )
}

export default Contact
