//Array for search results when chicken is clicked
var chickenResults = [{
    title: "Yummy Chicken",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
    image: "assets/images/placeholder/placeholder-1.jpg",
    aggregateLikes: 100,
    cookTime: "30 minutes"
}, {
    title: "Tasty Chicken",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
    image: "assets/images/placeholder/placeholder-2.jpg",
    aggregateLikes: 40,
    cookTime: "60 minutes"
}, {
    title: "Just Okay Chicken",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
    image: "assets/images/placeholder/placeholder-3.jpg",
    aggregateLikes: 10,
    cookTime: "25 minutes"
}];
//Array for search results when pork is clicked
var porkResults = [{
    title: "Yummy Pork",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
    image: "assets/images/placeholder/placeholder-4.jpg",
    aggregateLikes: 90,
    cookTime: "35 minutes"
}, {
    title: "Tasty Pork",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
    image: "assets/images/placeholder/placeholder-5.jpg",
    aggregateLikes: 45,
    cookTime: "65 minutes"
}, {
    title: "Just Okay Pork",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus tincidunt consequat. Ut eu justo eu lectus viverra rhoncus quis sed quam. Nam vitae pulvinar tellus. Donec lacinia et libero vel rhoncus. Maecenas fermentum eu purus ut egestas. Nullam feugiat, lacus id pretium mattis, mauris tortor maximus lorem, lacinia bibendum orci sapien ut dui. Nam at semper elit. Integer suscipit dolor libero, id mollis ex varius a. Morbi varius augue elit. Curabitur consectetur efficitur urna, in blandit turpis auctor in. Nam viverra dui a nunc venenatis fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at placerat lacus. Praesent blandit vel nunc luctus maximus.",
    image: "assets/images/placeholder/placeholder-6.jpg",
    aggregateLikes: 5,
    cookTime: "32 minutes"
}];

var number = 0;

//Function for adding selected recipe to window for review
function populateRecipeWindow() {
    $(document).on("click", ".1", function() {
        $("#recipeWindow").html(`
        <h2>Pizza</h2>
        `)
        alert("Clicked on");
    });
};

//Onclick event for buttons

//Chicken Button
$("#chicken").click(function() {
    //Clear the search results before adding anything
    $(".searchResults").empty();
    //Loop through the chicken results array and add recipe data each time
    for (i = 0; i < chickenResults.length; i++) {
        number++;
        $(".searchResults").append(`
        <h2 class="${number}">${chickenResults[i].title}</h2>
        `)
    };
    populateRecipeWindow();
});

//Pork Button
$("#pork").click(function() {
    //Clear the search results before adding anything
    $(".searchResults").empty();
    //Loop through the chicken results array and add recipe data each time
    for (i = 0; i < porkResults.length; i++) {
        $(".searchResults").append(`
        <h2 class="resultTitle">${porkResults[i].title}</h2>
        `)
    };
});
