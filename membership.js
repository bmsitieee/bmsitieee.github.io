//billing and shading image(product) when selected
var count = 0;
var totalPrice1 = 690;
var totalPrice = 0;
var chapters =0;
var selectedImages = {
    "selectedImage1": false,
    "selectedImage2": false,
    "selectedImage3": false,
    "selectedImage4": false,
    "selectedImage5": false,
    "selectedImage6": false,
    "selectedImage7": false,
    "selectedImage8": false

};
function changeShade1() {
    var image = document.getElementById('selectedImage1');
    var selectButton1 = document.getElementById('selectButton1');
    image.classList.toggle('selected');
    var productPrice = 200;
    var productPrice1 = 200;//price1 can be higher than price but not the other way
    if (image.classList.contains('selected')) {
        totalPrice1 -= productPrice;
        chapters -= productPrice1;
        selectButton1.textContent = 'Select';
        selectButton1.classList.remove('selectedButton1');
        count--;
        selectedImages["selectedImage1"] = false;
    } else {
        totalPrice1 += productPrice;
        chapters += productPrice1;
        selectButton1.classList.add('selectedButton1');
        count++;
        selectButton1.textContent = 'Selected';
        selectedImages["selectedImage1"] = true;
    }
    updatePriceBox(totalPrice1);
}
function changeShade2() {
    var image = document.getElementById('selectedImage2');
    var selectButton1 = document.getElementById('selectButton2');
    image.classList.toggle('selected');
    var productPrice = 20;
    var productPrice1 = 20;
    if (image.classList.contains('selected')) {
        totalPrice1 -= productPrice1;
        chapters -= productPrice;
        selectButton2.textContent = 'Select';       
        selectButton2.classList.remove('selectedButton2');
        count--;
        selectedImages["selectedImage2"] = false;
    } else {
        selectButton2.classList.add('selectedButton2');
        chapters += productPrice1;
        count++;
        selectButton2.textContent = 'Selected';
        totalPrice1 += productPrice;
        selectedImages["selectedImage2"] = true;
    }
    updatePriceBox(totalPrice1);
}
function changeShade3() {
    var image = document.getElementById('selectedImage3');
    var selectButton1 = document.getElementById('selectButton3');
    image.classList.toggle('selected');
    var productPrice = 20;
    var productPrice1 = 20;
    if (image.classList.contains('selected')) {
        totalPrice1 -= productPrice;
        selectButton3.textContent = 'Select';
        selectButton3.classList.remove('selectedButton3');
        chapters -= productPrice1;
        count--;
        selectedImages["selectedImage3"] = false;
    } else {
        selectButton3.classList.add('selectedButton3');
        count++;
        selectButton3.textContent = 'Selected';
        totalPrice1 += productPrice;
        chapters += productPrice1;
        selectedImages["selectedImage3"] = true;
    }
    updatePriceBox(totalPrice1);
}
function changeShade4() {
    var image = document.getElementById('selectedImage4');
    var selectButton4 = document.getElementById('selectButton4');
    image.classList.toggle('selected');
    var productPrice = 130;
    var productPrice1 = 130;
    if (image.classList.contains('selected')) {
        totalPrice1 -= productPrice;
        chapters -= productPrice1;
        selectButton4.textContent = 'Select';
        selectButton4.classList.remove('selectedButton4');
        count--;
        selectedImages["selectedImage4"] = false;
    } else {
        selectButton4.classList.add('selectedButton4');
        selectButton4.textContent = 'Selected';
        count++;
        chapters += productPrice;
        totalPrice1 += productPrice1;
        selectedImages["selectedImage4"] = true;
    }
    updatePriceBox(totalPrice1);
}
function changeShade5() {
    var image = document.getElementById('selectedImage5');
    var selectButton5 = document.getElementById('selectButton5');
    image.classList.toggle('selected');
    var productPrice = 250;
    var productPrice1 = 250;
    if (image.classList.contains('selected')) {
        selectButton5.textContent = 'Select';
        selectButton5.classList.remove('selectedButton5');
        totalPrice1 -= productPrice;
        chapters -= productPrice1;
        count--;
        selectedImages["selectedImage5"] = false;
    } else {
        selectButton5.classList.add('selectedButton5');
        selectButton5.textContent = 'Selected';
        count++;
        chapters += productPrice1;
        totalPrice1 += productPrice;
        selectedImages["selectedImage5"] = true;
    }
    updatePriceBox(totalPrice1);
}
function changeShade6() {
    var image = document.getElementById('selectedImage6');
    var selectButton6 = document.getElementById('selectButton6');
    image.classList.toggle('selected');
    var productPrice = 20;
    var productPrice1 = 20;
    if (image.classList.contains('selected')) {
        selectButton6.textContent = 'Select';
        selectButton6.classList.remove('selectedButton6');
        totalPrice1 -= productPrice;
        chapters -= productPrice1;
        count--;
        selectedImages["selectedImage6"] = false;
    } else {
        selectButton6.classList.add('selectedButton6');
        selectButton6.textContent = 'Selected';
        count++;
        chapters += productPrice1;
        totalPrice1 += productPrice;
        selectedImages["selectedImage6"] = true;
    }
    updatePriceBox(totalPrice1);
}
function changeShade7() {
    var image = document.getElementById('selectedImage7');
    var selectButton7 = document.getElementById('selectButton7');
    image.classList.toggle('selected');
    var productPrice = 20;
    var productPrice1 = 20;
    if (image.classList.contains('selected')) {
        selectButton7.textContent = 'Select';
        selectButton7.classList.remove('selectedButton7');
        totalPrice1 -= productPrice;
        chapters -= productPrice1;
        count--;
        selectedImages["selectedImage7"] = false;
    } else {
        selectButton7.classList.add('selectedButton7');
        selectButton7.textContent = 'Selected';
        count++;
        chapters += productPrice1;
        totalPrice1 += productPrice;
        selectedImages["selectedImage7"] = true;
    }
    updatePriceBox(totalPrice1);
}

function changeShade8() {
    var image = document.getElementById('selectedImage8');
    var selectButton7 = document.getElementById('selectButton8');
    image.classList.toggle('selected');
    var productPrice = 240;
    var productPrice1 = 240;
    if (image.classList.contains('selected')) {
        selectButton8.textContent = 'Select';
        selectButton8.classList.remove('selectedButton8');
        totalPrice1 -= productPrice;
        chapters -= productPrice1;
        count--;
        selectedImages["selectedImage8"] = false;
    } else {
        selectButton8.classList.add('selectedButton8');
        selectButton8.textContent = 'Selected';
        count++;
        chapters += productPrice1;
        totalPrice1 += productPrice;
        selectedImages["selectedImage8"] = true;
    }
    updatePriceBox(totalPrice1);
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
function toggleInfo7() {
    var infoBox = document.getElementById('infoBox7');
    infoBox.classList.toggle('show');
}
function toggleInfo8() {
    var infoBox = document.getElementById('infoBox8');
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
document.addEventListener('click', function (event) {
    var infoBox = document.getElementById('infoBox7');
    if (!event.target.matches('img') && !event.target.closest('.info-container')) {
        infoBox.classList.remove('show');
    }
});
document.addEventListener('click', function (event) {
    var infoBox = document.getElementById('infoBox8');
    if (!event.target.matches('img') && !event.target.closest('.info-container')) {
        infoBox.classList.remove('show');
    }
});
function calculateTotalPrice(totalPrice) {
    var discount = 0;
    if (count >= 2)
        discount = 0.05;
    totalPrice=totalPrice1;//If no discount(no/one chapter selected)
    if (discount == 0.05) {
        totalPrice = chapters * 0.95;
        totalPrice = Math.ceil(totalPrice);//round off to higher
        totalPrice += 690;
    }
    var disc = document.getElementById('disc');
    disc.textContent = 'Total Price: INR. ' + totalPrice.toFixed(2);
}
function updatePriceBox(totalPrice1) {
    var priceBox = document.getElementById('priceBox');
    priceBox.textContent = 'Total Price: INR. ' + totalPrice1.toFixed(2); // Format to two decimal places
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
    const chapters = ["CS", "SPS", "ITS", "CIS", "RAS", "PES", "COMSOC","AESSS"];
    for (var i = 0; i < chapters.length; i++) {
        if (selectedImages["selectedImage" + (i+1)]) {
            formData.append("entry.1729285030", chapters[i]);
        }
    }

    // add the amount to the form data
    formData.append("entry.1347720293", totalPrice1);

    // Check for empty fields
    for (var value of formData.values()) {
        if (value === "") {
            alert("Please fill in all the fields");
            return;
        }
    }

    // // print the form data
    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Set the request method and URL
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9j9rrJspdVSeb0XsEEY8XRwKqdi2WwJu1vOZ-NDGlXQhQHA/formResponse");
    // Set the request header
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // Set the onload event handler
    xhr.onload = function () {
        // Use the response status and text
        console.log(`Status : ${xhr.status} ${xhr.statusText}`);
        console.log(`Body : \n${xhr.responseText}`);
    };
    // Send the POST request with the form data
    xhr.send(new URLSearchParams(formData).toString());

    alert("Your response has been submitted successfully");
    window.location.reload();
}