import React, { useEffect, useState } from "react";
import style from "../../css/admin/shop/listshop.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIdShop } from "../../service/Actions";
import { Nav } from "react-bootstrap";

function ListShopWait() {
  const [ListShopWait, setListShopwait] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.allDataShop);

  useEffect(
    () => {
      if (Array.isArray(data)) {
        const matchingShop = data.filter(shop => shop.status === 0);
        setListShopwait(matchingShop);
      }
    },
    [data]
  );
  function formatDateTime(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }
  return (
    <React.Fragment>
      <div className={style.listShopActive}>
        <div className={style.table}>
          <div className={style.tableHeading}>
            <label className={style.column}>ID</label>
            <label className={style.column}>Tên cửa hàng</label>
            <label className={style.column}>Chủ sở hữu</label>
            <label className={style.column}>Ngày tạo</label>
            <label className={style.column}>Trạng thái</label>
            <label className={style.column}>Hình ảnh</label>
            <label className={style.column} />
          </div>
          {ListShopWait.map((value, index) =>
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {index}
              </label>
              <label className={style.column}>
                {value.shop_name}
              </label>
              <label className={style.column}>
                {value.accountShop.username}
              </label>
              <label className={style.column}>
                {formatDateTime(new Date(value.create_date))}
              </label>
              <label className={style.column}>
                <span
                  className={style.status}
                  style={{
                    backgroundColor: value.status === 0 ? "#34219E" : null,
                    padding: "5px 10px"
                  }}
                  value={`${value.status}`}
                >
                  {value.status === 0 ? "Chờ Xác Nhận" : null}
                </span>
              </label>
              <label className={style.column}>
                <img
                  style={{ width: "100px" }}
                  src={`http://localhost:8080/api/uploadImageProduct/${value.image}`}
                  alt="Hình Ảnh"
                />
              </label>

              <label
                className={style.column}
                onClick={() => {
                  dispatch(getIdShop(value.id));
                }}
              >
                <Link to="/admin/shop/shopdetail">Xem Chi Tiết</Link>
              </label>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListShopWait;
