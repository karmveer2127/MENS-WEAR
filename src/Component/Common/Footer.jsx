import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-stone/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="mb-3 font-display text-3xl tracking-[0.25em]">Mens Wear</p>
          <p className="max-w-xs text-sm leading-relaxed text-ink/70">
            We make soft clothes. Your fits? That's on you. 😭
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">Your bag</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Email Us FOr Any Quierirs</p>
          <p className="text-sm leading-relaxed text-ink/70">
            MENSWEAR@menswear.example
            <br />
            Don't Come on sunday we are busy at home
          </p>
        </div>
      </div>
    </footer>
  )
}
