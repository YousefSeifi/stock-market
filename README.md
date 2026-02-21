# 📘 README.md

# 🏪 Stock-market :

A fully interactive, responsive navigation header inspired by **StockX.com**, built with:

- **Next.js 13+ (App Router)**
- **Tailwind CSS**
- **next-themes** for Light/Dark Mode
- Modern responsive UX patterns
- Accessible HTML & interactive behavior

🧩 This project focuses on building a **highly detailed navigation system and dynamic product experience**, closely mimicking the structure and interactivity of StockX’s header and product architecture.

---

## 🚀 Features Implemented

### ✅ Dynamic Product Navigation

The website includes a product catalog where:

- Products are displayed as interactive **product cards**
- Each card dynamically routes the user to its own product detail page
- Routing is handled using **Next.js Dynamic Routes**

---

### ✅ 4. Floating Underline

Nav items include a **floating red underline indicator**, similar to StockX, that animates under the active item on hover.

---

### ✅ 5. Light / Dark Mode Toggle

Implemented using:

- `next-themes`
- A custom toggle component
- Works globally with Tailwind `dark:` classes

✔ Switches colors  
✔ Icons react to the theme  
✔ No flash on initial load

---

### ✅ 6. Responsive Design

| Breakpoint        | Behavior                          |
| ----------------- | --------------------------------- |
| **Desktop (lg+)** | Horizontal nav with hover menus   |
| **Tablet (md)**   | Simplified nav with icons         |
| **Mobile (sm)**   | Slide‑in sidebar navigation panel |

Mobile uses an overlay backdrop and a slide‑in panel for navigation.

---

## 📦 Tech Stack

| Technology     | Purpose                  |
| -------------- | ------------------------ |
| `Next.js 13+`  | React framework          |
| `TailwindCSS`  | Utility‑first styling    |
| `next-themes`  | Dark/Light theme system  |
| `React`        | Interactivity & UI logic |
| `lucide-react` | Icon library             |

---

## 🗂 Project Structure

```
src/
├─ app/
│  ├─ layout.jsx
│  ├─ page.jsx
│  ├─ globals.css
│  ├─ Providers.jsx
│  │
│  ├─ login/
│  │   └─ page.jsx
│  │
│  ├─ signup/
│  │   └─ page.jsx
│  │
│  └─ products/
│      └─ [id]/
│          ├─ page.jsx
│          ├─ loading.jsx
│          ├─ error.jsx
│          ├─ not-found.jsx
│          ├─ AccordionSection.jsx
│          ├─ BuySection.jsx
│          ├─ ProductBreadcrumb.jsx
│          ├─ ProductClient.jsx
│          ├─ ProductImageGallery.jsx
│          ├─ SizeSelector.jsx
│          └─ UtilityButtons.jsx
│         
├─ components/
│  ├─ ui/
│  │   ├─ Header.jsx
│  │   └─ Footer.jsx       
│  │
│  ├─ navigation/
│  │   ├─ BrandNavigation.jsx
│  │   ├─ MegaMenu.jsx
│  │   ├─ NewNavigation.jsx
│  │   └─ TrendingNavigation.jsx
│  │
│  ├─ buttons/
│  │   ├─ ArrowIcon.jsx
│  │   ├─ Logo.jsx
│  │   ├─ ThemeToggle.jsx
│  │   ├─ AccordionItem.jsx   
│  │   └─ Icons.jsx           
│  │
│  └─ layout/
│      ├─ BannerCarousel.jsx
│      ├─ ProductCard.jsx
│      └─ RecentlyViewed.jsx
│     
├─ hooks/
│  ├─ productStore.js
│  └─ useProduct.js
│
├─ tailwind.config.js
└─ postcss.config.mjs
```

---

## 🛠 How to Use / Run

### 📌 Install dependencies

```sh
npm install
```

### 📌 Start the development server

```sh
npm run dev
```

Serving at http://localhost:3000 (or another port)

---
