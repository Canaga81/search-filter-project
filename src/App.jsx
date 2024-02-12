import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//! Database
import products from "./db/data";
import Card from "./components/Card";

function App() {
  //! UseState
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //! Input'a Yazilan product adlarini tutmaq ucun yazilan kod
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //! Input Filter
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //! Radio'lara tiklayanda melumati gondermek ucun yazilan kod
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //! Button'lara tiklayanda melumati gondermek ucun yazilan kod
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //! Datalari Filter etmek ucun yazilan kod
  //? selected => tiklanan melumat (Radio & Button)
  //? query => input'a gonderilen deyerin saxlanilmasi
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    //? title, company, color, category => Card'lari Button'a ve ya Radio'lara tiklananda filter'leme islemi ucun yarayan adlandirma (Bunlari bezileri Card uzerindede gosterilir(Title))
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, company, title, newPrice, color}) => 
        category === selected ||
        company === selected ||
        title === selected ||
        newPrice === selected ||
        color === selected
      )
    }

    //? img, title, prevPrice, newPrice, reviews, star => Card'in icinde gorulmeli olan data'lar
    return filteredProducts.map(
      ({ img, title, prevPrice, newPrice, reviews, star }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          prevPrice={prevPrice}
          newPrice={newPrice}
          reviews={reviews}
          star={star}
        />
      )
    );
  }

  //! Melumati umumi bir yere yigmaq ucun result yazmisam
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
