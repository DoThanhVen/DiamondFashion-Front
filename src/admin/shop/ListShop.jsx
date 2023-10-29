import React, { useState } from "react";
import style from "../../css/admin/shop/listshop.module.css";
import Nav from "react-bootstrap/Nav";

const numberPage = 8;
const listShop = [
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: true
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: true
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: false
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: true
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: false
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: false
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: true
  },
  {
    image: "banner-left.jpg",
    shopName: "Tên cửa hàng",
    createDate: "20/10/2023",
    city: "Hồ Chí Minh",
    district: "12",
    ward: "Tô Ký",
    address: "123/23",
    status: true
  }
];
function ListShop() {
  //PAGE
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listShop.length / numberPage);

  if (currentPage < 1) {
    setCurrentPage(1);
  } else if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }
  const startIndex = (currentPage - 1) * numberPage;
  const endIndex = startIndex + numberPage;

  const listPage = listShop.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <React.Fragment>
      <div className={style.filter}>
        <label className={style.heading}>Danh sách cửa hàng</label>
      </div>
      <div className={style.listShop}>
        {listPage.map((value, index) => (
          <div className={style.cardShop}>
            <div className={style.heading}>
              <img
                className={style.image}
                alt="Hình Ảnh"
                src={`/images/${value.image}`}
              ></img>
              <div className={style.content}>
                <label className={style.shopName}>{value.shopName}</label>
                <label className={style.createDate}>{value.createDate}</label>
              </div>
            </div>
            <div className={style.address}>
              <div className={style.title}>Địa chỉ:</div>
              <div className={style.content}>
                <label>Thành phố: {value.city}</label>
                <label>Quận: {value.district}</label>
                <label>Đường: {value.ward}</label>
                <label>Số nhà: {value.address}</label>
              </div>
            </div>
            <div className={style.status}>
              <span
                className={style.statusShop}
                style={{ backgroundColor: value.status ? "green" : "red" }}
              >
                {value.status ? "Đang hoạt động" : "Dừng hoạt động"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.buttonPage}`}>
        <Nav.Link className={`btn`} onClick={() => handlePageChange(1)}>
          <i className="bi bi-chevron-bar-left"></i>
        </Nav.Link>
        <Nav.Link
          className={`btn`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <i className="bi bi-caret-left"></i>
        </Nav.Link>
        <Nav.Link
          className={`btn`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <i className="bi bi-caret-right"></i>
        </Nav.Link>
        <Nav.Link
          className={`btn`}
          onClick={() =>
            handlePageChange(Math.ceil(listShop.length / numberPage))
          }
        >
          <i className="bi bi-chevron-bar-right"></i>
        </Nav.Link>
      </div>
    </React.Fragment>
  );
}

export default ListShop;
