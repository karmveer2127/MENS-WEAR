import { useState } from 'react'
import { Link, Links } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'
import products from '../../data/products.json'
import ProductCard from './ProductCard.jsx'

const values = [
  { title: 'Natural fabrics', text: 'Linen, cotton and wool that feel soft and breathe well.' },
  { title: 'Made slowly', text: 'Small batches, so we make only what people will wear.' },
  { title: 'Easy to wear', text: 'Calm colours that go with everything you already own.' },
]

export default function Home() {
  const [email, setEmail] = useState('')


  const featured = products.filter((p) => p.isNew).slice(0, 4)

  function handleSubscribe(e) {
    e.preventDefault() // stop the page from reloading
    toast.info('Thanks for subscribing! (demo only)')
    setEmail('')
  }

  return (
    <>
      <Helmet>
        <title>Mens Wear</title>
      </Helmet>



      <section>
        <div className="outer flex gap-6 items-center justify-evenly box-border mx-auto">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[3px] text-[#85877C]">New Collection</span>

            <h1 className="mt-4 font-['Cormorant_Garamond'] text-[56px] leading-[1.25] tracking-[-1px] text-[#30322C]">Clothing as
              <br /> soft as a cloud</h1>


            <p className="mt-6 max-w-md text-[13px] leading-[1.8] text-[#858585]">Simple pieces in gentle colours, made from natural fabrics for slow and easy days.</p>


            <div className="flex gap-4">
              <button className="mt-6 rounded-full bg-[#30322C] px-7 py-3 text-[10px] uppercase tracking-[1px] text-white">shop Now</button>
              <button className="mt-6 rounded-full bg-white px-7 py-3 text-[10px] uppercase tracking-[1px] text-[#30322C] border border-[#30322C]">Our Store</button>
            </div>
          </div>
          <div>

            <img src="images/96174bf8e4e6eaf0c356b42781ebb7d3.jpg" alt="" className="w-full h-[500px] object-cover rounded-lg mt-6" />
          </div>
        </div>
      </section>


      <section className="mt-10 box-border px-5">

        <h1 className="mt-4 font-['Cormorant_Garamond'] text-[40px] leading-[1.25] tracking-[-1px] text-[#30322C] text-center">
          Overview of the clothing line
        </h1>
        <Link to="/shop" >

          <div className="flex items-center justify-center box-border mt-10 rounded-lg gap-1 w-full max-w-6xl mx-auto">


            <div className="w-3/5">

              <img
                className="h-[500px] w-full object-cover rounded-lg"
                src="/images/20f0b9f2c7df4ced437299b32f2f8d2c.jpg"
                alt=""
              />
            </div>

            <div className="w-2/5 flex flex-col gap-1">
              <img
                className="h-[248px] w-full object-cover rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3ZPAeFy2FKlKXqCcgItrgMI4zB2y6tsgClqJfEVrHg&s=10"
                alt=""
              />

              <img
                className="h-[248px] w-full object-cover rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl66ZBHwrPwfYycz-KbB_XyHxMn6Zz9aYqilvYbAe8ew&s=10"
                alt=""
              />
            </div>

          </div>
        </Link>

        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl">New this season</h2>
            </div>
            <a href="/shop" className="text-sm underline underline-offset-4">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border bg-white/50 p-8">
              <h3 className="mb-2 font-display text-2xl">{v.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{v.text}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}
