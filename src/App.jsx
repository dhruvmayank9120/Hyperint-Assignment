// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Navbar from "./components/layout/Navbar";
import ProductHero from "./components/product/ProductHero";
import ReviewSwitcher from "./components/reviews/ReviewSwitcher";
import Footer from "./components/layout/Footer";
import ProductDetails from "./components/product/ProductDetails";
import SocialProof from "./components/product/SocialProof";

function App() {
  return (
    <div>
      <Navbar />
      <ProductHero />
      <SocialProof />
      <ProductDetails />
      <ReviewSwitcher />
      <Footer />
    </div>
  );
}

export default App;
