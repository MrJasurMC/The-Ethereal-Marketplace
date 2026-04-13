import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import Categories from "./pages/Categories/Categories.jsx"
import Products from "./pages/Products/Products.jsx"
import Footer from "./components/Footer/Footer.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import Modal from "./pages/modal/Modal.jsx"

function App() {
  const [text, setText] = useState("")

  return (
    <section className='container'>
      <Header onSearchChange={setText} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories searchFilter={text} />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/modal/:id' element={<Modal />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
