import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

class NewProducts extends Component {
  render() {

    const items = [
      {
        id: 1,
        imgSrc: 'images/best-saler-4.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: false,
      },
      {
        id: 2,
        imgSrc: 'images/best-saler-3.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },
      {
        id: 3,
        imgSrc: 'images/best-saler-2.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: false,
      },
      {
        id: 4,
        imgSrc: 'images/best-saler-1.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },
      {
        id: 5,
        imgSrc: 'images/best-saler-1.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },
      {
        id: 6,
        imgSrc: 'images/best-saler-1.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },
      {
        id: 7,
        imgSrc: 'images/best-saler-1.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },
      {
        id: 8,
        imgSrc: 'images/best-saler-1.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },
      {
        id: 9,
        imgSrc: 'images/best-saler-1.jpg',
        discount: '-50%',
        name: 'HP Notebook',
        price: '$999',
        available: 6,
        stars: 5,
        isNew: true,
      },

    ];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>

          {items.map((item) => (
            <div key={item.id} className="d-flex flex-column align-items-center justify-content-around product-item my-3 px-2">
              <div className="product">
                <img src={item.imgSrc} alt="" />
                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                  <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                  <li className="icon mx-3"><span className="far fa-heart"></span></li>
                  <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                </ul>
              </div>
              <div className="tag bg-red">sale</div>
              <div className="title pt-4 pb-1">{item.name}</div>
              <div className="d-flex align-content-center justify-content-center">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
              </div>
              <div className="price">{item.price}</div>
            </div>
          ))}


        </Slider>
      </div>
    );
  }
}

export default NewProducts;