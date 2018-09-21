// //Array for search results when chicken is clicked
// var chickenResults = [{
//     title: "Yummy Chicken",
//     recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
//     image: "assets/images/placeholder/placeholder-1.jpg",
//     aggregateLikes: 100,
//     cookTime: "30 minutes"
// }, {
//     title: "Tasty Chicken",
//     recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
//     image: "assets/images/placeholder/placeholder-2.jpg",
//     aggregateLikes: 40,
//     cookTime: "60 minutes"
// }, {
//     title: "Just Okay Chicken",
//     recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
//     image: "assets/images/placeholder/placeholder-3.jpg",
//     aggregateLikes: 10,
//     cookTime: "25 minutes"
// }];
// //Array for search results when pork is clicked
// var porkResults = [{
//     title: "Yummy Pork",
//     recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
//     image: "assets/images/placeholder/placeholder-4.jpg",
//     aggregateLikes: 90,
//     cookTime: "35 minutes"
// }, {
//     title: "Tasty Pork",
//     recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
//     image: "assets/images/placeholder/placeholder-5.jpg",
//     aggregateLikes: 45,
//     cookTime: "65 minutes"
// }, {
//     title: "Just Okay Pork",
//     recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
//     image: "assets/images/placeholder/placeholder-6.jpg",
//     aggregateLikes: 5,
//     cookTime: "32 minutes"
// }];



//Array of recipes with data to populate search results.  Starts empty and changes based on the search button that is selected.
var recipeArray = [];

// search query from button selected
var searchQuery = "";
// This function calls the API for getting summerized recipe information to populate the search results.
function returnSearchResultsForApi (){

$.ajax({
    // the headers are required by the API
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query="+ searchQuery + "&type=main+course",
    method: "GET",
    headers: {
        "X-Mashape-Key": "M1t9h6bSWOmshPTVemfyZqQgd4ogp1HsYgsjsnSCG4Kb6mjzvX",
        "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com",
    }
})
    .then(function (response) {
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
    })
};



var number = 0;

$(document.body).on("click", "button", function () {
    event.preventDefault();
    $(this).attr("data-icon");
    console.log($(this).attr("data-icon"));
  
    if ($(this).attr("data-icon")==="chicken-icon") {
        searchQuery = "chicken"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon")==="pork-icon") {
        searchQuery = "pork"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon")==="beef-icon") {
        searchQuery = "beef"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    else if ($(this).attr("data-icon")==="fish-icon") {
        searchQuery = "fish"
        console.log("Search results " + searchQuery);
        returnSearchResultsForApi();
    }
    
});





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
