// index.js
// index.js
const dateDiv = document.getElementById('Date');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

dateDiv.textContent += formattedDate;



const mealsDiv = document.getElementById('meals');

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then(response => response.json())
  .then(data => {
    const meals = data.meals;
    if (meals) {
      mealsDiv.innerHTML = `
        <h2>Meals</h2>
        <ul>
          ${meals.slice(0, 3).map(meal => `
            <li>
              <h3>${meal.strMeal}</h3>
              <p>${meal.strCategory}</p>
              <p>${meal.strArea}</p>
              <p>${meal.strInstructions.split('\n').slice(0, 2).join(' ')}...</p>
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      mealsDiv.textContent = 'No meals found.';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    mealsDiv.textContent = 'Failed to fetch meal data.';
  });
