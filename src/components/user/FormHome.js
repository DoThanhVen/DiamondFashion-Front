import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/user/home.css";
import "../css/user/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from "../../service/UserService";
import ReactPaginate from 'react-paginate';


function Introduction() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mở modal tự động sau 500 milliseconds (0.5 giây) khi trang web được tải
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500); // Modal sẽ mở sau 0.5 giây

    return () => {
      clearTimeout(timer); // Hủy bỏ timer nếu component unmount
    };
  }, []);

  const handleClose = () => {
    // Đóng modal khi người dùng nhấn nút Đóng hoặc bấm nút ngoài modal
    setShowModal(false);
  };

  return (
    <div className="Introduction">
      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="newsletter">
            <form action="#">
              <div className="newsletter-header">
                {/* <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                  <p className="newsletter-desc">
                    Subscribe the <b>Anon</b> to get latest products and discount update.
                  </p> */}
              </div>

              <input
                type="email"
                name="email"
                className="email-field"
                placeholder="Email Address"
                required
              />

              <button type="submit" className="btn-newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Đặt nút hoặc nội dung footer của modal ở đây */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}



function CategoriesProduct() {

  const [categories, setCategories] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Gọi API để lấy danh sách 
    fetch('http://localhost:8080/api/category')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return <React.Fragment>
    <main style={{ marginTop: "20px" }}>
      <section className="hero container">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="fa fa-bars"></i>
              <span>Danh mục</span>
            </div>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <a href="#">{category.type_category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="div-text">
            <span>
              Hãy cùng nhau khám phá các xu hướng mới nhất !!!
            </span>
            <h1>Chào mừng đến với Diamond</h1>
            <p>
              Chào mừng bạn đến với cửa hàng trực tuyến tổng hợp của chúng
              tôi, nơi bạn có thể tìm thấy bộ sưu tập phong phú các mặt hàng
              thời trang, đồ điện tử tiên tiến và đồ gia dụng hàng đầu. Chúng
              tôi phục vụ mọi sở thích và sở thích của người dùng, cung cấp
              những sản phẩm tốt nhất với mức giá cạnh tranh nhất.
            </p>
            <button type="button" className="btn btn-warning">
              Mua sắm ngay
            </button>
          </div>
        </div>
      </section>


    </main>
  </React.Fragment>;
}

function Products_home() {

  return (
    <>
      <section className="sec-2 container">
        <div className="side-bar">
          <div className="titile">
            <h5>ƯU ĐÃI LỚN</h5>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="boxs">
            <div className="box mt-4 pb-2">
              <img
                src="images/banner6.jpg"
                alt=""
                style={{ width: "100%" }}
              ></img>
              {/* <div class="card-body" style={{ marginLeft: "10px" }}>
                  <div class="d-flex justify-content-between">
                    <p class="small">
                      <a href="#!" class="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p class="small text-danger">
                      <s>$1099</s>
                    </p>
                  </div>

                  <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0">HP Notebook</h5>
                    <h5 class="text-dark mb-0">$999</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">6</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="titile">
            <h5>SẢN PHẨM MỚI</h5>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="all-items">
            <div className="item">
              <div className="div-img">
                <div class="image-container">
                  <img
                    src="images/best-saler-4.jpg"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  ></img>
                  <p class="mb-0 small bg-danger text-white">-50%</p>
                </div>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-container">
                <div className="image-container">
                  <img
                    src="images/best-saler-3.jpg"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  ></img>
                  <p className="mb-0 small text-white" style={{ backgroundColor: '#7fad39' }}>Mới</p>
                </div>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-2.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-1.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn text-center btn-outline-primary mx-auto d-block "
            style={{ padding: "5px 60px" }}
          >
            Xem thêm
          </button>
        </div>
      </section>

      <section className="sec-3 container">
        <div className="side-bar">
          <div className="titile">
            <h5>NEW OFFER</h5>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="boxs">
            <div className="box pb-2">
              <img src="images/best-saler-2.jpg" alt=""></img>
              <div className="card-body" style={{ marginLeft: "10px" }}>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">HP Notebook</h6>
                  <h6 className="text-dark mb-0">$999</h6>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0 smaller-text">
                    Available: <span class="fw-bold ">6</span>
                  </p>

                </div>
                <div className="ms-auto text-warning">
                  <i className="fa fa-star smaller-text"></i>
                  <i className="fa fa-star smaller-text"></i>
                  <i className="fa fa-star smaller-text"></i>
                  <i className="fa fa-star smaller-text"></i>
                  <i className="fa fa-star smaller-text"></i>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="content">
          <div className="bg-sec">
            <div className="div-text">
              <h1>Sản phẩm đa dạng</h1>
              <p>
                Khám phá một thế giới biến đổi với các sản phẩm của chúng tôi.
                Cho dù bạn đang tìm cách nâng cấp phong cách của mình, duy trì
                kết nối hay làm cho ngôi nhà của bạn thông minh hơn, chúng tôi
                có mọi thứ bạn cần để thay đổi cuộc sống của bạn.
              </p>
              <a href="/products" className="btn btn-warning">
                <strong>Mua sắm ngay</strong>
              </a>

            </div>
          </div>

          <div className="titile">
            <h4>SẢN PHẨM ĐANG KHUYẾN MÃI</h4>
            <a href="/">Xem nhiều hơn</a>
          </div>

          <div className="container ">
            <div className="countdown-box mt-2">
              <p className="countdown-desc">Nhanh lên! Ưu đãi kết thúc sau:</p>

              <div className="countdown">
                <div className="countdown-content">
                  <p className="display-number">360 Days</p>

                </div>

                <div className="countdown-content">
                  <p className="display-number">24 Hours</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">59 Min</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">00 Sec</p>
                </div>
              </div>
            </div>
          </div>



          <div className="all-items">
            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-4.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-3.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-2.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-1.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )


}

const Banner = (props) => {

  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");


  useEffect(() => {
    // Your code here
    getUsers();
  }, []);

  const getUsers = async (page) => {

    let res = await fetchAllUser(page);
    console.log(">>check: ", res)
    if (res && res.data) {
      console.log(res)
      setTotalUsers(res.total)
      setListUsers(res.data)
      setTotalPages(res.total_pages)
    }
  }

  const handlePageClick = (event) => {
    console.log("event: " + event)
    getUsers(+ event.selected + 1);
  }

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy)
    setSortField(sortField);

  }

  console.log("sort check", sortBy, sortField)

  return (
    <>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID
              <i className="fa-solid fa-arrow-down-long"
                onClick={() => handleSort("desc", "id")}></i>
              <i className="fa-solid fa-arrow-up-long"
                onClick={() => handleSort("asc", "id")}></i>
            </th>
            <th>Avatar</th>
            <th>Email</th>
            <th>firts_name
              <i className="fa-solid fa-arrow-down-long"
                onClick={() => handleSort("desc", "firts_name")}></i>
              <i className="fa-solid fa-arrow-up-long"
                onClick={() => handleSort("asc", "firts_name")}></i>
            </th>
            <th>last_name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.avatar}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}

        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />

      <div className=" p-4">
        <div className="container list">
          <div className="items">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../images/banner_style2.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Diamond_Fashion"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="../images/banner_style.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Diamond_Fashion"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="../images/banner_style1.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Diamond_Fashion"
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="items">
            <img src="../images/banner-left.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner5.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner_woman1.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner_style3.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner_mc2.jpg" alt="Diamond_Fashion"></img>
          </div>
        </div>
      </div>
    </>
  );
}

function Sale() {
  return (
    <div>
      <div className="notification-toast" data-toast>
        {/* <button className="toast-close-btn" data-toast-close>
      <i class="fa-solid fa-xmark"></i>
      </button> */}

        <div className="toast-banner">
          <img
            src="images/best-saler-4.jpg"
            alt="Diamond"
            style={{ width: '100%' }}

          />
        </div>

        <div className="toast-detail">
          <p className="toast-message">Someone in new just bought</p>

          <p className="toast-title">Rose Gold Earrings</p>

          <p className="toast-meta">
            <time dateTime="PT2M">2 Minutes</time> ago
          </p>
        </div>
      </div>

    </div>
  );
}







export { Introduction, Products_home, CategoriesProduct, Banner, Sale };
