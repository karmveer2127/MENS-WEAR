import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCart } from '../../context/CartProvider'

const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`

export default function Checkout() {
  const [payment, setPayment] = useState('card')
  const { cart, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  function handlePlaceOrder(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setPayment('card')
    toast.info('Demo checkout complete. No payment was processed.')
    clearCart()
    navigate('/shop')
  }

  return (
    <section className="min-h-screen bg-white px-5 py-12 text-[#30322C] md:px-16">
      <Helmet>
        <title>Checkout | Mens Wear</title>
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 font-serif text-3xl tracking-[6px]">Mens Wear</h1>
        <p className="mb-12 text-sm text-gray-500">
          <Link to="/">Home</Link> / <Link to="/cart">Your bag</Link> / Checkout
        </p>

        {cart.length === 0 ? (
          <div className="bg-[#EEE9E1] px-6 py-16 text-center">
            <h2 className="mb-3 font-serif text-2xl">Your bag is empty</h2>
            <p className="mb-7 text-sm text-gray-600">Add something you love before checking out.</p>
            <Link
              to="/shop"
              className="inline-block bg-[#30322C] px-7 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-[#494B43]"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <form className="lg:col-span-2" onSubmit={handlePlaceOrder}>
              <h2 className="mb-7 font-serif text-2xl">Checkout</h2>

              <section className="mb-10">
                <h3 className="mb-5 text-lg">Contact information</h3>
                <input
                  type="number"
                  name="number"
                  autoComplete="number"
                  required
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className="w-full border border-[#D8D2C9] bg-transparent p-4 outline-none focus:border-[#30322C]"
                />
              </section>

              <section className="mb-10">
                <h3 className="mb-5 text-lg">Shipping address</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input type="text" name="firstName" autoComplete="given-name" required placeholder="First name" aria-label="First name" className="checkout-input" />
                  <input type="text" name="lastName" autoComplete="family-name" required placeholder="Last name" aria-label="Last name" className="checkout-input" />
                  <input type="text" name="address" autoComplete="street-address" required placeholder="Address" aria-label="Address" className="checkout-input md:col-span-2" />
                  <input type="text" name="apartment" placeholder="Apartment, suite (optional)" aria-label="Apartment or suite (optional)" className="checkout-input md:col-span-2" />
                  <input type="text" name="city" autoComplete="address-level2" required placeholder="City" aria-label="City" className="checkout-input" />
                  <input type="text" name="postalCode" autoComplete="postal-code" required placeholder="Postal code" aria-label="Postal code" className="checkout-input" />
                  <input type="text" name="state" autoComplete="address-level1" required placeholder="State" aria-label="State" className="checkout-input" />
                  <input type="tel" name="phone" autoComplete="tel" required placeholder="Phone number" aria-label="Phone number" className="checkout-input" />
                </div>
              </section>

              <section>
                <h3 className="mb-5 text-lg">Payment method</h3>
                <div className="border border-[#D8D2C9]">
                  {[
                    { value: 'card', label: 'Credit / Debit Card' },
                    { value: 'upi', label: 'UPI' },
                    { value: 'cod', label: 'Cash on Delivery' },
                  ].map((method, index) => (
                    <label
                      key={method.value}
                      className={`flex cursor-pointer items-center gap-3 p-4 ${
                        index < 2 ? 'border-b border-[#D8D2C9]' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={payment === method.value}
                        onChange={(event) => setPayment(event.target.value)}
                      />
                      {method.label}
                    </label>
                  ))}
                </div>
              </section>
              <button
                type="submit"
                className="mt-8 w-full bg-[#30322C] py-4 text-sm tracking-widest text-white transition hover:bg-[#494B43]"
              >
                PLACE ORDER
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Demo checkout only. No payment will be collected.
              </p>
            </form>

            <aside className="h-fit bg-[#ccc] p-6 md:p-8">
              <h2 className="mb-7 font-serif text-xl">Order summary</h2>

              <ul className="mb-6 space-y-5">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <img
                      src={`/images/${item.image}`}
                      alt={item.name}
                      className="h-24 w-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm">{item.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">Quantity: {item.qty}</p>
                      <p className="mt-2">{formatPrice(item.price * item.qty)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-b border-[#D8D2C9] pb-5 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="mb-7 mt-5 flex justify-between">
                <span className="text-lg">Total</span>
                <span className="text-lg">{formatPrice(cartTotal)} INR</span>
              </div>

              <p className="text-center text-xs leading-5 text-gray-500">
                Secure checkout · Easy returns · Thoughtfully made
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
