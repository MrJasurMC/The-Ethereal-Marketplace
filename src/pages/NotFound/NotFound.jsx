import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Home, RefreshCw } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const [pizzasThrown, setPizzasThrown] = useState(0);
  const [isThrowing, setIsThrowing] = useState(false);

  const throwPizza = () => {
    setIsThrowing(true);
    setPizzasThrown(prev => prev + 1);
    setTimeout(() => setIsThrowing(false), 900);
  };

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-pizza-small">🍕</div>

        <div className="notfound-404">404</div>

        <h1 className="notfound-title">OOPS!</h1>
        <p className="notfound-subtitle">This page got eaten 🍕</p>
        <p className="notfound-desc">
          The slice you're looking for doesn't exist... or it was too delicious!
        </p>

        <button onClick={throwPizza} className="throw-btn">
          Throw a Pizza! 
          <Pizza size={28} />
        </button>

        {pizzasThrown > 0 && (
          <p style={{marginBottom:"40px"}} className="text-orange-400 mb-8">
            Pizzas thrown: <strong>{pizzasThrown}</strong>
          </p>
        )}

        <div className="action-buttons">
          <Link to="/" className="action-btn home-btn">
            <Home size={22} /> Back to Home
          </Link>
          <button onClick={() => window.location.reload()} className="action-btn retry-btn">
            <RefreshCw size={22} /> Try Again
          </button>
        </div>

        <p style={{marginTop:"20px"}}  className="mt-10 text-sm text-gray-400">
          Inspired by TRIPLETTA PIZZA
        </p>
      </div>

      {isThrowing && <div className="throwing-pizza">🍕</div>}
    </div>
  );
};

export default NotFound;