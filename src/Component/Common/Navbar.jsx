import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartProvider'
import { BsCart4 } from 'react-icons/bs'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()


  function linkClass({ isActive }) {
    return `border-b pb-1 text-sm uppercase tracking-widest transition-colors hover:text-sagetext ${isActive ? 'border-sagetext text-sagetext' : 'border-transparent'
      }`
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-3xl tracking-[0.25em]">
          Mens Wear
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-1">

            <BsCart4 />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sagetext px-1 text-[11px] text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="text-sm uppercase tracking-widest md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'CLOSE' : 'OPEN'}
          </button>
        </div>
      </div>


      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t px-6 py-5 md:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
