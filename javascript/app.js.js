// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvczcDpxG0nIWYMR4Df_hPM4LiHGPnop4",
    authDomain: "project-one-54fbd.firebaseapp.com",
    databaseURL: "https://project-one-54fbd.firebaseio.com",
    projectId: "project-one-54fbd",
    storageBucket: "project-one-54fbd.appspot.com",
    messagingSenderId: "945661053221"
  };
  firebase.initializeApp(config);
  var database = firebase.database();



//Array of recipes with data to populate search results.  Starts empty and changes based on the search button that is selected.
var recipeArray = [];

// search query from button selected
var searchQuery = "";
// This function calls the API for getting summerized recipe information to populate the search results.
function returnSearchResultsForApi() {
    console.log('ajax is a function!')
    $.ajax({
        // the headers are required by the API
        url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=" + searchQuery + "&type=main+course",
        method: "GET",
        headers: {
            "X-Mashape-Key": "M1t9h6bSWOmshPTVemfyZqQgd4ogp1HsYgsjsnSCG4Kb6mjzvX",
            "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com",
        }
    })
        .then(function (response) {
            console.log('inside ajax: ', searchQuery)
            // console.log for testing
            console.log(response);
            console.log(response.results[0].id);
            console.log(response.results[0].image);
            console.log(response.results[0].readyInMinutes);
            console.log(response.results[0].servings);
            console.log(response.results[0].title);
            console.log(response.baseUri);


            // This for loop pushes key values for the API search into variables that then are used to create an object that is pushed to the recipe array 
            for (var i = 0; i < response.results.length; i++) {
                var id = response.results[i].id;
                var image = response.baseUri + response.results[i].image;
                var readyInMinutes = response.results[i].readyInMinutes;
                var servings = response.results[i].servings;
                var title = response.results[i].title;

                var recipe = {
                    id: id,
                    image: image,
                    readyInMinutes: readyInMinutes,
                    servings: servings,
                    title: title
                }

                recipeArray.push(recipe);

            }
            console.log(recipeArray);
            // TO DO: Add a function that adds data-attribute of Recipe ID to div that is holding the recipe.  This way, when the favorite button is clicked it knows which 

            


        })
};



var number = 0;

$(document.body).on("click", "button", function () {
    event.preventDefault();
   
    if ($(this).attr("data-icon") === "chicken-icon") {
        searchQuery = "chicken"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon") === "pork-icon") {
        searchQuery = "ham"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon") === "beef-icon") {
        searchQuery = "beef"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon") === "fish-icon") {
        searchQuery = "fish"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon") === "favorite-icon") {
        console.log(" its selecting Favorite icon");
        database.ref().set({recipe: 123});
    }

});

var recipeIdforViewing; 


// var of recipe in display window
var displayRecipe = {};

function makeRecipeObjectForDisplayInRecipeView() {

// TODO: Connect recipeIdforViewing in url of ajax

    $.ajax({
        url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/494401/information?includeNutrition=false",
        method: "GET",
        headers: {
            "X-Mashape-Key": "M1t9h6bSWOmshPTVemfyZqQgd4ogp1HsYgsjsnSCG4Kb6mjzvX",
            "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com",
        }
    })
        .then(function (response) {
            console.log(response);
            var steps = [];
            //Below the variables for the recipe object are being pulled and stored for creating the variable at the bottom
            for (var i = 0; i < response.analyzedInstructions[0].steps.length; i++) {
                console.log("Step: " + response.analyzedInstructions[0].steps[i].number + " " + response.analyzedInstructions[0].steps[i].step);
                var index = "Step " + response.analyzedInstructions[0].steps[i].number + ": " + response.analyzedInstructions[0].steps[i].step;
                steps.push(index);
            }
            console.log("Recipe by: " + response.creditText);
            var recipeSource = "Recipe by: " + response.creditText;
            var ingredientArrayForDisplay = [];
            var ingredientArrayForShoppingList = [];

            //for loop to loop through api and get ingredients
            for (var i = 0; i < response.extendedIngredients.length; i++) {
                var ingredientId = response.extendedIngredients[i].id;
                var ingredientAmount = response.extendedIngredients[i].measures.us.amount;
                var ingredientName = response.extendedIngredients[i].name;
                var ingredientUnit = response.extendedIngredients[i].measures.us.unitLong;
                var ingredientOriginal = response.extendedIngredients[i].original;
                var ingredientsForShoppingList = {
                    ingredientId: ingredientId,
                    ingredientAmount: ingredientAmount,
                    ingredientName: ingredientName,
                    ingredientUnit: ingredientUnit
                };
                ingredientArrayForShoppingList.push(ingredientsForShoppingList);
                ingredientArrayForDisplay.push(ingredientOriginal);
            };

            var ingredientsImageLInk = response.image
            var displayingRecipeId = response.id
            var cookTime = response.readyInMinutes;
            var displayReciepServing = response.servings
            var displayAggregateLikes = response.aggregateLikes


            // object to be used to populate the recipe view when when the button on the search is selected
            displayRecipe = {
                steps: steps,
                recipeSource: recipeSource,
                displayIngredients: ingredientArrayForDisplay,
                shoppingListINgredients: ingredientArrayForShoppingList,
                image: ingredientsImageLInk,
                recipeId: displayingRecipeId,
                cookTime: cookTime,
                servings: displayReciepServing,
                aggregateLikes: displayAggregateLikes
            };

            console.log(displayRecipe);
        });
}



// Function for turning search result selected into an object
$(document.body).on("click", ".search-result", function () {
    event.preventDefault();
   recipeIdforViewing =  $(this).attr("data-recipeId");
    makeRecipeObjectForDisplayInRecipeView()

});




//TO DO: Function that populates recipe object on the recipe view 





//Function for adding selected recipe to window for review


//Onclick event for buttons

// //Chicken Button
// $("#chicken").click(function() {
//     //Clear the search results before adding anything
//     $(".searchResults").empty();
//     //Loop through the chicken results array and add recipe data each time
//     for (i = 0; i < chickenResults.length; i++) {
//         number++;
//         $(".searchResults").append(`
//         <h2 class="${number}">${chickenResults[i].title}</h2>
//         `)
//     };
//     populateRecipeWindow();
// });

// //Pork Button
// $("#pork").click(function() {
//     //Clear the search results before adding anything
//     $(".searchResults").empty();
//     //Loop through the chicken results array and add recipe data each time
//     for (i = 0; i < porkResults.length; i++) {
//         $(".searchResults").append(`
//         <h2 class="resultTitle">${porkResults[i].title}</h2>
//         `)
//     };
// });






// function populateRecipeWindow() {
//     $(document).on("click", ".1", function() {
//         $("#recipeWindow").html(`
//         <h2>Pizza</h2>
//         `)
//         alert("Clicked on");
//     });
// };
