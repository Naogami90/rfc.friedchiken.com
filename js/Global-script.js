//  anchor function anchor
var lebarLayar = screen.width;
var tinggiLayar = screen.height;

console.log(
  "Lebar Layar: " + lebarLayar + "px, Tinggi Layar: " + tinggiLayar + "px"
);

$(".Page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");
  var elemtujuan = $(tujuan);
  $("html, body").scrollTop(elemtujuan.offset().top - 100);
  console.log(elemtujuan.offset().top);
  e.preventDefault();
});

(function ($, window) {
  var adjustAnchor = function () {
    var $anchor = $(":target"),
      fixedElementHeight = 70;

    if ($anchor.length > 0) {
      var targetOffset = $anchor.offset().top;
      console.log("Target Offset:", targetOffset);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: targetOffset - fixedElementHeight,
          },
          200
        );
    }
  };
  $(window).on("hashchange load", function () {
    adjustAnchor();
  });
})(jQuery, window);

// document.addEventListener("DOMContentLoaded", function () {
//   const anchorLinks = document.querySelectorAll("nav a");

//   anchorLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       const targetId = this.getAttribute("href");
//       const targetElement = document.querySelector(targetId);

//       if (targetElement) {
//         const offset =
//           targetElement.getBoundingClientRect().top + window.scrollY;
//         console.log(`Offset for ${targetId}: ${offset}px`);
//       }
//     });
//   });
// });

// burger menu click
$(document).ready(function () {
  $(".burger").on("click", function () {
    $("ul.flex-row").removeClass("flex-row").addClass("flex-column");
    //home Page
    $(".home-page2-desktop-tabletmenu").css("margin-top", "25px");
    $(".Home-Navibar-linkcontainer").css("height", "300");
    $(".Home-Navibar-linkcontainer").css("top", "39.5px");
    $(".home-page2-desktop-tabletmenu").css("height", "300");
    $(".home-page2-desktop-tabletmenu").css("display", "flex");
    $(".home-page2-desktop-tabletmenu").css("justify-content", "center");
    //mitra Page
    $(".mitra-navbar").css("height", "350");
    $(".mitra-desktop-tabletmenu").css("height", "360");
    $(".mitra-desktop-tabletmenu").css("display", "flex");
    //Outlet Page
    $(".outlet-navibar").css("height", "360");
    $(".outlet-navibar-menu").css("height", "360");
    $(".outlet-navibar-menu").css("display", "flex");

    $(".burger").css("display", "none");
    $(".close-burger").css("display", "block");
  });
});
$(document).ready(function () {
  $(".close-burger").on("click", function () {
    $("ul.flex-column").removeClass("flex-column").addClass("flex-row");
    //home Page
    $(".Home-Navibar-linkcontainer").css("height", "0");
    $(".home-page2-desktop-tabletmenu").css("display", "none");
    $(".home-page2-desktop-tabletmenu").css("margin-top", "0px");
    $(".home-page2-desktop-tabletmenu").css("height", "40");
    $(".home-page2-desktop-tabletmenu").css("justify-content", "flex-end");
    //mitra Page
    $(".mitra-desktop-tabletmenu").css("height", "40");
    $(".mitra-navbar").css("height", "40");
    $(".mitra-desktop-tabletmenu").css("display", "none");
    //Outlet Page
    $(".outlet-navibar").css("height", "40");
    $(".outlet-navibar-menu").css("height", "40");
    $(".outlet-navibar-menu").css("display", "none");

    $(".burger").css("display", "block");
    $(".close-burger").css("display", "none");
  });
});
$(document).ready(function () {
  // Fungsi untuk mengeksekusi kode saat resolusi berubah
  function handleResolutionChange() {
    var screenWidth = $(window).width();
    if (screenWidth <= 875) {
      // Ketika resolusi kurang dari atau sama dengan 600, ubah flex direction menjadi column
      $(".burger").css("display", "block");
      $(".Home-Navibar-linkcontainer").css("height", "0");
      // $(".burger").css("right", "20%");
      $(".close-burger").css("display", "none");
      $(".home-page2-desktop-tabletmenu").css("display", "none");
      $(".Home-Navibar").css("height", "40");
      $(".home-page2-desktop-tabletmenu").css("height", "40");
      $(".pembatas").css("display", "none");
      $(".splash-container").css("display", "none");
      $(".close-burger, .burger").css("left", "85%");
      // //page outlet
      $(".outlet-navibar-menu").css("display", "none");
      $(".outlet-navibar").css("height", "40");
      $(".outlet-navibar-menu").css("height", "40");
    } else {
      // Ketika resolusi lebih besar dari 600, ubah flex direction menjadi row
      $(".pembatas").css("display", "block");
      $(".splash-container").css("display", "block");
      $(".burger").css("display", "none");
      $(".close-burger").css("display", "none");
      $(".home-page2-desktop-tabletmenu").css("display", "flex");
      $("ul.flex-column").removeClass("flex-column").addClass("flex-row");
      $(".Home-Navibar").css("height", "40");
      $(".home-page2-desktop-tabletmenu").css("height", "40");
      //unmitra-navbarra
      $(".mitra-desktop-tabletmenu").css("display", "flex");
      $("ul.flex-column").removeClass("flex-column").addClass("flex-row");
      $(".mitra-navbar").css("height", "40");
      $(".mitra-desktop-tabletmenu").css("height", "40");
      //outlet page
      $(".outlet-navibar-menu").css("display", "flex");
      $("ul.flex-column").removeClass("flex-column").addClass("flex-row");
      $(".outlet-navibar").css("height", "40");
      $(".outlet-navibar-menu").css("height", "40");
    }
  }

  // Pertama, panggil fungsi handleResolutionChange untuk mengatur tata letak sesuai resolusi awal
  handleResolutionChange();

  // Menambahkan event listener untuk merespons perubahan resolusi
  $(window).resize(function () {
    // Ketika resolusi berubah, panggil kembali fungsi handleResolutionChange
    handleResolutionChange();
  });
});
// event hover Button
$(document).ready(function () {
  // Selector pada elemen yang ingin Anda beri efek hover
  $(".button1 , .button2").hover(
    function () {
      // Fungsi ini akan dijalankan saat kursor berada di atas elemen
      $(this).css("background-color", "#0074F0");
      $(this).css("transform", "scale(0.96)");
    },
    function () {
      // Fungsi ini akan dijalankan saat kursor meninggalkan elemen
      $(this).css("background-color", "#A22020");
      $(this).css("transform", "scale(0.96)");
    }
  );
});
// Mendapatkan lebar tampilan
var lebarTampilan = window.innerWidth;

// Mendapatkan daftar elemen yang melebihi lebar tampilan
var elemenMelebihiLebar = [];
var semuaElemen = document.querySelectorAll("*");

for (var i = 0; i < semuaElemen.length; i++) {
  var elem = semuaElemen[i];
  var rect = elem.getBoundingClientRect();

  if (rect.right > lebarTampilan) {
    elemenMelebihiLebar.push(elem);
  }
}

// Menampilkan hasil
console.log("Lebar Tampilan: " + lebarTampilan + "px");

if (elemenMelebihiLebar.length > 0) {
  console.log("Elemen-elemen yang melebihi lebar tampilan:");
  elemenMelebihiLebar.forEach(function (elem, index) {
    var classNames = elem.className.split(/\s+/).filter(function (className) {
      return className.length > 0;
    });

    var classNamesString =
      classNames.length > 0 ? " - Kelas: " + classNames.join(", ") : "";

    console.log(
      index +
        1 +
        ". " +
        elem.tagName +
        classNamesString +
        " - Lebar: " +
        elem.offsetWidth +
        "px"
    );
  });
} else {
  console.log("Tidak ada elemen yang melebihi lebar tampilan.");
}

//----------------------login--------------------------------

//----------------------login-Akhir--------------------------
