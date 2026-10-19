import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import products from '../../data/products.json'
import ProductCard from './ProductCard.jsx'

const categories = ['all', 'linen', 'knitwear', 'dresses', 'accessories']

export default function Shop() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')




  let shown = products.filter((p) => category === 'all' || p.category === category)


  shown = [...shown]
  if (sort === 'low') shown.sort((a, b) => a.price - b.price)
  if (sort === 'high') shown.sort((a, b) => b.price - a.price)

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <Helmet>
        <title>Shop | Mens Wear</title>
      </Helmet>

      <p className="eyebrow">The collection</p>
      <h1 className="mb-8 font-display text-5xl">Shop all</h1>

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
          className="field md:w-auto bg-black text-white"
        >
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <p className="mb-6 text-sm text-ink/60">{shown.length} products</p>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
