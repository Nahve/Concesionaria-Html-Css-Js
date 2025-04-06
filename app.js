const cars = [
    { id: 1, brand: "Ford", model: "Mustang", color: "Rojo", year: 2020 },
    { id: 2, brand: "Toyota", model: "Corolla", color: "Blanco", year: 2022 },
    { id: 3, brand: "Tesla", model: "Model 3", color: "Negro", year: 2023 },
  ];
  
  const carList = document.getElementById('car-list');
  const carDetails = document.getElementById('car-details');
  const addCarForm = document.getElementById('add-car-form');
  
  function renderCars() {
    carList.innerHTML = '';
    cars.forEach(car => {
      const card = document.createElement('div');
      card.className = 'car-card';
      card.innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        <p>Color: ${car.color}</p>
        <p>Año: ${car.year}</p>
        <button onclick="deleteCar(${car.id})">X</button>
      `;
      card.addEventListener('click', () => showDetails(car));
      carList.appendChild(card);
    });
  }
  
  function showDetails(car) {
    carDetails.innerHTML = `
      <h3>Detalles del auto</h3>
      <p>Marca: ${car.brand}</p>
      <p>Modelo: ${car.model}</p>
      <p>Color: ${car.color}</p>
      <p>Año: ${car.year}</p>
    `;
  }
  
  function deleteCar(id) {
    const index = cars.findIndex(car => car.id === id);
    if (index !== -1) {
      cars.splice(index, 1);
      renderCars();
      carDetails.innerHTML = '<p>Selecciona un auto para ver detalles</p>';
    }
  }
  
  addCarForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = parseInt(document.getElementById('year').value);
  
    const newCar = {
      id: Date.now(),
      brand,
      model,
      color,
      year
    };
  
    cars.push(newCar);
    renderCars();
    addCarForm.reset();
  });
  
  renderCars();
  