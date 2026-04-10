import "./Products.css"
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuLayers, LuPaintbrush, LuRuler, LuGlobe } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import vase from "./assets/vase.png"
import loy from "./assets/loy.png"
import cup from "./assets/cup.png"
import latta from "./assets/latta.png"
import soup from "./assets/soup.png"
import { Link } from 'react-router-dom';

function Products() {
  return (
    <section className='products'>

      <div className="products-mobile-header">
        <Link to="/" className="products-mobile-back"><FaArrowLeft /></Link>
        <span className="products-mobile-title">The Curator</span>
        <MdOutlineShoppingBag className="products-mobile-bag" />
      </div>

      <Link to="/" className='products-link'>
        <FaArrowLeft />
        Back to All Products
      </Link>

      <div className="lunar-vase vasee">
        <div className="lunar-vase-hero">
          <img src={vase} alt="The Lunar Vase" className="lunar-vase-img" loading="lazy" />
          <span className="lunar-vase-badge">LIMITED EDITION</span>
        </div>
        <div className="lunar-vase-text">
          <div className="lunar-vase-text-header">
            <span className="lunar-breadcrumb">Exhibits / Ceramics</span>
            <div className="lunar-title-row">
              <h3>The Lunar Vase</h3>
              <div className="lunar-vase-price">
                <h4>$420.00</h4>
                <del>$580.00</del>
              </div>
            </div>
          </div>
          <div className="lunar-vase-textt">
            <div className="lunar-narrative">
              <span className="narrative-label">NARRATIVE</span>
              <p className='text'>Inspired by the shifting shadows of the celestial cycle, this hand-thrown vessel features a dual-texture finish. Raw stoneware meets a luminous, mineral-based glaze that catches the softest evening light.</p>
            </div>
            <div className="lunar-specs">
              <div className="spec-tile">
                <LuLayers className="spec-icon" />
                <span className="spec-label">MATERIAL</span>
                <p>Tuscan Refined Clay</p>
              </div>
              <div className="spec-tile">
                <LuPaintbrush className="spec-icon" />
                <span className="spec-label">FINISH</span>
                <p>Raw Matte Mineral</p>
              </div>
              <div className="spec-tile">
                <LuRuler className="spec-icon" />
                <span className="spec-label">DIMENSIONS</span>
                <p>24cm x 18cm</p>
              </div>
              <div className="spec-tile">
                <LuGlobe className="spec-icon" />
                <span className="spec-label">ORIGIN</span>
                <p>Kyoto, JP</p>
              </div>
            </div>
            <button className="lunar-add-btn desktop-only">
              <MdOutlineShoppingBag /> Add to Cart
            </button>
            <p className='product-text desktop-only'>
              Complimentary carbon-neutral shipping on all artisan ceramics.
            </p>
          </div>
        </div>
      </div>
      <div className="lunar-vase">
        <div className="lunar-vase-hero">
          <img src={vase} alt="The Lunar Vase" className="lunar-vase-img" loading="lazy" />
        </div>
        <div className="lunar-vase-text">
          <div className="lunar-vase-text-header">
            <p>Ceramics / Vessels</p>
            <h1>The Lunar
              Vessel</h1>
            <h3>$420.00 <del>$580.00</del></h3>
          </div>
          <div className="lunar-vase-text-hero">
            <p>Inspired by the shifting shadows of the celestial
              cycle, this hand-thrown vessel features a dual-
              texture finish. Raw stoneware meets a luminous,
              mineral-based glaze that catches the softest evening
              light.</p>
            <h3><span>Material</span>Tuscan Refined Clay</h3>
            <h3><span>Finish</span>Matte Bone & Obsidian Slag</h3>
            <button><MdOutlineShoppingBag />
              Add to Cart</button>
            <small>Complimentary carbon-neutral shipping on all artisan ceramics.</small>
          </div>
        </div>
      </div>

      <div className="curated">
        <div className="curated-text">
          <span>The Story</span>
          <h3>Curated with Intention</h3>
          <p>Each Lunar Vessel is born from the hands of artisans in the High Sierra. The process begins with locally sourced clay, aged for six months to ensure structural integrity and a unique mineral profile.</p>
          <p>The firing process takes place in a wood-fired kiln over seventy-two hours, where the dancing flames create spontaneous patterns on the surface—meaning no two vessels are ever truly identical.</p>
          <span className='meet'>Meet the Maker</span>
        </div>
        <img src={loy} alt="Artisan at work" className="curated-img" loading="lazy" />
      </div>

      <div className="recommend">
        <div className="recommend-header">
          <div className="recommend-logo">
            <span>CURATED SELECTION</span>
            <h3>Recommended Pairings</h3>
          </div>
          <a href="#">View Collection</a>
        </div>
        <div className="recommend-cards">
          <div className="recommend-card">
            <img src={cup} alt="Stone Tea Bowl" loading="lazy" />
            <div className="recommend-card-logo">
              <p>Kitchen</p>
              <span>$45</span>
            </div>
            <p className='recommend-about'>Stone Tea Bowl</p>
          </div>
          <div className="recommend-card">
            <img src={soup} alt="Obsidian Platter" loading="lazy" />
            <div className="recommend-card-logo">
              <p>Ceramics</p>
              <span>$180</span>
            </div>
            <p className='recommend-about'>Obsidian Platter</p>
          </div>
          <div className="recommend-card">
            <img src={latta} alt="Sage Totem" loading="lazy" />
            <div className="recommend-card-logo">
              <p>Decor</p>
              <span>$95</span>
            </div>
            <p className='recommend-about'>Sage Totem</p>
          </div>
        </div>
      </div>

      <div className="products-sticky-bar">
        <button className="sticky-heart"><IoHeartOutline /></button>
        <button className="sticky-add-cart"><MdOutlineShoppingBag /> Add to Cart</button>
      </div>

    </section>
  )
}

export default Products