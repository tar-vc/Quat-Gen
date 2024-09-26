import { useState } from "react";
import React from "react";
import "../css/QuatGn.css";

function QuatGn() {
  const [quat, setQuat] = useState("");

  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuat(quotes[randomIndex]);
  }

  

  return (
    <div className="framex">
      <h1>Random Quat generator :</h1>
      <p>{quat}</p>
      <button onClick={getRandomQuote} id="btx">Gen Qt</button>
    </div>
  );
}

export default QuatGn;