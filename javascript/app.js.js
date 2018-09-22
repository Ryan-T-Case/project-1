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
    $(document).on("click", ".1", function () {
        $("#recipeWindow").html(`
        <h2>Pizza</h2>
        `)
        alert("Clicked on");
    });
};

//Onclick event for buttons

//Chicken Button
$("#chicken").click(function () {
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
$("#pork").click(function () {
    //Clear the search results before adding anything
    $(".searchResults").empty();
    //Loop through the chicken results array and add recipe data each time
    for (i = 0; i < porkResults.length; i++) {
        $(".searchResults").append(`
        <h2 class="resultTitle">${porkResults[i].title}</h2>
        `)
    };
});


// google maps code below
// locations are hard coded in for this version. placed by coordinates
var locations = [
    ['Libbie Market', 37.5746, -77.5182],
    ['Kroger Willow Lawn', 37.5802, -77.4991],
    ['Aldi West Broad', 37.5958, -77.513137],
    ['Lidl West Broad', 37.579832, -77.490471],
    ['Nicks International Foods', 37.574379, -77.481691],
    ['Stellas Grocery - Monument Location', 37.56731, -77.486151],
    ['Ellwood Thompsons', 37.557447, -77.488621],
    ['Kroger Carytown', 37.554478, -77.488031],
    // ['Kroger Parham', 37.603089, -77.561696],
    // ['Kroger Short Pump', 37.652874, -77.625489],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],
    // ['grocery', 3333, 33333],

    // https://www.gps-coordinates.net/ is a lifesaver.
];
console.log(locations);
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(37.5759, -77.5410),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
//   console.log(map);
var infowindow = new google.maps.InfoWindow();
// console.log(infowindow);
var marker, i;
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i]
            [2]),
        map: map
    });
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
};

// end of google maps code