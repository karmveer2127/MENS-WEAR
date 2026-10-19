# NUAGE (simple version)

A small clothing-brand website made with React, Tailwind CSS v4 and Vite.
No admin panel and no backend. Products come from `src/data/products.json`.

## Run it

```bash
npm install
npm run dev
```

## Folder guide

```
src/
  main.jsx                 starts the app (router, helmet, cart)
  App.jsx                  list of pages (routes)
  assets/style/style.css   Tailwind + our colours and fonts
  context/                 the shopping bag (saved in localStorage)
  data/products.json       the 20 products
  Component/Common/        Layout, Navbar, Footer, ProductCard,
                           Home, Shop, About, Contact, Cart
```

## Libraries used

- react-router-dom: pages
- react-helmet-async: title of each page
- react-toastify: pop-up messages
- tailwindcss: styling

Checkout and the forms are demos only, nothing is sent anywhere.
