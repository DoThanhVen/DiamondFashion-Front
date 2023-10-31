import Swal from "sweetalert2";
const ThongBao =(title,status)=>{
    Swal.fire({
        icon: status,
        title: "THÔNG BÁO!",
        text: title,
        showCancelButton: false,
        confirmButtonText: "Đồng Ý",
        confirmButtonColor: "green",
      })
}
export default ThongBao;