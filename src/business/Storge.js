import React from "react";
import style from "../css/business/storge.module.css";
function Storge() {
  return (
    <React.Fragment>
      <div className={`${style.card}`}>
        <AddProduct />
        <ListProduct />
      </div>
    </React.Fragment>
  );
}
function ListProduct() {
  //DANH SÁCH KHO HÀNG
  const listStorge = [
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },
    {
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      color: "Đỏ",
      size: "XL",
      quantity: 33
    },{
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      },
      {
        productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
        color: "Đỏ",
        size: "XL",
        quantity: 33
      }
  ];
  return (
    <React.Fragment>
      <div id={`${style.tableStorge}`}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Màu Sắc</th>
              <th>Kích Thước</th>
              <th>Số Lượng</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {listStorge.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.productName}</td>
                <td>{value.color}</td>
                <td>{value.size}</td>
                <td>{value.quantity}</td>
                <td><i className="bx bx-pencil" style={{ color: "blue" }}></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

function AddProduct() {
  //DANH SÁCH SẢN PHẨM
  const listProduct = [
    {
      idProduct: "product",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: true
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: true
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: true
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: false
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: true
    },
    {
      idProduct: "product1",
      image: [
        "banner-left.jpg",
        "banner-right-1.jpg",
        "banner-right-2.jpg",
        "tiktok.jpg",
        "facebook.jpg",
        "instagram.jpg",
        "best-saler-1.jpg",
        "best-saler-2.jpg",
        "best-saler-3.jpg"
      ],
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: true
    }
  ];
  const [valueProduct, setValueProduct] = React.useState("");
  const handleChangeProduct = (event) => {
    const selectedOptionValue = event.target.value;
    setValueProduct(selectedOptionValue);
  };
  return (
    <React.Fragment>
      <div id={`${style.addProduct}`}>
        <div className={`${style.heading}`}>
          <label>Thông tin cơ bản</label>
        </div>
        <div className={`${style.product}`}>
          <label>Sản phẩm</label>
          <select
            value={valueProduct}
            onChange={handleChangeProduct}
            className={`${style.optionSelect}`}
          >
            <option value="">Sản Phẩm...</option>
            {listProduct.map((value, index) => (
              <option key={index} value={value.idProduct}>
                {value.productName}
              </option>
            ))}
          </select>
        </div>
        <div className={`${style.color}`}>
          <label>Màu sắc</label>
          <input type="text"></input>
        </div>
        <div className={`${style.size}`}>
          <label>Kích thước</label>
          <input type="text"></input>
        </div>
        <div className={`${style.quantity}`}>
          <label>Số lượng</label>
          <input type="number"></input>
        </div>
        <div className={`${style.action}`}>
          <button className={`${style.buttonCreate}`}>Thêm</button>
          <button className={`${style.buttonEdit}`}>Sửa</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Storge;
