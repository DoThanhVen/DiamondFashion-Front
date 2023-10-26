import swal from "sweetalert";
function thongBao(title, message, status, reload) {
  swal(title, message, status);
  if (reload === true) {
        window.location.href = window.location.href;
  }
}
export default thongBao;