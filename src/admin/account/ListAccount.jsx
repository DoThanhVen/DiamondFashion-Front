import React, { useState } from "react";
import style from "../../css/admin/account/listaccount.module.css";
import Nav from "react-bootstrap/Nav";

const numberPage = 10;
const listAccount = [
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: false
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: false
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: false
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  },
  {
    username: "account001",
    fullname: "Đỗ Thanh Vẹn",
    gender: "Nam",
    phone: "0912471560",
    email: "ven@gmail.com",
    createDate: "20/10/2023",
    status: true
  }
];

function ListAccount() {
  //PAGE
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listAccount.length / numberPage);

  if (currentPage < 1) {
    setCurrentPage(1);
  } else if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }
  const startIndex = (currentPage - 1) * numberPage;
  const endIndex = startIndex + numberPage;

  const listPage = listAccount.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <React.Fragment>
      <div className={style.listAccount}>
        <label className={style.heading}>Danh sách tài khoản</label>
        <div className={style.table}>
          <div className={style.tableHeading}>
            <label className={style.column}>ID</label>
            <label className={style.column}>Tên tài khoản</label>
            <label className={style.column}>Họ & tên</label>
            <label className={style.column}>Giới tính</label>
            <label className={style.column}>Số điện thoại</label>
            <label className={style.column}>Email</label>
            <label className={style.column}>Ngày tạo</label>
            <label className={style.column}>Trạng thái</label>
            <label className={style.column}></label>
          </div>
          {listPage.map((value, index) => (
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {currentPage * numberPage - numberPage + index + 1}
              </label>
              <label className={style.column}>{value.username}</label>
              <label className={style.column}>{value.fullname}</label>
              <label className={style.column}>{value.gender}</label>
              <label className={style.column}>{value.phone}</label>
              <label className={style.column}>{value.email}</label>
              <label className={style.column}>{value.createDate}</label>
              <label className={style.column}>
                <span
                  className={style.statusAccount}
                  style={{ backgroundColor: value.status ? "green" : "red" }}
                >
                  {value.status ? "Đang hoạt động" : "Dừng hoạt động"}
                </span>
              </label>
              <label className={style.column}>
                <Nav.Link href="#edit">
                  <i className={`bi bi-pencil-square`}></i>
                </Nav.Link>
              </label>
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
              handlePageChange(Math.ceil(listAccount.length / numberPage))
            }
          >
            <i className="bi bi-chevron-bar-right"></i>
          </Nav.Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListAccount;
