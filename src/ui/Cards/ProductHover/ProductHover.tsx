/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from "../Cards.component";
import "./ProductHover.css";

const ProductHover = () => {
  return (
    <Card className="container">
      <div className="card">
        <div className="imgBx">
          <img
            src="https://assets.codepen.io/4164355/shoes.png"
            alt="product"
          />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </Card>
  );
};

export default ProductHover;
