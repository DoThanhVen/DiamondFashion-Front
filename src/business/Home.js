import React, { useEffect, useState } from "react";
import style from "../css/business/home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bar } from "react-chartjs-2";

function Home() {
  const data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "Số lượng",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <React.Fragment>
      <Container>
        <div className={style.card}>
          <div>
            <div className={style.heading}>Danh Sách Cần Làm</div>
            <div className={style.title}>Những việc bạn sẽ làm</div>
          </div>
          <Row>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>Chờ Xác Nhận</div>
            </Col>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>Chờ Lấy Hàng</div>
            </Col>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>Đã Xử Lý</div>
            </Col>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>Đơn Hủy</div>
            </Col>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>
                Trả Hàng/Hoàn Tiền Chờ Xử Lý
              </div>
            </Col>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>Sản Phẩm Bị Tạm Khóa</div>
            </Col>
            <Col sm={6} md={3} className={style.cardContent}>
              <div className={style.amount}>0</div>
              <div className={style.cardTitle}>Sản Phẩm Hết Hàng</div>
            </Col>
            <Col></Col>
          </Row>
        </div>
        <div className={`${style.card} mt-3`}>
          <div>
            <div className={style.heading}>Phân Tích Bán Hàng</div>
            <div className={style.title}>
              Tổng quan dữ liệu của shop đối với đơn hàng đã xác nhận
            </div>
          </div>
          <Bar data={data} options={options} />npm install chart.js@2.9.4
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
