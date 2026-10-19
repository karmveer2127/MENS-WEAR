import { useCart } from '../../context/CartProvider'

// One product box. Used on the Home page and the Shop page.
export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="group">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-stone">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-cloud px-3 py-1 text-[11px] uppercase tracking-widest">
            New
          </span>
        )}
      </div>

      <p className="text-xs uppercase tracking-widest text-sagetext">{product.category}</p>
      <h3 className="font-display text-2xl">{product.name}</h3>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm">₹{product.price.toLocaleString('en-IN')}</p>
        <button
          onClick={() => addToCart(product)}
          className="rounded-full border border-ink/30 px-4 py-2 text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-cloud"
        >
          Add to bag
        </button>
      </div>
    </article>
  )
}
