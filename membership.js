
//billing and shading image(product) when selected
var count=0;
var totalPrice = 1370;

function changeShade1() {
    var image = document.getElementById('selectedImage1');
    image.classList.toggle('selected');
    var productPrice = 392;
   
    if(image.classList.contains('selected'))
    {
        totalPrice += productPrice;
        
    }  else
    {   
        totalPrice -= productPrice;
    }

    updatePriceBox(totalPrice);
}
function changeShade2() {
    var image = document.getElementById('selectedImage2');
    image.classList.toggle('selected');

    var productPrice = 49;
   
    if(image.classList.contains('selected'))
    {
        totalPrice += productPrice;
        count++;
    }  else
    {   
        count--;
        totalPrice -= productPrice;
    }
    updatePriceBox(totalPrice);
}
function changeShade3() {
    var image = document.getElementById('selectedImage3');
    image.classList.toggle('selected'); 
    var productPrice = 49;
   
    if(image.classList.contains('selected'))
    {
        totalPrice += productPrice;
        count++;
    }  else
    {   
        count--;
        totalPrice -= productPrice;
    }

    updatePriceBox(totalPrice);
}
function changeShade4() {
    var image = document.getElementById('selectedImage4');
    image.classList.toggle('selected');
     var productPrice = 234;
   
    if(image.classList.contains('selected'))
    {
        totalPrice += productPrice;
        count++;
    }  else
    {   
        count--;
        totalPrice -= productPrice;
    }

    updatePriceBox(totalPrice);
}
function changeShade5() {
    var image = document.getElementById('selectedImage5');
    image.classList.toggle('selected');
    var productPrice = 490;
   
    if(image.classList.contains('selected'))
    {
        totalPrice += productPrice;
        count++;
    }  else
    {   
        count--;
        totalPrice -= productPrice;
    }

    updatePriceBox(totalPrice);
}
function changeShade6() {
    var image = document.getElementById('selectedImage6');
    image.classList.toggle('selected');


    var productPrice = 49;
   
    if(image.classList.contains('selected'))
    {
        totalPrice += productPrice;
        count++;
    }  else
    {   
        count--;
        totalPrice -= productPrice;
    }

    updatePriceBox(totalPrice);
}



function toggleInfo1() 
{
var infoBox = document.getElementById('infoBox1');
infoBox.classList.toggle('show');
}
function toggleInfo2() 
{
var infoBox = document.getElementById('infoBox2');
infoBox.classList.toggle('show');
}
function toggleInfo3() 
{
var infoBox = document.getElementById('infoBox3');
infoBox.classList.toggle('show');
}
function toggleInfo4() 
{
var infoBox = document.getElementById('infoBox4');
infoBox.classList.toggle('show');
}
function toggleInfo5() 
{
var infoBox = document.getElementById('infoBox5');
infoBox.classList.toggle('show');
}
function toggleInfo6() 
{
var infoBox = document.getElementById('infoBox6');
infoBox.classList.toggle('show');
}

// Close info box if clicked outside of it

document.addEventListener('click', function (event) {
var infoBox = document.getElementById('infoBox1');
if (!event.target.matches('img') && !event.target.closest('.info-container')) {
    infoBox.classList.remove('show');
}
});
document.addEventListener('click', function (event) {
var infoBox = document.getElementById('infoBox2');
if (!event.target.matches('img') && !event.target.closest('.info-container')) {
    infoBox.classList.remove('show');
}
});
document.addEventListener('click', function (event) {
var infoBox = document.getElementById('infoBox3');
if (!event.target.matches('img') && !event.target.closest('.info-container')) {
    infoBox.classList.remove('show');
}
});
document.addEventListener('click', function (event) {
var infoBox = document.getElementById('infoBox4');
if (!event.target.matches('img') && !event.target.closest('.info-container')) {
    infoBox.classList.remove('show');
}
});
document.addEventListener('click', function (event) {
var infoBox = document.getElementById('infoBox5');
if (!event.target.matches('img') && !event.target.closest('.info-container')) {
    infoBox.classList.remove('show');
}
});
document.addEventListener('click', function (event) {
var infoBox = document.getElementById('infoBox6');
if (!event.target.matches('img') && !event.target.closest('.info-container')) {
    infoBox.classList.remove('show');
}
});


function calculateTotalPrice(totalPrice) {
    var discount =0;
    if(count>=2)
    discount=0.05;
    if(discount==0.05)
   {
        totalPrice = totalPrice - (totalPrice * discount);
        totalPrice = Math.ceil(totalPrice);
        totalPrice = Math.max(totalPrice, 1370); // Ensure totalPrice doesn't go below zero
   }
   var disc = document.getElementById('disc');
   disc.textContent = 'Total Price: INR. ' + totalPrice.toFixed(2);
}

function updatePriceBox(totalPrice) {
    var priceBox = document.getElementById('priceBox');
    priceBox.textContent = 'Total Price: INR. ' + totalPrice.toFixed(2); // Format to two decimal places
}






// Google Forms Submit
function executeGoogleFormsSubmit() {
    // Build the Field Ids and Answers dictionary object
    // (replace with your Google Form Ids and Answers)
    var bodyValues = {
        "entry.306042534": document.getElementById("name").value,
        "entry.193107409": document.getElementById("emial").value,
        "entry.193107409": document.getElementById("dob").value,
        "entry.193107409": document.getElementById("year").value,
        "entry.193107409": document.getElementById("phone").value,
        "entry.193107409": document.getElementById("branch").value,
        "entry.193107409": document.getElementById("gender").value,
        "entry.193107409": document.getElementById("utr").value,
    };

    // check if there is any empty field
    for (var key in bodyValues) {
        if (bodyValues[key] === "") {
            alert("Please fill in all the fields");
            return;
        }
    }

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set the request method and URL
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSc9j9rrJspdVSeb0XsEEY8XRwKqdi2WwJu1vOZ-NDGlXQhQHA/viewform?usp=sf_link");

    // Set the request headers
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Convert the bodyValues object to a URL-encoded string
    var formData = Object.keys(bodyValues).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(bodyValues[key])).join("&");

    // Set the onload event handler
    xhr.onload = function () {
        // Use the response status and text
        console.log(`Status : ${xhr.status} ${xhr.statusText}`);
        console.log(`Body : \n${xhr.responseText}`);

    };

    // Send the POST request with the form data
    xhr.send(formData);

    // Reset the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("year").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("utr").value = "";

    alert("Your response has been submitted successfully");

}
