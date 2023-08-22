//toggle eye password
const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
}

// $(document).ready(function () {
//   // Fungsi untuk mengeksekusi kode saat resolusi berubah
//   function handleResolutionChange() {
//     var screenWidth = $(window).width();
//     var splashLogo = $(".splash-logo"); // Pilih elemen splash-logo
//     var logincontainer = $(".login-container");

//     if (screenWidth <= 1024) {
//       // Ketika resolusi kurang dari atau sama dengan 1024, ubah properti CSS
//       splashLogo.css({
//         width: "374px",
//         height: "87%",
//         top: "4%",
//         left: "-8%",
//       });
//       logincontainer.css({ width: "35%" });
//     }

//     else {
//       // Ketika resolusi lebih besar dari 1024, ubah properti CSS
//       splashLogo.css({
//         width: "400px",
//         height: "93%",
//         top: "0%",
//         left: "0%",
//       });
//       logincontainer.css({ width: "25%" });
//     }
//   }

//   // Pertama, panggil fungsi handleResolutionChange untuk mengatur tata letak sesuai resolusi awal
//   handleResolutionChange();

//   // Menambahkan event listener untuk merespons perubahan resolusi
//   $(window).resize(function () {
//     // Ketika resolusi berubah, panggil kembali fungsi handleResolutionChange
//     handleResolutionChange();
//   });
// });
