import React, { useState } from "react";
import style from "../../css/business/product.module.css";
import ModelEdit from "./ModelEdit";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

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
//CHUYỂN ĐỔI TIỀN TỆ
function formatCurrency(price, promotion) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0
  });
  return formatter.format(price - price * (promotion / 100));
}

export default function ListProduct() {
  //MODEL EDIT
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  function handleClickEditProduct(event) {
    const rowElement = event.currentTarget.parentElement.parentElement;

    const columns = Array.from(rowElement.querySelectorAll("label"));
    const idProduct = columns[1].innerText;
    const productName = columns[3].innerText;
    const price = columns[5].innerText;

    setModalData({
      idProduct,
      productName,
      price
    });

    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };
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
  //FORM SEARCH
  const [selectedOption, setSelectedOption] = React.useState("");
  const [valueOption, setValueOption] = React.useState("");
  const handleChangeOption = event => {
    const selectedOptionValue = event.target.value;
    let text = "";
    setValueOption(selectedOptionValue);
    const options = event.target.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === selectedOptionValue) {
        text = options[i].innerText;
        break;
      }
    }
    setSelectedOption(text);
  };

  //LOẠI SẢN PHẨM
  const categories = [
    {
      idCategory: "category1",
      imageCategory: "tiktok.jpg",
      type: "Áo"
    }
  ];

  const [valueCategory, setValueCategory] = React.useState("");
  const handleChangeCategory = event => {
    const selectedOptionValue = event.target.value;
    setValueCategory(selectedOptionValue);
  };
  //PHÂN LOẠI SẢN PHẨM
  const categoryItem = [
    {
      idCategoryItem: "categoryItem1",
      idCategory: "category1",
      type: "Áo Thun"
    }
  ];

  const [valueCategoryItem, setValueCategoryItem] = React.useState("");
  const handleChangeCategoryItem = event => {
    const selectedOptionValue = event.target.value;
    setValueCategoryItem(selectedOptionValue);
  };
  //INPUT NUMBER
  const [numberMinValue, setNumberMinValue] = useState(0);
  const [numberMaxValue, setNumberMaxValue] = useState(0);

  const handleNumberMinChange = event => {
    const newValue = event.target.value;
    setNumberMinValue(newValue);
  };
  const handleNumberMaxChange = event => {
    const newValue = event.target.value;
    setNumberMaxValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={`${style.action}`}>
        <div className={`${style.formSearch}`}>
          <select
            value={valueOption}
            onChange={handleChangeOption}
            className={`${style.optionSelect}`}
          >
            <option value="idProduct">Mã Sản Phẩm</option>
            <option value="productName">Tên Sản Phẩm</option>
          </select>
          <input
            className={`${style.inputSearch}`}
            type="text"
            placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
          />
        </div>
        <div className={`${style.typeProduct}`}>
          <select
            value={valueCategory}
            onChange={handleChangeCategory}
            className={`${style.optionSelectType}`}
          >
            <option value="">Loại Sản Phẩm...</option>
            {categories.map((value, index) =>
              <option key={index} value={value.idCategory}>
                {value.type}
              </option>
            )}
          </select>
          {valueCategory !== ""
            ? <select
                value={valueCategoryItem}
                onChange={handleChangeCategoryItem}
                className={`${style.optionSelectType}`}
              >
                <option value="">Phân Loại Sản Phẩm...</option>
                {categoryItem.map(
                  (value, index) =>
                    valueCategory === value.idCategory
                      ? <option key={index} value={value.idCategoryItem}>
                          {value.type}
                        </option>
                      : null
                )}
              </select>
            : null}
        </div>
        <div className={`${style.storge}`}>
          <label>Kho Hàng</label>
          <input
            type="number"
            className={`${style.inputNumber} ms-3`}
            value={numberMinValue}
            onChange={handleNumberMinChange}
          />
          <span> - </span>
          <input
            type="number"
            className={`${style.inputNumber}`}
            value={numberMaxValue}
            onChange={handleNumberMaxChange}
          />
        </div>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.listProduct}`}>
        <div className={style.table}>
          <div className={style.tableHeading}>
            <label className={style.column}>STT</label>
            <label className={style.column}>Mã SP</label>
            <label className={style.column}>Hình ảnh</label>
            <label className={style.column}>Tên SP</label>
            <label className={style.column}>Loại SP</label>
            <label className={style.column}>Giá SP</label>
            <label className={style.column}>Trạng thái</label>
            <label className={style.column}>Ngày tạo</label>
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
                {formatCurrency(value.price, 0)}
              </label>
              <label className={style.column}>
                <span
                  className={style.status}
                  style={{
                    backgroundColor:
                      value.status === 0
                        ? "#34219E"
                        : value.status === 1
                          ? "green"
                          : value.status === 2 ? "red" : "#E74C3C"
                  }}
                  value={`${value.status}`}
                >
                  {value.status === 0
                    ? "Chờ Phê Duyệt"
                    : value.status === 1
                      ? "Đang Hoạt Động"
                      : value.status === 2 ? "Cấm Hoạt Động" : "Lỗi"}
                </span>
              </label>
              <label className={style.column}>
                {value.createDate}
              </label>
              <label className={style.column}>
                <i
                  className={`bi bi-pencil-square ${style.buttonEdit}`}
                  onClick={handleClickEditProduct}
                />
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
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
