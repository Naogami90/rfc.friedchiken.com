var placeCells = document.querySelectorAll(".place-name");
var addressCells = document.querySelectorAll(".place-address");
var detailContainer = document.getElementById("detail-container");
var detailName = document.getElementById("detail-name");
var detailAddress = document.getElementById("detail-address");

placeCells.forEach(function (cell, index) {
  cell.addEventListener("click", function () {
    detailName.textContent = cell.textContent;
    detailAddress.textContent = addressCells[index].textContent;
    detailContainer.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const detailContainer = document.getElementById("detailContainer");

  if (detailContainer) {
    detailContainer.addEventListener("click", function () {
      detailContainer.style.display = "none";
    });
  }
});

function changeMapLocation(newLocation) {
  var mapFrame = document.getElementById("mapFrame");
  mapFrame.src = newLocation;
}
