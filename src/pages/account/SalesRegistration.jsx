import React, { useState, useRef } from "react";
import '../account/profile.css';
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router";

export default function SalesRegistration() {

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const username = "account1";
  const [shop_name, setShop_name] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");

  const domain = process.env.REACT_APP_API || "http://localhost:8080";
  const handleSaleRegis = async (e) => {
    if (shop_name === "") {
      alert("VUI LÒNG NHẬP TÊN SHOP CỦA BẠN!");
    } else if(city === "") {
      alert("VUI LÒNG CHỌN THÀNH PHỐ!");
    } else if(district === "") {
      alert("VUI LÒNG CHỌN THÀNH QUẬN/HUYỆN!");
    } else if(ward === "") {
      alert("VUI LÒNG CHỌN THÀNH XÃ/PHƯỜNG!");
    }
    else if (address === "") {
      alert("VUI LÒNG NHẬP ĐỊA CHỈ CHI TIẾT CỦA BẠN!");
    }
    else {
      e.preventDefault();
      axios
        .post(domain + "/api/account/saleregis/" + username + "/" + shop_name, { city, district, ward, address })
        .then(response => {
          console.log(response);
          if(response.data.sucess){
          alert(response.data.message);
          navigate("/")
          }else{
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Xử lý tệp ảnh đã chọn ở đây
      setSelectedImage(URL.createObjectURL(file));
    }
  };


  return (
    <React.Fragment>
      <div>
        <nav>
          <MainNavbar />
        </nav>
        <div class="container mt-4">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card-profile h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div className="user-avatar" style={{ cursor: 'pointer' }}>
                        <img
                          src={selectedImage || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                          alt="user"
                          onClick={handleImageClick}
                        />
                        <input
                          type="file"
                          accept="/image/*"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>
                      <h5 class="user-name">Hình ảnh</h5>
                      {/* <h6 class="user-date">Ngày tạo: 20/10/2023</h6> */}
                    </div>
                    {/* <div class="about">

                    
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card-profile h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mt-3 mb-2 text-primary">Thông tin cửa hàng</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="ciTy">Tên cửa hàng:</label>
                        <input type="name" class="form-control" id="ciTy" onChange={e => setShop_name(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="ciTy">Thành phố, tỉnh:</label>
                        <select class="form-control" onChange={e => setCity(e.target.value)}>
                          <option value="Ho Chi Minh">--Chọn thành phố--</option>
                          <option value="Ho Chi Minh">Ho Chi Minh</option>
                          <option value="Ha Noi">Ha Noi</option>
                          <option value="Da Nang">Da Nang</option>
                          <option value="Thang Dan Toc">Thang Dan Toc</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="Street">Quận, huyện:</label>
                        <select class="form-control" onChange={e => setDistrict(e.target.value)}>
                          <option value="Ho Chi Minh">--Chọn quận/huyện--</option>
                          <option value="Quan 1">Quan 1</option>
                          <option value="Quan 2">Quan 2</option>
                          <option value="Quan 3">Quan 3</option>
                          <option value="Quan 4">Quan 4</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="ward">Phường, xã:</label>
                        <select class="form-control" onChange={e => setWard(e.target.value)}>
                          <option value="Ho Chi Minh">--Chọn xã/phường--</option>
                          <option value="Phuong 1">Phuong 1</option>
                          <option value="Phuong 2">Phuong 2</option>
                          <option value="Xa 1">Xa 1</option>
                          <option value="Xa 2">Xa 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="adress">Địa chỉ chi tiết:</label>
                        <input type="text" class="form-control" id="adress" onChange={e => setAddress(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div class="row gutters mt-4">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <button type="button" id="submit" name="submit" class="btn btn-success" onClick={handleSaleRegis} >Đăng ký</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}
