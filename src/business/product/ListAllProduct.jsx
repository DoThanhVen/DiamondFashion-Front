import React, { useEffect, useRef, useState } from "react";
import style from "../../css/business/product.module.css";
import ModelEdit from "./updateProduct";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { callAPI } from "../../service/API";

const numberPage = 10;
//DANH SÁCH SẢN PHẨM

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
  const [datacategory, setcategorydata] = useState([]);
  const [categoryItemData, setcategoryItem] = useState([]);
  const [listProduct, setdataproduct] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [valueCategoryItem, setValueCategoryItem] = useState("");

  function handleClickEditProduct(event) {
    const rowElement = event.currentTarget.parentElement.parentElement;

    const columns = Array.from(rowElement.querySelectorAll("label"));
    const id = columns[1].innerText;

    setModalData({
      id, datacategory, getdataProduct
    });

    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  const log = useRef(true)
  useEffect(() => {
    if (log.current) {
      log.current = false
      getdataProduct()
      getdataCategory()
    }
  }, []);

  const getdataProduct = async () => {
    const reponse = await callAPI(`/api/product`, "GET");
    setdataproduct(reponse)
    console.log(reponse)
  }

  const getdataCategory = async () => {
    const reponse = await callAPI(`/api/category`, "GET");
    setcategorydata(reponse)
  }

  const getdataCategoryItem = async (id) => {
    const reponseItem = await callAPI(`/api/category/${id}`, "GET")
    setcategoryItem(reponseItem.listCategory)
  }



  //PAGE
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // if (listProduct.length <= numberPage) {
  //   setTotalPages(1);
  // }
  //  else {
  //   setTotalPages(Math.ceil(listProduct.length / numberPage));
  // }

  // if (currentPage < 1) {
  //   setCurrentPage(1);
  // } else if (currentPage > totalPages) {
  //   setCurrentPage(totalPages);
  // }
  // const startIndex = (currentPage - 1) * numberPage;
  // const endIndex = startIndex + numberPage;

  // const listPage = listProduct.slice(startIndex, endIndex);

  // const handlePageChange = page => {
  //   setCurrentPage(page);
  // };
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


  const handleChangeCategory = (event) => {
    const selectedOptionValue = event.target.value;
    setValueCategory(selectedOptionValue);
    getdataCategoryItem(event.target.value)
  };

  const handleChangeCategoryItem = (event) => {
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
  const handleDelete = async (id) => {
    await callAPI(`/api/product/${id}`, 'DELETE')
    getdataProduct()  
  }

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
          <label>Ngành hàng</label>
          <select
            value={valueCategory}
            onChange={handleChangeCategory}
            className={`${style.optionSelectType}`}
          >
            <option value="">Loại Sản Phẩm...</option>
            {datacategory.map((value, index) => {
              return (
                <option key={index} value={value.id}>{value.type_category}</option>)
            })}
          </select>
          {valueCategory !== "" ? (
            <select
              value={valueCategoryItem}
              onChange={handleChangeCategoryItem}
              className={`${style.optionSelectType}`}
            >
              <option value="">Phân Loại Sản Phẩm...</option>
              {categoryItemData.map((value, index) => {

                return (
                  <option key={index} value={value.id}>
                    {value.type_category_item}
                  </option>)

              })}
            </select>
          ) : null}
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
          {listProduct.map((value, index) =>
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {index + 1}
              </label>
              <label className={style.column}>
                {value.id}
              </label>
              <label className={style.column}>
                {value?.image_product.length > 0 ? (value?.image_product.map((value) => (
                  <img className={style.image} src={`http://localhost:8080/api/uploadImageProduct/${value.url}`} alt="Hình Ảnh"></img>)
                )) : <img className={style.image} src={`/images/nullImage.png`} alt="Hình Ảnh"></img>}
              </label>
              <label className={style.column}>
                {value.product_name}
              </label>
              <label className={style.column}>
                {value.categoryItem_product.type_category_item}
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
                      : value.status === 2 ? "Dừng Hoạt Động" : value.status === 3 ? "Cấm hoạt động" : "Lỗi"

                  }
                </span>
              </label>
              <label className={style.column}>
                {value.create_date}
              </label>
              <label className={style.column}>
                <i
                  className={`bi bi-pencil-square ${style.buttonEdit}`}
                  onClick={handleClickEditProduct}
                />
              </label>
              <label className={style.column}>
                <i
                  className={`bi bi-pencil-square ${style.buttonEdit}`}
                  onClick={() => handleDelete(value.id)}
                />
              </label>
            </div>
          )}
        </div>
        {/* <div className={`${style.buttonPage}`}>
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
        </div> */}
      </div>
      {isModalOpen && <ModelEdit onReload={getdataProduct} data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
