//selecting sidenav

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

// search functionality

var search = document.getElementById("search")
var productcontainer = document.getElementById("productcontainer")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    
    for(count=0;count<productlist.length;count=count+1)
    {
          

     if (productlist[count].textContent.toUpperCase().indexOf(enteredvalue) == -1 )
     {
        productlist[count].style.display="none"
     }
     else{
      productlist[count].style.display="block"
     }
    }
})

//checkbox functionality
// Function to filter products based on selected checkboxes
// Function to filter products based on selected checkboxes
function filterProducts() {
    // Get all checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Get all product elements
    var products = document.querySelectorAll('.productimage');

    // Store the initial display state of each product
    var initialDisplayStates = {};
    products.forEach(function (product) {
        initialDisplayStates[product.parentNode.id] = product.parentNode.style.display;
    });

    // Add event listener to each checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Create an array to store the checked checkbox values
            var checkedValues = [];

            // Loop through each checkbox to get checked values
            checkboxes.forEach(function (cb) {
                if (cb.checked) {
                    checkedValues.push(cb.nextSibling.textContent.toLowerCase().trim());
                }
            });

            // Loop through each product
            products.forEach(function (product) {
                var productName = product.nextElementSibling.textContent.toLowerCase();
                var shouldDisplay = checkedValues.some(function (value) {
                    return productName.includes(value);
                });

                // Display or hide the product based on checkbox status
                if (shouldDisplay) {
                    product.parentNode.style.display = 'block';
                } else {
                    product.parentNode.style.display = 'none';
                }
            });

            // Check if all checkboxes are unchecked
            var allUnchecked = Array.from(checkboxes).every(function (cb) {
                return !cb.checked;
            });

            // If all checkboxes are unchecked, revert to initial display state
            if (allUnchecked) {
                products.forEach(function (product) {
                    product.parentNode.style.display = initialDisplayStates[product.parentNode.id];
                });
            }
        });
    });
}

// Call the filterProducts function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', filterProducts);

//Sign up
var signup = document.getElementById("signup")
var closebutton = document.getElementById("closebutton")

closebutton.addEventListener("click",function(){
    signup.remove()
})





