import { useState } from 'react'
import "./Categories.css"
import { LuLayoutGrid, LuFlower2, LuLayers, LuArmchair, LuSparkles } from "react-icons/lu";
import data from "./data.json"
import smth from "./assets/smth.png"

function Categories({ searchFilter = "" }) {

  const filtered = data.filter(item => {
    const search =
      item.name.toLowerCase().includes(searchFilter.toLowerCase())
    return search
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
            <li><LuLayoutGrid />
              All Collections
            </li>
            <li><LuFlower2 />Ceramics</li>
            <li><LuLayers />Textiles</li>
            <li><LuArmchair />Furniture
            </li>
            <li>
              <LuSparkles />Apothecary
            </li>
          </ul>
        </div>
        <button className="categories-filter-button">Apply Filters</button>
      </div>

      <div className="categories-items">
        <div className="categories-items-header">
          <p>Curated Exhibits</p>
          <h3>
            Results for " <span>{searchFilter || "All"}</span> "
          </h3>
        </div>
        <div className="objects">
          <button className="object">All Objects</button>
          <button className="object">Vases</button>
          <button className="object">Bowls</button>
          <button className="object">Something</button>
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
          {filtered.map(item => (
            <div key={item.id} className="categories-card">
              <img src={item.image} alt={item.name} loading='lazy' />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories