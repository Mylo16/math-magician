import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [dataObject, setDataObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonPress = (e) => {
    setDataObject((prev) => {
      const calcus = calculate(prev, e.target.textContent);
      return { ...prev, ...calcus };
    });
  };
  return (
    <>
      <div id="calculator" className="grid-container">
        <p id="results" className="item1">
          {dataObject.total}
          {dataObject.operation}
          {dataObject.next}
        </p>
        <button type="button" onClick={handleButtonPress} className="item2 bg-cream">AC</button>
        <button type="button" onClick={handleButtonPress} className="item3 bg-cream">+/-</button>
        <button type="button" onClick={handleButtonPress} className="item4 bg-cream">%</button>
        <button type="button" onClick={handleButtonPress} className="item5 bg-orange">/</button>
        <button type="button" onClick={handleButtonPress} className="item6 bg-cream">7</button>
        <button type="button" onClick={handleButtonPress} className="item7 bg-cream">8</button>
        <button type="button" onClick={handleButtonPress} className="item8 bg-cream">9</button>
        <button type="button" onClick={handleButtonPress} className="item9 bg-orange">x</button>
        <button type="button" onClick={handleButtonPress} className="item10 bg-cream">4</button>
        <button type="button" onClick={handleButtonPress} className="item11 bg-cream">5</button>
        <button type="button" onClick={handleButtonPress} className="item12 bg-cream">6</button>
        <button type="button" onClick={handleButtonPress} className="item13 bg-orange">-</button>
        <button type="button" onClick={handleButtonPress} className="item14 bg-cream">1</button>
        <button type="button" onClick={handleButtonPress} className="item15 bg-cream">2</button>
        <button type="button" onClick={handleButtonPress} className="item16 bg-cream">3</button>
        <button type="button" onClick={handleButtonPress} className="item17 bg-orange">+</button>
        <button type="button" onClick={handleButtonPress} className="item18 bg-cream">0</button>
        <button type="button" onClick={handleButtonPress} className="item19 bg-cream">.</button>
        <button type="button" onClick={handleButtonPress} className="item20 bg-orange">=</button>
      </div>
    </>
  );
}
