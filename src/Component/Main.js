import React from "react";
import Menu from "./Bookapi";
import Cards from "./Cards";
import "./Style/Main.css"; 

const Main = ({ handleitem }) => {
  return (
    <section className="cards-container">
      {Menu.map((item) => (
        <Cards
          key={item.id}
          item={item}
          handleitem={handleitem}
        />
      ))}
    </section>
  );
};

export default Main;