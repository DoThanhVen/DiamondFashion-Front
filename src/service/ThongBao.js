import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {callAPI} from "./API"
const ModalAction = (
  //DỮ LIỆU
  title,
  path,
  method,
  data = {},
  //HÌNH ẢNH
  listImages, //DANH SÁCH HÌNH ẢNH
  paramListImages, //@RequestParam("param để đọc hình ảnh")
  paramKeyConnect,  //@RequestParam("param của id cần thiết, ví dụ idProduct")
  pathImage,
  methodImage,
  //THÔNG BÁO
  success,
  error
) => {
  Swal.fire({
    icon: "info",
    title: "THÔNG BÁO!",
    text: title,
    showCancelButton: true,
    confirmButtonText: "Đồng Ý",
    confirmButtonColor: "green",
    cancelButtonText: "Từ Chối",
    cancelButtonColor: "red"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const responseData = await callAPI(path, method, data);
        if (responseData) {
            if (listImages.length > 0) {
              const formData = new FormData();
              listImages.forEach((image, index) => {
                formData.append(paramListImages, image);
              });
              formData.append(paramKeyConnect, responseData.data.id);
              const config = {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              };
              const responseImage = await callAPI(
                pathImage,
                methodImage,
                formData,
                config
              );
              if (responseData && responseImage) {
                Swal.fire(success, "", "success");
              }else{
                Swal.fire("Lỗi thêm hình ảnh!", "", "error");
              }
            } else {
              if (responseData) {
                Swal.fire(success, "", "success");
              }
            }
        } else {
          Swal.fire(error, "", "error");
        }
      } catch (e) {
        Swal.fire(e, "", "error");
      }
    }
  });
};

const Toastify = () => {
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export { ModalAction, Toastify };
