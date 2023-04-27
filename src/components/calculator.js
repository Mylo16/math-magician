import '../App.css';

function CalculatorUI() {
  return (
    <div className="grid-container">
      <p className="item1">0</p>
      <p className="item2 bg-cream">AC</p>
      <p className="item3 bg-cream">+/-</p>
      <p className="item4 bg-cream">%</p>
      <p className="item5 bg-orange">/</p>
      <p className="item6 bg-cream">7</p>
      <p className="item7 bg-cream">8</p>
      <p className="item8 bg-cream">9</p>
      <p className="item9 bg-orange">x</p>
      <p className="item10 bg-cream">4</p>
      <p className="item11 bg-cream">5</p>
      <p className="item12 bg-cream">6</p>
      <p className="item13 bg-orange">-</p>
      <p className="item14 bg-cream">1</p>
      <p className="item15 bg-cream">2</p>
      <p className="item16 bg-cream">3</p>
      <p className="item17 bg-orange">+</p>
      <p className="item18 bg-cream">0</p>
      <p className="item19 bg-cream">.</p>
      <p className="item20 bg-orange">=</p>
    </div>
  );
}

export default function Calculator() {
  return <CalculatorUI />;
}
