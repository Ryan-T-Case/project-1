//Getting Data From the API and putting into an object

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

        //Clear the recipe array before pushin new data
        recipeArray = [];

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
        console.log("Recipe Array " + recipeArray);
        for (var i = 0; i < 7; i++) {
            $(`#${i + 1}`).html(`
            <img class="card-img-top" src="${recipeArray[i].image}" alt="Recipe Image" style="position:relative">
            <button class="btn btn-outline-danger btn-circle" data-icon="favorite-icon" style="position:absolute;left:0;top:0;"></button>
            <div class="card-body">
              <h5 class="card-title" id="recipe-name">${recipeArray[i].title}</h5>
              <p class="card-text">Servings: ${recipeArray[i].servings}</p>
              <p class="card-text">Cook Time: ${recipeArray[i].readyInMinutes}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target=".bd-example-modal-lg" data-recipe-id="${recipeArray[i].id}>Click
                  for Recipe!</button>
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h3 class="modal-title" id="recipe-name">Baked Chicken</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img src="https://picsum.photos/750/550?image=835">
                      </div>
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-4 ml-auto vl">.col-md-4 .ml-auto</div>
                          <div class="col-md-4 ml-auto vl">.col-md-4 .ml-auto</div>
                          <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                        </div>
                        <br>
                        <div class="row">
                          <div class="col-lg-10 ml-auto">
                            <div data-target="ingredients">
                              <h3>Ingredients: </h3>
                            </div>
                            <div id="ingredients-appear-here"></div>
                          </div>
    
                        </div>
                        <hr>
                        <div class="row">
                          <div class="col-lg-10 ml-auto">
                            <div data-target="instructions">
                              <h3>Instructions: </h3>
                            </div>
                            <div id="ingredients-appear-here"></div>
                          </div>
    
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button class="btn btn-outline-danger btn-circle" data-icon="favorite-icon"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </small>
            </div>
            `)
        }
    })
};

//Search Results Functionality

//We keep the search results section hidden for now
$(".searchResults").hide();

//Click event that checks the data attribute of the search button clicked and returns the associated results from the spoonacular api
$(document.body).on("click", "button", function () {
    event.preventDefault();
    //The display that shows when the app is opened should be hidden
    $(".openingDisplay").hide();
    //And search results should be revealed in its place
    $(".searchResults").show();
    //Get the data attribute of the button
    $(this).attr("data-icon");
    console.log($(this).attr("data-icon"));
  //Set conditionals for each button type based on its data attribute that manipulate the search query to determine what results are returned
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
        searchQuery = "steak"
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
