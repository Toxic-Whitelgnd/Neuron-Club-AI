import { useState } from "react";
import "./course.css"

const Course = () => {
  const [cards] = useState([
    {
      title: "Card-1",
      text: "hi myself chirag",
    },
    {
      title: "Card-2",
      text: "hi myself chirag",
    },
    {
      title: "Card-3",
      text: "hi myself chirag",
    },
    {
      title: "Card-4",
      text: "hi myself chirag",
    },
    {
      title: "Card-5",
      text: "hi myself chirag",
    },
    {
      title: "Card-6",
      text: "hi myself chirag",
    },
  ]);
  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Cards</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="btn">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
