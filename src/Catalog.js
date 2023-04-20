import React from "react";
import "./Catalog.css";
import ProductList from "./ProductList";

class Catalog extends React.Component {
  render() {
    let title = "Katalog z dnia " + new Date().toLocaleDateString();
    return (
      <>
        <div className="Catalog">
          <h2>{title}</h2>
          {// to jest komentarz wewnątrz kodu
            }
          {/* to jest komentarz */}
        </div>
        <div>            
          <ProductList/>
        </div>
      </>
    );
  }
}
export default Catalog;
