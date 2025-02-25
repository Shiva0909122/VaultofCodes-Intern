const recipes = [
    {
        title: "Chocolate Cake",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 45,
        servings: "6",
        ingredients: ["2 cups flour", "1 cup sugar", "½ cup cocoa powder", "1 tsp baking soda", "1 tsp vanilla extract", "1 cup milk", "2 eggs"],
        steps: ["Preheat oven to 350°F (175°C).", "Mix dry ingredients in a bowl.", "Add wet ingredients and stir well.", "Pour into a greased baking pan.", "Bake for 30-35 minutes.", "Let cool before serving."]
    },
    {
        title: "Blueberry Muffins",
        image: "https://images.pexels.com/photos/556829/pexels-photo-556829.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 30,
        servings: "12",
        ingredients: ["2 cups flour", "1 cup sugar", "1 cup blueberries", "1 tsp baking powder", "1 tsp vanilla extract", "1 cup milk", "1 egg"],
        steps: ["Preheat oven to 375°F (190°C).", "Mix dry ingredients in a bowl.", "Add wet ingredients and stir gently.", "Fold in blueberries.", "Spoon batter into muffin tins.", "Bake for 20-25 minutes."]
    },
    {
        title: "Spaghetti Carbonara",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 25,
        servings: "4",
        ingredients: ["12 oz spaghetti", "4 oz pancetta", "2 eggs", "½ cup grated Parmesan cheese", "2 cloves garlic", "Salt and pepper to taste"],
        steps: ["Cook spaghetti according to package instructions.", "Sauté pancetta in a pan until crispy.", "Whisk eggs and cheese together in a bowl.", "Add cooked spaghetti to the pan with pancetta.", "Remove from heat and mix in the egg-cheese mixture.", "Serve with extra Parmesan and black pepper."]
    },
    {
        title: "Caesar Salad",
        image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 15,
        servings: "2",
        ingredients: ["1 head romaine lettuce", "½ cup croutons", "¼ cup grated Parmesan", "2 tbsp Caesar dressing", "1 grilled chicken breast (optional)"],
        steps: ["Chop romaine lettuce and place in a bowl.", "Add croutons and grated Parmesan.", "Drizzle with Caesar dressing and toss well.", "Top with grilled chicken if desired.", "Serve immediately."]
    },
    {
        title: "Pancakes",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 20,
        servings: "4",
        ingredients: ["1 cup flour", "1 tbsp sugar", "1 tsp baking powder", "1 cup milk", "1 egg", "2 tbsp melted butter"],
        steps: ["Mix flour, sugar, and baking powder in a bowl.", "Whisk in milk, egg, and melted butter.", "Heat a non-stick pan over medium heat.", "Pour batter and cook until bubbles form.", "Flip and cook the other side.", "Serve with syrup or fruit."]
    },
    {
        title: "Vegetable Stir-Fry",
        image: "https://images.pexels.com/photos/5848469/pexels-photo-5848469.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 20,
        servings: "3",
        ingredients: ["1 bell pepper", "1 carrot", "1 zucchini", "2 tbsp soy sauce", "1 tbsp olive oil", "1 tsp ginger", "1 garlic clove"],
        steps: ["Slice vegetables into thin strips.", "Heat oil in a pan and sauté garlic and ginger.", "Add vegetables and stir-fry for 5-7 minutes.", "Add soy sauce and mix well.", "Serve hot over rice or noodles."]
    },
    {
        title: "Grilled Cheese Sandwich",
        image: "https://images.pexels.com/photos/14941252/pexels-photo-14941252.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: 10,
        servings: "1",
        ingredients: ["2 slices of bread", "2 slices of cheese", "1 tbsp butter"],
        steps: ["Heat a pan over medium heat.", "Butter one side of each bread slice.", "Place one slice, butter-side down, in the pan.", "Add cheese and top with the other bread slice.", "Cook until golden brown, then flip.", "Cook the other side until cheese is melted.", "Serve hot."]
    }
];
const newRecipe = {
    title: "Homemade Pizza",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: 60,
    servings: "4",
    ingredients: ["2 cups all-purpose flour", "1 packet yeast", "¾ cup warm water", "1 tsp sugar", "½ tsp salt", "2 tbsp olive oil", "½ cup tomato sauce", "1 cup shredded mozzarella", "Toppings of choice (pepperoni, bell peppers, olives, etc.)"],
    steps: [
        "In a bowl, mix warm water, yeast, and sugar. Let it sit for 5 minutes until foamy.",
        "Add flour, salt, and olive oil. Knead into a smooth dough and let it rise for 30 minutes.",
        "Preheat oven to 475°F (245°C).",
        "Roll out the dough on a floured surface.",
        "Spread tomato sauce evenly over the dough.",
        "Sprinkle cheese and add desired toppings.",
        "Bake for 12-15 minutes or until crust is golden brown.",
        "Let cool slightly before slicing and serving."
    ]
};

// Add to the recipes array
recipes.push(newRecipe);


function generateRecipeCard(recipe) {
    return `
    <div class="card recipe-card mb-4">
        <h2 class="card-title text-center p-3">${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}" class="card-img-top">
        <div class="card-body col-lg-10 mx-auto">
            <p><strong>Preparation Time:</strong> <span id="timer-${recipe.title.replace(/\s+/g, '-')}">${recipe.prepTime} min</span></p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <div class="progress mt-2">
                <div class="progress-bar" id="progress-${recipe.title.replace(/\s+/g, '-').toLowerCase()}"></div>
            </div>
            <button class="btn btn-primary w-100 mt-2" onclick="toggleSection('${recipe.title.replace(/\s+/g, '-')}-ingredients')">Show Ingredients</button>
            <ul id="${recipe.title.replace(/\s+/g, '-')}-ingredients" class="ingredients-list fade-in mt-2" style="display: none;">
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button class="btn btn-success w-100 mt-2" onclick="toggleSection('${recipe.title.replace(/\s+/g, '-')}-steps')">Show Steps</button>
            <ol id="${recipe.title.replace(/\s+/g, '-')}-steps" class="steps-list fade-in mt-2" style="display: none;">
                ${recipe.steps.map(item => `<li>${item}</li>`).join('')}
            </ol>
            <button class="btn btn-warning w-100 mt-3" id="start-button-${recipe.title.replace(/\s+/g, '-')}" onclick="startCooking('${recipe.title.replace(/\s+/g, '-')}')">Start Cooking</button>
            <button class="btn btn-secondary w-100 mt-2" onclick="nextStep('${recipe.title.replace(/\s+/g, '-')}')">Next</button>
            <button class="btn btn-info w-100 mt-2" onclick="printRecipe()">Print Recipe</button>
        </div>
    </div>`;
}

function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('show');
    section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
}

document.getElementById("recipe-list").innerHTML = recipes.map(generateRecipeCard).join('');

let timers = {}; // Store timers separately for each recipe

function startCooking(recipeId) {
    const recipe = recipes.find(r => r.title.replace(/\s+/g, '-') === recipeId);
    if (!recipe) return;

    const timerDisplay = document.getElementById(`timer-${recipeId}`);
    const progressBar = document.getElementById(`progress-${recipeId.toLowerCase()}`);
    const startButton = document.getElementById(`start-button-${recipeId}`);

    // If a timer exists for this recipe, stop it
    if (timers[recipeId]) {
        clearInterval(timers[recipeId]);
        delete timers[recipeId];
        startButton.textContent = "Start Cooking";
        progressBar.style.width = "0%";
        return;
    }

    let totalTime = parseInt(recipe.prepTime); // Convert to number if it's in string format
    let timeLeft = totalTime;
    let elapsed = 0;

    startButton.textContent = "Stop Cooking";

    timers[recipeId] = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            elapsed++;
            timerDisplay.textContent = `${timeLeft} min`;
            progressBar.style.width = `${(elapsed / totalTime) * 100}%`;
        } else {
            clearInterval(timers[recipeId]);
            delete timers[recipeId];
            alert(`Time's up! Your ${recipe.title} is ready.`);
            startButton.textContent = "Start Cooking";
            progressBar.style.width = "0%";
        }
    }, 1000); // Update every second
}


function printRecipe() {
    window.print();
}