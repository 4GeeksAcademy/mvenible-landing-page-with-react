import React from "react";

//include images into your bundle
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
  // Card array with sample data
  const cardArray = [
    {
      title: "Card title",
      text: "This is the first card description. It contains some sample text to demonstrate the card component.",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=325&fit=crop",
    },
    {
      title: "Card title",
      text: "This is the second card description. Another example of card content.",
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=325&fit=crop",
    },
    {
      title: "Card title",
      text: "This is the third card description. Final example of the card component.",
      imageUrl:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=325&fit=crop",
    },
    {
      title: "Card title",
      text: "This is the fourth card description. Now we have four cards in one row.",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=325&fit=crop",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="bg-light rounded p-4 shadow-sm">
          <Jumbotron />
        </div>
      </div>

      <div className="container">
        <div className="d-flex row mt-5 p-0 text-center justify-content-center">
          {/* Using the Card component to render each card */}
          {cardArray.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
