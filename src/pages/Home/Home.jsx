import "./Home.css"
import { Link } from 'react-router-dom';
import heroimg from "./assets/heroimg.png"
import herocard from "./assets/herocard.png"
import chair from "./assets/chair.png"
import lamp from "./assets/lamp.png"
import bottle from "./assets/bottle.png"
import pillow from "./assets/pillow.png"
import paint from "./assets/paint.png"
import feather from "./assets/feather.png"
import shoes from "./assets/shoes.png"
import { FaArrowRight } from "react-icons/fa";

function Home() {
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
        <div className="arrivals-cards">
          <div className="arrivals-card">
            <img src={herocard} alt="Scandi Ceramic Vessel" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Scandi Ceramic Vessel</h3>
              <span>$120</span>
            </div>
            <p>Artisan-crafted ceramic vase with a unique volcanic glaze finish. Perfect fo…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={chair} alt="Raw Linen Throw" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Raw Linen Throw</h3>
              <span>$85</span>
            </div>
            <p>Woven from 100% organic European flax. Soft, breathable, and naturally…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={lamp} alt="Architectural Pendant" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Architectural Pendant</h3>
              <span>$340</span>
            </div>
            <p>Sleek matte metal finish with adjustable height. A sculptural statement for any…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={bottle} alt="Amber Apothecary Set" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Amber Apothecary Set</h3>
              <span>$55</span>
            </div>
            <p>Hand-poured vessels for your daily essentials. Features airtight walnut lids…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={pillow} alt="Boucle Accent Cushion" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Boucle Accent Cushion</h3>
              <span>$75</span>
            </div>
            <p>Add tactile warmth to your seating area with this heavy-weight boucle textile…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={paint} alt="Abstract Ink Study" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Abstract Ink Study</h3>
              <span>$210</span>
            </div>
            <p>Limited edition giclee print on archival cotton paper. Signed and numbered by…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={feather} alt="Cast Brass Incense Bowl" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Cast Brass Incense Bowl</h3>
              <span>$95</span>
            </div>
            <p>Solid brass vessel designed for ritual. Develops a beautiful natural patina ove…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
          <div className="arrivals-card">
            <img src={shoes} alt="Vachetta Home Slipper" loading="lazy" />
            <div className="arrivals-card-header">
              <h3>Vachetta Home Slipper</h3>
              <span>$145</span>
            </div>
            <p>Full-grain vegetable-tanned leather with a cushioned ergonomic sole for interior…</p>
            <Link className='arrivals-card-link' to="/">View Details <FaArrowRight /></Link>
          </div>
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
        <h3>The Art of
          Intentional Living</h3>
        <p>Explore our latest editorial on creating
          spaces that breathe and inspire.</p>
          <button>Read Journal</button>
      </div>
    </section>
  )
}

export default Home