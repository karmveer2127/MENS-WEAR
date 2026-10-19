import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useCart } from '../../context/CartProvider'

export default function Cart() {
  const { cart, cartTotal, changeQty, removeFromCart } = useCart()

  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <Helmet>
        <title>Your bag | MENS WEAR</title>
      </Helmet>

      <h1 className="mb-8 font-display text-5xl">Your bag</h1>

      {cart.length === 0 ? (
        <div className="rounded-2xl border py-16 text-center">
          <p className="mb-6 text-ink/70">Your bag is empty.</p>
          <Link to="/shop" className="btn">Go shopping</Link>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex gap-4 border-b py-5">
                <div className="h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-stone sm:h-36 sm:w-28">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-2">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="text-sm">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => changeQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="h-8 w-8 rounded-full border hover:bg-stone"
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => changeQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="h-8 w-8 rounded-full border hover:bg-stone"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs uppercase tracking-widest text-ink/60 underline hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm uppercase tracking-widest">Total</p>
            <p className="font-display text-3xl">₹{cartTotal.toLocaleString('en-IN')}</p>
          </div>
          <Link to="/checkout" className=" round-2xl mt-2 w-full text-center bg-[#30322C] py-2 px-3 text-sm tracking-widest text-white transition hover:bg-[#494B43]">
            Checkout
          </Link>
        </>
      )}
    </section>
  )
}
