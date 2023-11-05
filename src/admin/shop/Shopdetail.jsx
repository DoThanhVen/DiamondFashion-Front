import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopService from '../../service/ShopService'
import { getIdShop } from "../../service/Actions";
import { useNavigate } from "react-router-dom";
function ShopDetail() {
  const [shop, setshop] = useState({})
  const dispatch = useDispatch();
  const data = useSelector((state) => state.idShop);
  const navigate = useNavigate();

  useEffect(() => {
    getShop()
  }, [data]);

  const getShop = async () => {
    const reponse = await ShopService.getAllshopById(data);
    setshop(reponse)
  }
  const handleSubmit = async () => {
    const reponse = await ShopService.updateStatusAdmin(shop.id,1)
    navigate('/admin/shops')
    dispatch(getIdShop(0))
  }
  return (
    <div>
      <h1>Chi tiết cửa hàng</h1>
      <div>
        <img
          src="http://localhost:8080/api/uploadImageProduct/b22654805fd246319e661efb0cc73e87.jpg" // Replace with the actual image URL
          alt="Shop"
          style={{ maxWidth: "100%" }}
        />
        <h2>Tên cửa hàng: {shop.shop_name}</h2>
      </div>
      <div>
        <h3>Chủ sở hữu:</h3>
        <ul>
          <li>
            <h4>Tên: {shop.accountShop?.username}</h4>
            <p>Mã: {shop.accountShop?.id}</p>
            <p>Ngày tạo tài khoản: {shop.accountShop?.createdate}</p>
          </li>
        </ul>
        <h3>Địa chỉ:</h3>
        <ul>
          <li>
            <h4>Tỉnh/ Thành phố: {shop.addressShop?.city}</h4>
            <p>Quận/ Huyện: {shop.addressShop?.district}</p>
            <p>Xã/ Phường: {shop.addressShop?.ward}</p>
            <p>Địa chỉ cụ thể: {shop.addressShop?.address}</p>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={handleSubmit}>Xác nhận duyệt</button>
      </div>
    </div>
  );
}

export default ShopDetail;
