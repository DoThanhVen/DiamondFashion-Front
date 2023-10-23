import React from "react";
import style from "../../css/business/bill.module.css";

//CHUYỂN ĐỔI TIỀN TỆ
function formatCurrency(price, promotion) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0
  });
  return formatter.format(price - price * (promotion / 100));
}
export default function ModelEdit({ data, closeModal }) {
  //DANH SÁCH SẢN PHẨM
  const products = [
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill4",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill4",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill4",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill1",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill4",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill3",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill2",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    },
    {
      idBill: "bill5",
      idProduct: "product1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      image: "banner-left.jpg",
      color: "Đỏ",
      size: "XL",
      amount: 2,
      price: 120000
    }
  ];
  //DANH SÁCH HÓA ĐƠN
  const allBill = [
    {
      idBill: "bill1",
      total: 123000,
      status: "0"
    },
    {
      idBill: "bill2",
      total: 123000,
      status: "1"
    },
    {
      idBill: "bill3",
      total: 123000,
      status: "2"
    },
    {
      idBill: "bill4",
      total: 123000,
      status: "3"
    },
    {
      idBill: "bill5",
      total: 123000,
      status: "4"
    },
    {
      idBill: "bill6",
      total: 123000,
      status: "5"
    },
    {
      idBill: "bill7",
      total: 123000,
      status: "6"
    },
    {
      idBill: "bill8",
      total: 123000,
      status: "7"
    },
    {
      idBill: "bill9",
      total: 123000,
      status: "8"
    },
    {
      idBill: "bill1",
      total: 123000,
      status: "0"
    },
    {
      idBill: "bill2",
      total: 123000,
      status: "1"
    },
    {
      idBill: "bill3",
      total: 123000,
      status: "2"
    },
    {
      idBill: "bill4",
      total: 123000,
      status: "3"
    },
    {
      idBill: "bill5",
      total: 123000,
      status: "4"
    },
    {
      idBill: "bill6",
      total: 123000,
      status: "5"
    },
    {
      idBill: "bill7",
      total: 123000,
      status: "6"
    },
    {
      idBill: "bill8",
      total: 123000,
      status: "7"
    },
    {
      idBill: "bill9",
      total: 123000,
      status: "8"
    }
  ];
  const billCheck = allBill.filter((bill) => bill.idBill === data.idBill);
  const listProducts = products.filter(
    (product) => product.idBill === data.idBill
  );

  //TỔNG TIỀN HÓA ĐƠN
  const totalBill = products.reduce((total, product) => {
    if (product.idBill === data.idBill) {
      const productPrice = product.price * product.amount;
      return total + productPrice;
    }
    return total;
  }, 0);
  return (
    <React.Fragment>
      <div className={`${style.formCardModel}`}>
        <div className={`${style.cardModel}`}>
          <div className={`${style.cardHeadingModel}`}>Chi tiết đơn hàng</div>
          <label className={`mt-3`}>
            Mã hóa đơn: <b>{data.idBill}</b>
          </label>
          <div>
            Trạng thái:{" "}
            <b>
              {billCheck[0].status === "0"
                ? "Chờ Xác Nhận"
                : billCheck[0].status === "1"
                ? "Đã Xác Nhận"
                : billCheck[0].status === "2"
                ? "Chuẩn Bị Hàng"
                : billCheck[0].status === "3"
                ? "Đang Giao"
                : billCheck[0].status === "4"
                ? "Chờ Lấy Hàng"
                : billCheck[0].status === "5"
                ? "Đã Nhận"
                : billCheck[0].status === "6"
                ? "Trả Hàng"
                : billCheck[0].status === "7"
                ? "Đã Hủy"
                : "Giao Thất Bại"}
            </b>
          </div>
          <div>
            Người đặt: <b>Đỗ Thanh Vẹn</b>
          </div>
          <div className={`mb-3`}>
            Ngày đặt: <b>1/10/2023</b>
          </div>
          {billCheck[0].status !== "4" && billCheck[0].status !== "5" ? (
            <select className={`${style.cardModelStatus}`}>
              <option></option>
              <option value="0">Chờ Xác Nhận</option>
              <option value="1">Đã Xác Nhận</option>
              <option value="2">Chuẩn Bị Hàng</option>
              <option value="3">Đang Giao</option>
              <option value="4">Chờ Lấy Hàng</option>
              <option value="5">Đã Nhận</option>
              <option value="6">Trả Hàng</option>
              <option value="7">Đã Hủy</option>
              <option value="8">Giao Không Thành Công</option>
            </select>
          ) : null}
          <div className={`${style.cardModelListProducts}`}>
            <div className={`${style.cardModelProduct}`}>
              <span>#</span>
              <div>Hình Ảnh</div>
              <div>Tên Sản Phẩm</div>
              <div>Màu</div>
              <div>Size</div>
              <div>SL</div>
              <span>Thành Tiền</span>
            </div>
            {listProducts.map((value, index) =>
              value.idBill === data.idBill ? (
                <div className={`${style.cardModelProduct}`}>
                  <span>{index + 1}</span>
                  <div>
                    <img src={`/images/${value.image}`}></img>
                  </div>
                  <div>{value.productName}</div>
                  <div>{value.color}</div>
                  <div>{value.size}</div>
                  <div>{value.amount}</div>
                  <span>{formatCurrency(value.amount * value.price, 0)}</span>
                </div>
              ) : null
            )}
          </div>
          <div className={`mt-3`}>
            Tổng tiền:{" "}
            <b style={{ color: "red" }}>{formatCurrency(totalBill, 0)}</b>
          </div>
          <button className={`btn btn-primary mt-3`}>LƯU THAY ĐỔI</button>
          <span onClick={closeModal} className={`${style.closeModal}`}>
            X
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
