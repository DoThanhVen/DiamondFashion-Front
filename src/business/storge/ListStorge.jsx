import React, { useState } from "react";
import style from "../../css/business/storge.module.css";
import Nav from "react-bootstrap/Nav";

const numberPage = 10;
//DANH SÁCH SẢN PHẨM
const listProduct = [
  {
    idProduct: "product",
    image: "instagram.jpg",
    productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
    typeCategory: "Áo",
    typeCategoryItem: "Áo Sơ Mi",
    price: 123000,
    createDate: "23/10/2023",
    status: 1
  },
  {
    idProduct: "product002",
    image: "facebook.jpg",
    productName: "Áo Thun Nam",
    typeCategory: "Áo Thun",
    typeCategoryItem: "Áo Thun",
    price: 123000,
    createDate: "23/10/2023",
    status: 1
  }
];
function ListStorge() {
  //PAGE
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listProduct.length / numberPage);

  if (currentPage < 1) {
    setCurrentPage(1);
  } else if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }
  const startIndex = (currentPage - 1) * numberPage;
  const endIndex = startIndex + numberPage;

  const listPage = listProduct.slice(startIndex, endIndex);

  const handlePageChange = page => {
    setCurrentPage(page);
  };
  return (
    <React.Fragment>
      <div className={`${style.listProduct}`}>
        <div className={style.table}>
          <div className={style.tableHeading}>
            <label className={style.column}>STT</label>
            <label className={style.column}>Mã SP</label>
            <label className={style.column}>Hình ảnh</label>
            <label className={style.column}>Tên SP</label>
            <label className={style.column}>Loại SP</label>
            <label className={style.column}>Số lượng</label>
            <label className={style.column} />
          </div>
          {listPage.map((value, index) =>
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {currentPage * numberPage - numberPage + index + 1}
              </label>
              <label className={style.column}>
                {value.idProduct}
              </label>
              <label className={style.column}>
                <img
                  className={style.image}
                  src={`/images/${value.image}`}
                  alt="Hình Ảnh"
                />
              </label>
              <label className={style.column}>
                {value.productName}
              </label>
              <label className={style.column}>
                {value.typeCategoryItem}
              </label>
              <label className={style.column}>
                999
              </label>
              <label className={style.column}>
                <i className={`bi bi-pencil-square ${style.buttonEdit}`} />
              </label>
            </div>
          )}
        </div>
        <div className={`${style.buttonPage}`}>
          <Nav.Link className={`btn`} onClick={() => handlePageChange(1)}>
            <i className="bi bi-chevron-bar-left" />
          </Nav.Link>
          <Nav.Link
            className={`btn`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i className="bi bi-caret-left" />
          </Nav.Link>
          <Nav.Link
            className={`btn`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <i className="bi bi-caret-right" />
          </Nav.Link>
          <Nav.Link
            className={`btn`}
            onClick={() =>
              handlePageChange(Math.ceil(listProduct.length / numberPage))}
          >
            <i className="bi bi-chevron-bar-right" />
          </Nav.Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListStorge;
