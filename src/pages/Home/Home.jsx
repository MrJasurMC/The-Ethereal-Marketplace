import "./Home.css"
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import heroimg from "./assets/heroimg.png"
import herocard from "./assets/herocard.png"
import chair from "./assets/chair.png"
import lamp from "./assets/lamp.png"
import bottle from "./assets/bottle.png"
import pillow from "./assets/pillow.png"
import paint from "./assets/paint.png"
import feather from "./assets/feather.png"
import shoes from "./assets/shoes.png"
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CARDS = [
  { img: herocard, alt: "Scandi Ceramic Vessel", name: "Scandi Ceramic Vessel", price: "$120", desc: "Artisan-crafted ceramic vase with a unique volcanic glaze finish. Perfect fo…" },
  { img: chair, alt: "Raw Linen Throw", name: "Raw Linen Throw", price: "$85", desc: "Woven from 100% organic European flax. Soft, breathable, and naturally…" },
  { img: lamp, alt: "Architectural Pendant", name: "Architectural Pendant", price: "$340", desc: "Sleek matte metal finish with adjustable height. A sculptural statement for any…" },
  { img: bottle, alt: "Amber Apothecary Set", name: "Amber Apothecary Set", price: "$55", desc: "Hand-poured vessels for your daily essentials. Features airtight walnut lids…" },
  { img: pillow, alt: "Boucle Accent Cushion", name: "Boucle Accent Cushion", price: "$75", desc: "Add tactile warmth to your seating area with this heavy-weight boucle textile…" },
  { img: paint, alt: "Abstract Ink Study", name: "Abstract Ink Study", price: "$210", desc: "Limited edition giclee print on archival cotton paper. Signed and numbered by…" },
  { img: feather, alt: "Cast Brass Incense Bowl", name: "Cast Brass Incense Bowl", price: "$95", desc: "Solid brass vessel designed for ritual. Develops a beautiful natural patina ove…" },
  { img: shoes, alt: "Vachetta Home Slipper", name: "Vachetta Home Slipper", price: "$145", desc: "Full-grain vegetable-tanned leather with a cushioned ergonomic sole for interior…" },
];

const CARD_WIDTH = 272;
const CARD_GAP = 32;
const STEP = CARD_WIDTH + CARD_GAP;
const VISIBLE = 4;
const MAX_INDEX = CARDS.length - VISIBLE;
const AUTO_INTERVAL = 10000;

function Home() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setIndex(i => (i >= MAX_INDEX ? 0 : i + 1));
  }, []);

  const prev = useCallback(() => {
    setIndex(i => (i <= 0 ? MAX_INDEX : i - 1));
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_INTERVAL);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  return (
    <section className='home'>
      <div className="hero">
        <div className="hero-img-wrapper">
          <img src={heroimg} alt="Modern living room interior" className='heroimage' loading="lazy" />
          <div className="hero-card">
            <p>NEW ARRIVAL</p>
            <h4>The Sculptural Collection by Atelier Lune</h4>
          </div>
        </div>
        <div className="hero-text">
          <p>Volume I: The Spring Edit</p>
          <h1>Curated Living for the</h1>
          <span>Modern Home</span>
          <div className="hero-btns">
            <button className='hero-btn-first'>Explore Collections</button>
            <button className='hero-btn-second'>The Artisan Story</button>
          </div>
        </div>
      </div>

      <div className="arrivals">
        <div className="arrivals-header">
          <div className="arrivals-logo">
            <p>Editor's Choice</p>
            <h3>New Arrivals</h3>
          </div>
          <p>Showing 12 of 48 curated pieces</p>
          <a href="#">VIEW ALL</a>
        </div>

        <div className="arrivals-carousel">
          <button className="carousel-btn carousel-btn-left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <div className="arrivals-carousel-viewport">
            <div
              className="arrivals-cards"
              style={{ transform: `translateX(-${index * STEP}px)` }}
            >
              {CARDS.map((card, i) => (
                <div className="arrivals-card" key={i}>
                  <img src={card.img} alt={card.alt} loading="lazy" />
                  <div className="arrivals-card-header">
                    <h3>{card.name}</h3>
                    <span>{card.price}</span>
                  </div>
                  <p>{card.desc}</p>
                  <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn carousel-btn-right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <button className="arrivals-btn">Discover More Creations</button>
      </div>

      <div className="email">
        <div className="email-letter">Newsletter</div>
        <h3>Join The Curation</h3>
        <p>Receive bi-monthly journals on minimalist living, artisan profiles, and early access to new collections.</p>
        <div className="email-input">
          <input type="text" placeholder='Enter your email' />
          <button>Subscribe</button>
        </div>
        <span>Inspired by intention. Never spam.</span>
      </div>
      <div className="journal">
        <span>Journal</span>
        <h3>The Art of Intentional Living</h3>
        <p>Explore our latest editorial on creating spaces that breathe and inspire.</p>
        <button>Read Journal</button>
      </div>
    </section>
  )
}

export default Home
