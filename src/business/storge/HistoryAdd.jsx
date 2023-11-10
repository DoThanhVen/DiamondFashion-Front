import React, { useEffect, useRef, useState } from "react";
import style from "../../css/business/storge.module.css";
import ProductService from "../../service/ProductService";
import moment from "moment";
import { useSelector } from "react-redux";

function HistoryAdd() {
  const [listProducts, setListProducts] = useState([]);
  const reload = useSelector((state) => state.getreloadPage);
  useEffect(() => {
      getdataProducts();
  }, [reload]);

  const getdataProducts = async () => {
    try {
      const response = await ProductService.getAllProduct();
      response.forEach((product) => {
        product.listStorage.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
      });
      setListProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY HH:mm:ss");
  };

  return (
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
        </div>
        {listProducts.map((product, index) => (
          Array.from({ length: product.listStorage.length }).map((_, rowIndex) => (
            <div key={`${product.id}_${rowIndex}`} className={style.tableBody}>
              <>
                <label className={style.column}>{index + 1}</label>
                <label className={style.column}>{product.id}</label>
                <label className={style.column}>
                  {product?.image_product.length > 0 ? (
                    product?.image_product.map((image) => (
                      <img
                        key={image.id}
                        className={style.image}
                        src={`http://localhost:8080/api/uploadImageProduct/${image.url}`}
                        alt="Hình Ảnh"
                      />
                    ))
                  ) : (
                    <img
                      className={style.image}
                      src={`/images/nullImage.png`}
                      alt="Hình Ảnh"
                    />
                  )}
                </label>
                <label className={style.column}>{product.product_name}</label>
                <label className={style.column}>
                  {product.categoryItem_product.type_category_item}
                </label>
              </>
              <label className={style.column}>
                {product.listStorage[rowIndex]
                  ? product.listStorage[rowIndex].quantity
                  : ""}
              </label>
              <label className={style.column}>
                {product.listStorage[rowIndex]
                  ? formatDate(product.listStorage[rowIndex].create_date)
                  : ""}
              </label>
            </div>
          ))
        ))}
      </div>
    </div>
  );
}

export default HistoryAdd;
