import React, { useEffect, useRef, useState } from "react";
import style from "../../css/business/storge.module.css";
import { callAPI } from "../../service/API";
import ProductService from "../../service/ProductService";

export default function AddStorge() {
  const [listProduct, setdataproduct] = useState([]);
  const [valueProduct, setValueProduct] = React.useState("");
  const [quantity, setquantity] = useState('');
  //DANH SÁCH SẢN PHẨM

  const log = useRef(true)
  useEffect(() => {
    if (log.current) {
      getdataProduct()
      log.current = false
    }
  }, []);

  const getdataProduct = async () => {
    const reponse = await callAPI(`/api/product`, "GET");
    setdataproduct(reponse)
  }

  const handleChangeProduct = async (event) => {
    const selectedOptionValue = event.target.value;
    setValueProduct(selectedOptionValue);
  };

  const handelAdd = async () => {
    if (valueProduct === "") {
      alert('Choose product')
    } else {
      const product2 = ProductService.getProductbyId(valueProduct);
      if (product2 !== null) {
        product2.then(async result => {
          await callAPI(`/api/product/updateStorage/${result.storage?.id}/${result.id}`, 'PUT', {
            quantity:quantity,
            create_date:new Date()
          }
          )
        })
      }}
      log.current = true
    }

    return (
      <React.Fragment>
        <div className={style.header}>
          <div className={style.formSearch}>
            <i className={`bi bi-search ${style.icon}`} />
            <input
              className={style.input}
              type="text"
              placeholder="Tìm kiếm..."
            />
          </div>
          <i className={`bi bi-person-circle ${style.iconUser}`} />
        </div>
        <div id={`${style.addProduct}`}>
          <div className={`${style.heading}`}>
            <label>Cập nhật số lượng sản phẩm</label>
          </div>
          <div className={`${style.product}`}>
            <label className={style.label}>Sản phẩm</label>
            <select
              value={valueProduct}
              onChange={handleChangeProduct}
              className={`${style.optionSelect} ${style.input}`}
            >
              <option value="">Sản Phẩm...</option>
              {listProduct.map((value, index) =>
                <option key={index} value={value.id}>
                  {value.product_name}
                </option>
              )}
            </select>
          </div>
          <div className={`${style.quantity}`}>
            <label className={style.label}>Số lượng</label>
            <input type="number" className={style.input} onChange={(e) => { setquantity(e.target.value) }} />
          </div>
          <div className={style.formButton}>
            <button className={style.button} onClick={handelAdd}>
              <i className="bi bi-plus-lg"></i> THÊM
            </button>

          </div>
        </div>
      </React.Fragment>
    );
  }
