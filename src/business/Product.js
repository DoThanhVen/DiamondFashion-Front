import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import style from "../css/business/product.module.css";
import AddProduct from './product/addProduct'
import ModelEdit from './product/updateProduct'

function ListProduct() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={`${style.card}`}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Tất cả"
                  value="1"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Đang Hoạt Động"
                  value="2"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Hết Hàng"
                  value="3"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Thêm Sản Phẩm"
                  value="4"
                />
              </TabList>
            </Box>
            <TabPanel value="1">{ListProduct(null, null)}</TabPanel>
            <TabPanel value="2">{ListProduct(1, true)}</TabPanel>
            <TabPanel value="3">{ListProduct(1, false)}</TabPanel>
            <TabPanel value="4">
              <AddProduct />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </React.Fragment>
  );
}

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  function handleClickEditProduct(event) {
    const tdElement = event.currentTarget.parentElement;

    const idProduct = tdElement.querySelector("td:last-child").textContent;
    const productName = tdElement.querySelector("td:nth-child(3)").textContent;
    const idCategory = "category1";
    const idCategoryItem = "categoryItem1";
    const price = tdElement.querySelector("td:nth-child(5)").textContent;

    setModalData({ idProduct, productName, price, idCategory, idCategoryItem });

    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  //FORM SEARCH
  const [selectedOption, setSelectedOption] = React.useState("");
  const [valueOption, setValueOption] = React.useState("");
  const handleChangeOption = (event) => {
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

  return (
    <React.Fragment>
      {status === null && cantSell === null ? (
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
                placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"
                  }...`}
              ></input>
            </div>
            <div className={`${style.typeProduct}`}>
              <select
                value={valueCategory}
                onChange={handleChangeCategory}
                className={`${style.optionSelectType}`}
              >
                <option value="">Loại Sản Phẩm...</option>
                {categories.map((value, index) => (
                  <option key={index} value={value.idCategory}>
                    {value.type}
                  </option>
                ))}
              </select>
              {valueCategory !== "" ? (
                <select
                  value={valueCategoryItem}
                  onChange={handleChangeCategoryItem}
                  className={`${style.optionSelectType}`}
                >
                  <option value="">Phân Loại Sản Phẩm...</option>
                  {categoryItem.map((value, index) =>
                    valueCategory === value.idCategory ? (
                      <option key={index} value={value.idCategoryItem}>
                        {value.type}
                      </option>
                    ) : null
                  )}
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
        </React.Fragment>
      ) : null}
      {status === 1 && cantSell === true ? (
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
                placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"
                  }...`}
              ></input>
            </div>
            <div className={`${style.typeProduct}`}>
              <select
                value={valueCategory}
                onChange={handleChangeCategory}
                className={`${style.optionSelectType}`}
              >
                <option value="">Loại Sản Phẩm...</option>
                {categories.map((value, index) => (
                  <option key={index} value={value.idCategory}>
                    {value.type}
                  </option>
                ))}
              </select>
              {valueCategory !== "" ? (
                <select
                  value={valueCategoryItem}
                  onChange={handleChangeCategoryItem}
                  className={`${style.optionSelectType}`}
                >
                  <option value="">Phân Loại Sản Phẩm...</option>
                  {categoryItem.map((value, index) =>
                    valueCategory === value.idCategory ? (
                      <option key={index} value={value.idCategoryItem}>
                        {value.type}
                      </option>
                    ) : null
                  )}
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
        </React.Fragment>
      ) : null}
      {status === 1 && cantSell === false ? (
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
                placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"
                  }...`}
              ></input>
            </div>
            <div className={`${style.typeProduct}`}>
              <select
                value={valueCategory}
                onChange={handleChangeCategory}
                className={`${style.optionSelectType}`}
              >
                <option value="">Loại Sản Phẩm...</option>
                {categories.map((value, index) => (
                  <option key={index} value={value.idCategory}>
                    {value.type}
                  </option>
                ))}
              </select>
              {valueCategory !== "" ? (
                <select
                  value={valueCategoryItem}
                  onChange={handleChangeCategoryItem}
                  className={`${style.optionSelectType}`}
                >
                  <option value="">Phân Loại Sản Phẩm...</option>
                  {categoryItem.map((value, index) =>
                    valueCategory === value.idCategory ? (
                      <option key={index} value={value.idCategoryItem}>
                        {value.type}
                      </option>
                    ) : null
                  )}
                </select>
              ) : null}
            </div>
            <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
          </div>
        </React.Fragment>
      ) : null}
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
export default ListProduct


