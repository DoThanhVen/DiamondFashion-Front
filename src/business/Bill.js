import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "../css/business/bill.module.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

//CHUYỂN ĐỔI TIỀN TỆ
function formatCurrency(price, promotion) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0
  });
  return formatter.format(price - price * (promotion / 100));
}

function ModelEdit({ data, closeModal }) {
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
          <div  className={`mb-3`}>
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

function Bill() {
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
                  label="Chờ xác nhận"
                  value="2"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Chờ lấy hàng"
                  value="3"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Đang giao"
                  value="4"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Đã giao"
                  value="5"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Đã hủy"
                  value="6"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Trả hàng/Hoàn tiền"
                  value="7"
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                      fontWeight: "bold"
                    }
                  }}
                  label="Giao không thành công"
                  value="8"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <AllBill />
            </TabPanel>
            <TabPanel value="2">
              <UnpaidBill />
            </TabPanel>
            <TabPanel value="3">
              <ShipmentBill />
            </TabPanel>
            <TabPanel value="4">
              <ShippingBill />
            </TabPanel>
            <TabPanel value="5">
              <CompletedBill />
            </TabPanel>
            <TabPanel value="6">
              <CanceledBill />
            </TabPanel>
            <TabPanel value="7">
              <ReturnBill />
            </TabPanel>
            <TabPanel value="8">
              <FailedBill />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </React.Fragment>
  );
}
function AllBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const listBill = [
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
  const allBill = listBill.reduce((uniqueList, currentBill) => {
    if (!uniqueList.some((item) => item.idBill === currentBill.idBill)) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {allBill.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Giao Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Trạng Thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allBill.map((value, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td style={{ position: "relative" }}>
                  <span
                    style={{
                      backgroundColor:
                        value.status === "0"
                          ? "#34219E"
                          : value.status === "1"
                          ? "#34219E"
                          : value.status === "2"
                          ? "#34219E"
                          : value.status === "3"
                          ? "#2ECC71"
                          : value.status === "4"
                          ? "#2ECC71"
                          : value.status === "5"
                          ? "#2ECC71"
                          : value.status === "6"
                          ? "orange"
                          : value.status === "7"
                          ? "red"
                          : "#E74C3C",
                      width: "150px",
                      height: "80%",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "4px",
                      color: "white",
                      position: "absolute",
                      fontSize: "14px"
                    }}
                    value={`${value.status}`}
                  >
                    {value.status === "0"
                      ? "Chờ Xác Nhận"
                      : value.status === "1"
                      ? "Đã Xác Nhận"
                      : value.status === "2"
                      ? "Chuẩn Bị Hàng"
                      : value.status === "3"
                      ? "Đang Giao"
                      : value.status === "4"
                      ? "Chờ Lấy Hàng"
                      : value.status === "5"
                      ? "Đã Nhận"
                      : value.status === "6"
                      ? "Trả Hàng"
                      : value.status === "7"
                      ? "Đã Hủy"
                      : "Giao Thất Bại"}
                  </span>
                </td>
                <td onClick={handleClickChiTiet}>Chi tiết</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function UnpaidBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "0" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableUnpaid}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Ngày Đặt Hàng</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Ngày Đặt Hàng</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                  <button className={`${style.buttonSubmit}`}>Duyệt Đơn</button>
                </td>
                <td><input type="checkbox"></input></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function CanceledBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "7" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableReturn}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Ngày Hủy Đơn</th>
              <th>Lý Do Hủy Đơn</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Ngày Hủy Đơn</td>
                <td>Lý Do Hủy Đơn</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function ShipmentBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "4" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableShipping}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Ngày Đặt Hàng</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Ngày Đặt Hàng</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function ShippingBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "3" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableShipping}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Ngày Đặt Hàng</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Ngày Đặt Hàng</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function CompletedBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "5" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableCompleted}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Ngày Đặt Hàng</th>
              <th>Ngày Nhận Hàng</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Ngày Đặt Hàng</td>
                <td>Ngày Nhận Hàng</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function ReturnBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "6" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableReturn}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Ngày Trả Hàng</th>
              <th>Lý Do</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Ngày Trả Hàng</td>
                <td>Lý Do Trả Hàng Do Đéo Thích Nhận Hàng Nên Boom Hàng</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}
function FailedBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  const listUnpaid = allBill.reduce((uniqueList, currentBill) => {
    if (
      currentBill.status === "8" &&
      !uniqueList.some((item) => item.idBill === currentBill.idBill)
    ) {
      uniqueList.push(currentBill);
    }
    return uniqueList;
  }, []);
  function handleClickChiTiet(event) {
    const tdElement = event.currentTarget.parentElement;

    const idBill = tdElement.querySelector("td:nth-child(2)").textContent;

    setModalData({ idBill });

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
      <div className={`${style.formSearch}`}>
        <select
          value={valueOption}
          onChange={handleChangeOption}
          className={`${style.optionSelect}`}
        >
          <option value="idBill">Mã đơn hàng</option>
          <option value="customerName">Tên người mua</option>
          <option value="productName">Sản phẩm</option>
        </select>
        <input
          className={`${style.inputSearch}`}
          type="text"
          placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"}...`}
        ></input>
        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
      </div>
      <div className={`${style.updateStatusAll} mt-4 mb-3`}>
        <div className={`${style.cardHeadingModel}`}>
          {listUnpaid.length} Đơn hàng
        </div>
        <span className={`${style.buttonChangeStatus}`}>
          <i class="bi bi-receipt-cutoff"></i> Duyệt Hàng Loạt
        </span>
      </div>
      <div className={`${style.cardContainerTable}`}>
        <table className={`table ${style.tableFailed}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Hóa Đơn</th>
              <th>Lý Do</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listUnpaid.map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{value.idBill}</td>
                <td>Lý Do Giao Hàng Thất Bại</td>
                <td onClick={handleClickChiTiet}>
                  <i className="bi bi-pencil"></i>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
    </React.Fragment>
  );
}

export default Bill;
