import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const stats = [
  { number: '2024', label: 'Year we started' },
  { number: '20+', label: 'Pieces in the shop' },
  { number: '100%', label: 'Natural fabrics' },
  { number: '5', label: 'Small workshops' },
]

const values = [
  { title: 'Gentle on people', text: 'We work with small workshops that pay fair wages and give workers proper breaks.' },
  { title: 'Gentle on earth', text: 'Linen, cotton and wool. We use very little plastic and reuse our boxes.' },
  { title: 'Made to last', text: 'Strong stitching and simple shapes, so you can wear a piece for years.' },
]

const steps = [
  { title: '1. Sketch', text: 'Every piece starts as a drawing in our small studio.' },
  { title: '2. Pick the fabric', text: 'We test fabrics ourselves and keep only the softest ones.' },
  { title: '3. Sew in small batches', text: 'Workshops make a few pieces at a time, so nothing is wasted.' },
  { title: '4. Pack and send', text: 'We fold each order by hand and send it in recycled paper.' },
]

const gallery = [
  '0f0843da1c0cdb7838419b5b6c0140d7.jpg',
  '10d5492235d178e05b819e96b64b1ccf.jpg',
  '3318dd4ec248f8bee601c23e77dd2320.jpg',
  '65180697847bf6b273d33e0560ae6620.jpg',
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Men's Wear</title>
      </Helmet>

      {/* top banner */}
      <section className="bg-linear-to-b from-lavender/40 to-cloud">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow">About us</p>
          <h1 className="mb-6 font-display text-5xl md:text-7xl">Clothes that feel calm</h1>
          <p className="mx-auto max-w-2xl leading-relaxed text-ink/70">
            Nuage is a small clothing brand. We make soft, simple pieces for people who like
            quiet colours and easy days.
          </p>
        </div>
      </section>

      {/* our story */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <img
          src="/images/4357c16ce23eef25989436c6486d133c.jpg"
          alt="Nuage studio piece"
          className="aspect-[4/5] w-full rounded-3xl object-cover md:order-last"
        />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mb-6 font-display text-4xl md:text-5xl">Born from a slow morning</h2>
          <p className="mb-4 leading-relaxed text-ink/70">
            Nuage means "cloud" in French. The idea came on a slow Sunday morning, when we
            noticed we always reached for the same soft shirt and loose trousers.
          </p>
          <p className="mb-4 leading-relaxed text-ink/70">
            So we decided to make clothes like that: no loud logos, no rush, just pieces that
            are comfortable from morning to night.
          </p>
          <p className="leading-relaxed text-ink/70">
            Today we design everything in our studio and make it in limited numbers, so we
            only make what people will really wear.
          </p>
        </div>
      </section>

      {/* numbers */}
      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-sagetext">{s.number}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow text-center">What we believe</p>
        <h2 className="mb-10 text-center font-display text-4xl md:text-5xl">Our values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-powder/30 p-8">
              <h3 className="mb-3 font-display text-2xl">{v.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* how we make things */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <p className="eyebrow">How it works</p>
        <h2 className="mb-10 font-display text-4xl md:text-5xl">From sketch to your door</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="border-t-2 border-sage pt-4">
              <h3 className="mb-2 font-display text-xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* photos */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {gallery.map((img) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt="Nuage look"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* end call to action */}
      <section className="mx-auto mt-16 max-w-3xl px-6">
        <div className="rounded-3xl bg-lavender/50 px-6 py-12 text-center">
          <h2 className="mb-3 font-display text-4xl">Want to see the clothes?</h2>
          <p className="mb-6 text-sm text-ink/70">Have a look at the full collection, or say hello.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn">Shop now</Link>
            <Link to="/contact" className="btn-outline">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
