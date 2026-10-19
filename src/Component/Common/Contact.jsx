import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'

const infoCards = [
  { title: 'Email', line1: 'hello@nuage.example', line2: 'We reply within 1 day' },
  { title: 'Phone', line1: '+91 98765 43210', line2: 'Mon - Sat, 10am - 6pm' },
  { title: 'Studio', line1: '12 Cloud Street, Indiranagar', line2: 'Bengaluru, India' },
]

const faqs = [
  { q: 'How long does delivery take?', a: 'Usually 3–5 working days across India. Good things take time. Unlike your impulse purchases, we actually deliver.' }, { q: 'Can I return something?', a: 'Yep, you have 14 days to return it, as long as it’s unworn and the tags are still on. Wore it to impress your crush? That’s between you two.' }, { q: 'How do I wash linen?', a: 'Cold wash, gentle cycle, dry in the shade. Treat it right and it gets softer every wash. Unlike some people you know.' }, { q: 'Do you have a size guide?', a: 'Of course. Our fits are loose and relaxed. Stuck between two sizes? Go smaller. Your clothes should be oversized, not your confusion.' }, { q: 'Can I change my order?', a: 'Made a questionable decision? Happens. Message us within 12 hours and we’ll try to fix it before shipping. We can save your order, not your life choices.' }
]

export default function Contact() {
  
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      subject: 'Order help',
      message: ''
    })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    toast.success(`Thanks ${form.name}, we got your message! (demo only)`)
    setForm({ name: '', email: '', subject: 'Order help', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contact | MENS WEAR</title>
      </Helmet>

     
      <section className="bg-linear-to-b from-powder/40 to-cloud">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mb-6 font-display text-5xl md:text-7xl">We would love to hear from you</h1>
          <p className="mx-auto max-w-xl leading-relaxed text-ink/70">
            Questions about an order, sizes or fabrics? Send us a message and a real person will
            reply.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 md:grid-cols-5">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border bg-white/50 p-6 md:col-span-3 md:p-10">
          <h2 className="font-display text-4xl">Send a message</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="w-full block ">Name</label>
              <input id="name" name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 p-2" />
            </div>
            <div>
              <label htmlFor="email" className="w-full">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 p-2" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="field-label">Subject</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="field">
              <option>Order help</option>
              <option>Sizes and fabrics</option>
              <option>Returns</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="field-label">Message</label>
            <textarea id="message" name="message" rows="6" required value={form.message} onChange={handleChange} className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="bg-black hover:bg-black-600 text-white font-bold py-2 px-4 rounded-md">
            Send message
          </button>
        </form>

        <aside className="space-y-6 md:col-span-2">
          <img
            src="/images/65180697847bf6b273d33e0560ae6620.jpg"
            alt="Nuage studio"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <div className="rounded-3xl bg-black text-white p-8">
            <h3 className="mb-4 font-display text-2xl">Opening hours</h3>
            <ul className="space-y-2 text-sm text-ink/70">
              <li className="flex justify-between"><span>Mon - sat</span><span>12am - 9pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>WE ARE BUSY AT HOME</span></li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {infoCards.map((c) => (
          <div key={c.title} className="rounded-2xl border bg-white/50 p-8 text-center">
            <p className="eyebrow">{c.title}</p>
            <p className="font-display text-2xl">{c.line1}</p>
            <p className="mt-1 text-sm text-ink/60">{c.line2}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6">
        <p className="eyebrow text-center">Quick answers</p>
        <h2 className="mb-8 text-center font-display text-4xl md:text-5xl">Questions we get a lot</h2>
        {faqs.map((f) => (
          <details key={f.q} className="border-b py-5">
            <summary className="cursor-pointer text-sm uppercase tracking-widest">{f.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
          </details>
        ))}
      </section>
    </>
  )
}
