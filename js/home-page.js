//----------------------------pdf-modal-----------------------------------------------
// script.js
const pdfModal = document.getElementById("pdfModal");
const pdfModalContent = document.querySelector(".modal-content");
const pdfContainer = document.getElementById("pdfIframe");
const pdfOpenModalBtns = document.querySelectorAll(".button-pdf");
const pdfCloseBtn = document.querySelector(".close");

const pdfUrls = [
  "https://drive.google.com/file/d/1w9MfQySAjVFAkLeoYXbR0v3-3CY1nWSJ/preview",
  "https://drive.google.com/file/d/1i0mga9tlM43zw55a_2oCwu1dLOY_I_kp/preview",
  "https://drive.google.com/file/d/1xkLWNoqX7roCER0BAuKctbYmx8a6AOvM/preview",
];

pdfOpenModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pdfModal.style.display = "block";
    const pdfUrl = btn.dataset.pdf;
    pdfContainer.src = pdfUrl;
  });
});

pdfCloseBtn.addEventListener("click", () => {
  pdfModal.style.display = "none";
  pdfContainer.src = "";
});

window.addEventListener("click", (event) => {
  if (event.target === pdfModal) {
    pdfModal.style.display = "none";
    pdfContainer.src = "";
  }
});

//----------------------------pdf-modal-end-----------------------------------------------

//----------------------------register-modal-------------------------------------------
// Get the modal element
var modal = document.getElementById("register-mymodal");

// Get the button that opens the modal
var btn = document.getElementById("register-open-modal");

// Get the close button
var closeBtn = document.getElementById("register-close-modal");

// Open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// Close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};
// Pada saat submit form
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    membership: document.getElementById("membership").value,
    email: document.getElementById("email").value,
    attachment: document.getElementById("attachment").value,
  };

  // Buat pesan WhatsApp dengan format yang diinginkan
  var whatsappMessage =
    "Nama: " +
    formData.name +
    "%0A" +
    "Alamat: " +
    formData.address +
    "%0A" +
    "Membership: " +
    formData.membership +
    "%0A" +
    "Alamat Email: " +
    formData.email +
    "%0A" +
    "File attachment: " +
    formData.attachment;

  // Buat tautan WhatsApp dengan pesan yang sudah diformat
  var whatsappLink = "https://wa.me/+6281288447499?text=" + whatsappMessage;

  // Buka tautan WhatsApp
  window.open(whatsappLink, "_blank");

  // Tutup modal
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Mengembalikan scroll normal pada latar belakang
});
//----------------------------register-modal-end---------------------------------------
btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Tambahkan baris ini
};

// Close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Tambahkan baris ini
};
