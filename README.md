# 🎧 Hyperint Assignment — Smart Product UI

A modern React-based product interface showcasing a premium headphone experience with multiple review UI variations, animations, and clean component architecture.

---

## 🚀 Live Demo

👉 *LIVE-LINK*
https://hyperint-assignment-coral.vercel.app/

---

## ✨ Features

### 🛍️ Product UI

* Interactive product hero section
* Image switching gallery
* Pricing and discount display
* Buy Now / Add to Cart UI
* Delivery & warranty indicators

---

### ⭐ Review System (Core Highlight)

Includes multiple review UI variations:

* Classic
* Joyful
* Inspired
* Story
* Smart Filter
* Premium Showcase

👉 Controlled via `ReviewSwitcher.jsx`

---

### 📊 Social Proof

* Average rating display
* Customer count
* Recommendation percentage
* Metrics (sound, comfort, build, value)

---

### 🎨 UI/UX

* Framer Motion animations
* Clean typography (Poppins + Inter)
* Responsive layout
* Component-based structure

---

## 🧠 Tech Stack

* React (Vite)
* Tailwind CSS
* Framer Motion

---

## 📁 Project Structure

```bash id="struct-final"
src/
├── assets/                # Images
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── product/           # Product UI sections
│   │   ├── ProductHero.jsx
│   │   ├── ProductDetails.jsx
│   │   └── SocialProof.jsx
│   │
│   └── reviews/           # Review system
│       ├── variations/
│       │   ├── ReviewClassic.jsx
│       │   ├── ReviewInspired.jsx
│       │   ├── ReviewJoyful.jsx
│       │   ├── ReviewShowcase.jsx
│       │   ├── ReviewSmartFilter.jsx
│       │   └── ReviewStory.jsx
│       │
│       └── ReviewSwitcher.jsx
│
├── data/
│   └── reviews.js         # Static review data
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Setup

```bash id="setup-final"
git clone https://github.com/dhruvmayank9120/Hyperint-Assignment.git
cd Hyperint-Assignment
npm install
npm run dev
```

---

## 👨‍💻 Author

Dhruv Mayank
GitHub: https://github.com/dhruvmayank9120
