import React from "react";
import Product from "./Product";

class ProductList extends React.Component {
  render() {

      let products = [
        {
          code: "P01",
          name: "Traditional Merlot",
          description:
            "A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavor profile.",
        },
        {
          code: "P02",
          name: "Classic Chianti",
          description:
            "A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish",
        },
        {
          code: "P03",
          name: "Classic Chianti",
          description:
            "A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish",
        },
        {
          code: "P04",
          name: "Classic Chianti",
          description:
            "A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish",
        },
      ];
      let productComponents = [];
      for (let product of products) {
        productComponents.push(<Product item={product} />);
      }
      return <ul>{productComponents}</ul>;
    };
  }
export default ProductList;
