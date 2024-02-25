
//billing and shading image(product) when selected
var count = 0;
var totalPrice = 1370;
var selectedImages = {
    "selectedImage1": false,
    "selectedImage2": false,
    "selectedImage3": false,
    "selectedImage4": false,
    "selectedImage5": false,
    "selectedImage6": false
};

function changeShade1() {
    var image = document.getElementById('selectedImage1');
    image.classList.toggle('selected');
    var productPrice = 392;

    if (image.classList.contains('selected')) {
        totalPrice += productPrice;
        count++;
        selectedImages["selectedImage1"] = true;

    } else {
        totalPrice -= productPrice;
        count--;
        selectedImages["selectedImage1"] = false;
    }

    updatePriceBox(totalPrice);
}

function changeShade2() {
    var image = document.getElementById('selectedImage2');
    image.classList.toggle('selected');

    var productPrice = 49;

    if (image.classList.contains('selected')) {
        totalPrice += productPrice;
        count++;
        selectedImages["selectedImage2"] = true;
    } else {
        count--;
        totalPrice -= productPrice;
        selectedImages["selectedImage2"] = false;
    }
    updatePriceBox(totalPrice);
}
function changeShade3() {
    var image = document.getElementById('selectedImage3');
    image.classList.toggle('selected');
    var productPrice = 49;

    if (image.classList.contains('selected')) {
        totalPrice += productPrice;
        count++;
        selectedImages["selectedImage3"] = true;
    } else {
        count--;
        totalPrice -= productPrice;
        selectedImages["selectedImage3"] = false;
    }

    updatePriceBox(totalPrice);
}
function changeShade4() {
    var image = document.getElementById('selectedImage4');
    image.classList.toggle('selected');
    var productPrice = 234;

    if (image.classList.contains('selected')) {
        totalPrice += productPrice;
        count++;
        selectedImages["selectedImage4"] = true;
    } else {
        count--;
        totalPrice -= productPrice;
        selectedImages["selectedImage4"] = false;
    }

    updatePriceBox(totalPrice);
}
function changeShade5() {
    var image = document.getElementById('selectedImage5');
    image.classList.toggle('selected');
    var productPrice = 490;

    if (image.classList.contains('selected')) {
        totalPrice += productPrice;
        count++;
        selectedImages["selectedImage5"] = true;
    } else {
        count--;
        totalPrice -= productPrice;
        selectedImages["selectedImage5"] = false;
    }

    updatePriceBox(totalPrice);
}
function changeShade6() {
    var image = document.getElementById('selectedImage6');
    image.classList.toggle('selected');


    var productPrice = 49;

    if (image.classList.contains('selected')) {
        totalPrice += productPrice;
        count++;
        selectedImages["selectedImage6"] = true;
    } else {
        count--;
        totalPrice -= productPrice;
        selectedImages["selectedImage6"] = false;
    }

    updatePriceBox(totalPrice);
}



function toggleInfo1() {
    var infoBox = document.getElementById('infoBox1');
    infoBox.classList.toggle('show');
}
function toggleInfo2() {
    var infoBox = document.getElementById('infoBox2');
    infoBox.classList.toggle('show');
}
function toggleInfo3() {
    var infoBox = document.getElementById('infoBox3');
    infoBox.classList.toggle('show');
}
function toggleInfo4() {
    var infoBox = document.getElementById('infoBox4');
    infoBox.classList.toggle('show');
}
function toggleInfo5() {
    var infoBox = document.getElementById('infoBox5');
    infoBox.classList.toggle('show');
}
function toggleInfo6() {
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
    var discount = 0;
    if (count >= 2)
        discount = 0.05;
    if (discount == 0.05) {
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
    var formFields = {
        "entry.1884265043": "name",
        "entry.332621004": "email",
        "entry.117351985": "year",
        "entry.1619078457": "phone",
        "entry.1212348438": "branch",
        "entry.754680598": "gender",
        "entry.1770329536": "utr",
        "entry.635334495_year": "dob_year",
        "entry.635334495_month": "dob_month",
        "entry.635334495_day": "dob_day"
    };

    var formData = new FormData();
    var dob = document.getElementById("dob").value.split("-");

    // Fill in the form data
    for (var entryId in formFields) {
        var fieldId = formFields[entryId];
        var value = (fieldId.startsWith("dob_")) ? dob[fieldId.split("_")[1] === "year" ? 0 : fieldId.split("_")[1] === "month" ? 1 : 2] : document.getElementById(fieldId).value;
        formData.append(entryId, value);
    }

    const chapters = ["CS", "SPS", "ITS", "CIS", "RAS", "PES"];
    for (var i = 0; i < chapters.length; i++) {
        if (selectedImages["selectedImage" + i]) {
            formData.append("entry.1729285030", chapters[i]);
        }
    }

    // Check for empty fields
    for (var value of formData.values()) {
        if (value === "") {
            alert("Please fill in all the fields");
            return;
        }
    }

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set the request method and URL
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9j9rrJspdVSeb0XsEEY8XRwKqdi2WwJu1vOZ-NDGlXQhQHA/formResponse");

    // Set the onload event handler
    xhr.onload = function () {
        // Use the response status and text
        console.log(`Status : ${xhr.status} ${xhr.statusText}`);
        console.log(`Body : \n${xhr.responseText}`);
    };

    // Send the POST request with the form data
    xhr.send(new URLSearchParams(formData).toString());

    // Reset the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("year").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("branch").value = "";
    alert("Your response has been submitted successfully");
}
