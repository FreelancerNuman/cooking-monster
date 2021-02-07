// getting search name
const getSearchName = () => {
  const name = document.getElementById("search-input").value;
  searchByName(name);
};

// Searching the meal by name
const searchByName = (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const meals = data.meals;
      document.getElementById("meal-box").innerHTML = "";
      if (meals === null) {
        document.getElementById("no-meals").style.display = "block";
        showMealName();
      } else {
        document.getElementById("no-meals").style.display = "none";
        showTheMeal(meals);
      }
    });
};

// showing the meals on card
const showTheMeal = (meals) => {
  const mealBox = document.getElementById("meal-box");

  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "col";
    const mealInfo = `
    <div 
      class="card meal-card h-100" 
      onclick="showDetails('${meal.strMeal}')"
      type="button" 
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
    >
    <img
      src="${meal.strMealThumb}"
      class="card-img-top"
      alt="${meal.strMeal}"
      
    />
    <div class="card-body">
      <p class="card-text meal-name">${meal.strMeal}</p>
    </div>
  </div>
      `;
    mealDiv.innerHTML = mealInfo;
    mealBox.appendChild(mealDiv);
  });
};

// showing the details data
const showDetails = (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const meals = data.meals[0];
      showMoreInfo(meals);
    });
};

// show the modal data
const showMoreInfo = (meal) => {
  const modalBox = document.getElementById("modal-information");
  modalBox.innerHTML = `
  <div class="modal-content">
  <div class="modal-header">
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>

  <div class="modal-body p-0">
    <div class="card modal-card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text modal-meal-name">${meal.strMeal}</p>
        <h2 class="ingredient-title">Ingredients</h2>
        <div class="ingredients">
          <div class="ingredient">
            <i class="${meal.strIngredient1 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure1}</span> ${meal.strIngredient1}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient2 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure2}</span> ${meal.strIngredient2}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient3 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure3}</span> ${meal.strIngredient3}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient4 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure4}</span> ${meal.strIngredient4}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient5 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure5}</span> ${meal.strIngredient5}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient6 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure6}</span> ${meal.strIngredient6}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient7 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure7}</span> ${meal.strIngredient7}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient8 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure8}</span> ${meal.strIngredient8}</p>
          </div>
          <div class="ingredient">
            <i class="${meal.strIngredient9 ? ` fas fa-check-square` : ""}"></i>
            <p><span>${meal.strMeasure9}</span> ${meal.strIngredient9}</p>
          </div>
          <div class="ingredient">
            <i class="${
              meal.strIngredient10 ? ` fas fa-check-square` : ""
            }"></i>
            <p><span>${meal.strMeasure10}</span> ${meal.strIngredient10}</p>
          </div>
          <div class="ingredient">
            <i class="${
              meal.strIngredient11 ? ` fas fa-check-square` : ""
            }"></i>
            <p><span>${meal.strMeasure11}</span> ${meal.strIngredient11}</p>
          </div>
          <div class="ingredient">
            <i class="${
              meal.strIngredient12 ? ` fas fa-check-square` : ""
            }"></i>
            <p><span>${meal.strMeasure12}</span> ${meal.strIngredient12}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      Close
    </button>
    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Like</button>
  </div>
</div>
    `;
};

// showing meal name
const showMealName = () => {
  const mealName = document.getElementById("search-input").value;
  document.getElementById("meal-name").innerText = mealName;
};
