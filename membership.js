function changeShade1() {
    var image = document.getElementById('selectedImage1');
    image.classList.toggle('selected');
}
function changeShade2() {
    var image = document.getElementById('selectedImage2');
    image.classList.toggle('selected');
}
function changeShade3() {
    var image = document.getElementById('selectedImage3');
    image.classList.toggle('selected');
}
function changeShade4() {
    var image = document.getElementById('selectedImage4');
    image.classList.toggle('selected');
}
function changeShade5() {
    var image = document.getElementById('selectedImage5');
    image.classList.toggle('selected');
}
function changeShade6() {
    var image = document.getElementById('selectedImage6');
    image.classList.toggle('selected');
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