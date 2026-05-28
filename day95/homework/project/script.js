import carsData from "./cars.js";

const carsContainer = document.getElementById("cars-container");
const searchInput = document.getElementById("searchInput");
const brandSelect = document.getElementById("brandSelect");
const sortSelect = document.getElementById("sortSelect");

function renderCars(cars) {
  let html = "";

  cars.forEach((car) => {
    html += `
        <div class="car-card">
            <img src="${car.image}">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p><strong>წელი:</strong> ${car.year}</p>
                <p><strong>საწვავი:</strong> ${car.fuel}</p>
                <p class="price">$${car.price}</p>
            </div>
        </div>
        `;
  });

  if (cars.length === 0) {
    carsContainer.innerHTML =
      '<div class="empty-state">მითითებული პარამეტრებით ავტომობილი ვერ მოიძებნა.</div>';
    return;
  }

  carsContainer.innerHTML = html;
}

function filterAndSortCars() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedBrand = brandSelect.value;
  const sortOrder = sortSelect.value;

  let filteredCars = carsData.filter((car) => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm);
    const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  if (sortOrder === "up") {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "down") {
    filteredCars.sort((a, b) => b.price - a.price);
  }

  renderCars(filteredCars);
}

searchInput.addEventListener("input", filterAndSortCars);
brandSelect.addEventListener("change", filterAndSortCars);
sortSelect.addEventListener("change", filterAndSortCars);

renderCars(carsData);