import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "./amazon.css";

const Amazon = ({ handleClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/list").then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <section>
      {products.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
