import React, { useEffect, useState } from "react";
import style from "../css/business/home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "chart.js/auto";
import { Bar, Pie, Line } from "react-chartjs-2";
import Nav from "react-bootstrap/Nav";

function Home() {
  
  const labels = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00"
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Doanh Thu",
        backgroundColor: "green",
        borderColor: "green",
        data: [
          75000, 125000, 150000, 200000, 215000, 250000, 300000, 450000, 480000,
          700000, 750000, 1250000, 1500000, 2000000, 2150000, 2500000, 3000000,
          4500000, 7500000, 12500000, 15000000, 20000000, 21500000, 25000000,
          30000000
        ]
      }
    ]
  };


  return (
    <React.Fragment>
      <div className={style.card}>
        <div>
          <div className={style.heading}>Danh Sách Cần Làm</div>
          <div className={style.title}>Những việc bạn sẽ làm</div>
        </div>
        <div className={`${style.cardActivity}`}>
          <Nav.Link className={style.cardContentActivity} href="#/choXacNhan">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>Chờ Xác Nhận</div>
          </Nav.Link>
          <Nav.Link className={style.cardContentActivity} href="#/choLayHang">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>Chờ Lấy Hàng</div>
          </Nav.Link>
          <Nav.Link className={style.cardContentActivity} href="#/daXuLy">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>Đã Xử Lý</div>
          </Nav.Link>
          <Nav.Link className={style.cardContentActivity} href="#/donHuy">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>Đơn Hủy</div>
          </Nav.Link>
          <Nav.Link className={style.cardContentActivity} href="#/traHang">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>
              Trả Hàng/Hoàn Tiền Chờ Xử Lý
            </div>
          </Nav.Link>
          <Nav.Link className={style.cardContentActivity} href="#/tamKhoa">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>Sản Phẩm Bị Tạm Khóa</div>
          </Nav.Link>
          <Nav.Link className={style.cardContentActivity} href="#/hetHang">
            <div className={style.cardAmount}>0</div>
            <div className={style.cardTitleActivity}>Sản Phẩm Hết Hàng</div>
          </Nav.Link>
        </div>
      </div>
      <div className={`${style.card} mt-3`}>
        <div>
          <div className={style.heading}>Phân Tích Bán Hàng</div>
          <div className={style.title}>
            Tổng quan dữ liệu của shop đối với đơn hàng đã xác nhận
          </div>
        </div>
        <div className={`mt-3 ${style.cardAnalysis}`}>
          <div className={`${style.cardAnalysisContent}`}>
            <Line data={data} className={`mt-3`} />
          </div>
          <div className={`${style.cardAnalysisContent}`}>
            <div>
              <div className={`${style.cardAnalysisHeading}`}>
                Lượt truy cập <i className="bi bi-question-circle"></i>
              </div>
              <div className={`${style.cardAnalysisAmount}`}>1,285</div>
              <div className={`${style.cardAnalysisTitle}`}>
                Vs hôm qua 13,87% -
              </div>
            </div>
            <div>
              <div className={`${style.cardAnalysisHeading}`}>
                Đơn Hàng <i className="bi bi-question-circle"></i>
              </div>
              <div className={`${style.cardAnalysisAmount}`}>333</div>
              <div className={`${style.cardAnalysisTitle}`}>
                Vs hôm qua 8,07% -
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
