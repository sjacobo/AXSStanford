// Variables
var slideIndex = 1;
var timer = null;

//Calls main function
showDivs(slideIndex);

//Called when button is clicked
function plusDivs(n) {
    clearTimeout(timer);
    slideIndex += n;
    showDivs(slideIndex);
}

//Cycles through photos and displays the desired photo
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    var y = document.getElementsByClassName("slideText");
    
    //Edge cases
    if(n==undefined) { n = ++slideIndex; }
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = x.length; } 
    
    //Hides irrelevant images
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    
    //Displays relevant image
    x[slideIndex-1].style.display = "block"
    y[slideIndex-1].style.display = "block"
    
    //Timer
    timer = setTimeout(showDivs, 8000);
}