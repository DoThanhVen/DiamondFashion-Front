import React, { useEffect, useRef, useState } from "react";
import style from "../../css/business/storge.module.css";
import ProductService from "../../service/ProductService";

const numberPage = 10;
//DANH SÁCH SẢN PHẨM

function HistoryAdd() {
  const [listProduct, setdataproduct] = useState([]);

  const log = useRef(true)
  useEffect(() => {
    if (log.current) {
      log.current = false
      getdataProduct()
    }
  }, []);

  const getdataProduct = async () => {
    const reponse = await ProductService.getAllProduct();
    setdataproduct(reponse)
  }

 
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
            <label className={style.column}>Ngày thực hiện</label>
            <label className={style.column} />
          </div>
          {listProduct.map((value, index) =>
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {index}
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
                {value.storage?.id}
              </label>
              <label className={style.column}>
                {value.storage?.create_date}
              </label>
              <label className={style.column}>
                <i className={`bi bi-pencil-square ${style.buttonEdit}`} />
              </label>
            </div>
          )}
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default HistoryAdd;
