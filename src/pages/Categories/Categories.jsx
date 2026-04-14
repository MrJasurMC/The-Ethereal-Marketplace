import "./Categories.css"
import { LuLayoutGrid, LuFlower2, LuLayers, LuArmchair, LuSparkles } from "react-icons/lu";
import data from "./data.json"
import smth from "./assets/smth.png"
import { Link } from 'react-router-dom';
import { useState } from "react";

function Categories({ searchFilter = "" }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.filterType === activeFilter;
    return matchesSearch && matchesFilter;
  })

  return (
    <section className='categories'>
      <div className="categories-filter">
        <div className="categories-filter-header">
          <div className="categories-filter-logo">
            <h3>The Curator's Filter</h3>
            <p>Refine by category</p>
          </div>
          <ul className="categories-filter-ul">
            <li className={activeFilter === "All" ? "active" : ""} onClick={() => setActiveFilter("All")}>
              <LuLayoutGrid /> All Collections
            </li>
            <li className={activeFilter === "Ceramics" ? "active" : ""} onClick={() => setActiveFilter("Ceramics")}>
              <LuFlower2 /> Ceramics
            </li>
            <li className={activeFilter === "Textiles" ? "active" : ""} onClick={() => setActiveFilter("Textiles")}>
              <LuLayers /> Textiles
            </li>
            <li className={activeFilter === "Furniture" ? "active" : ""} onClick={() => setActiveFilter("Furniture")}>
              <LuArmchair /> Furniture
            </li>
            <li className={activeFilter === "Apothecary" ? "active" : ""} onClick={() => setActiveFilter("Apothecary")}>
              <LuSparkles /> Apothecary
            </li>
          </ul>
        </div>
        <button className="categories-filter-button">Apply Filters</button>
      </div>

      <div className="categories-items">
        <div className="categories-items-header">
          <p>Curated Exhibits</p>
          <h3>
            Results for " <span>{searchFilter || activeFilter}</span> "
          </h3>
        </div>
        <div className="objects">
          <button className="object">All Objects</button>
          <button className="object">Vases</button>
          <button className="object">Bowls</button>
          <button className='object'>Something</button>
        </div>
        <div className="categories-card-new">
          <img src={smth} alt="bu yerda rasim bor" loading='lazy' />
          <div className="categories-new-text">
            <div className="categories-new-prices">
              <h3>New Arrival</h3>
              <span>$240</span>
            </div>
            <h3>The Monolith Vase</h3>
            <p>Hand-thrown stoneware with a reactive
              mineral glaze, exploring the boundary…</p>
          </div>
        </div>
        <div className="categories-cards">
          {filtered.length === 0 ? (
            <p className="categories-no-results">No items found.</p>
          ) : (
            filtered.map(item => (
              <Link key={item.id} to={`/modal/${item.id}`} className="categories-card">
                <img src={item.image} alt={item.name} loading='lazy' />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>${item.price.toFixed(2)}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Categories
