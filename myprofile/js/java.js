/*
alert("Welcome to my page") 
if(typeof(Storage) !== void(0)){
    alert("Web storage available!");
} else {
    alert("Web storage not available!... YOU WON'T HAVE ACCESS TO SOME FEATURES!");
}
*/
if(localStorage.clickcount) {
    localStorage.count = localStorage.clickcount;
    for(i = 1; i <= localStorage.count; i++){
        var txtis = document.createTextNode(localStorage.getItem(i));
        var element = document.createElement("li");
        element.append(txtis);
        var list = document.getElementById("myList");
        list.insertBefore(element, list.childNodes[0]);
    }
}

function homeClick() {
    document.getElementById("home").className += "active";
    document.getElementById("contact").className = document.getElementById("contact").className.replace( /(?:^|\s)active(?!\S)/g , '' );
    document.getElementById("about").className = document.getElementById("about").className.replace( /(?:^|\s)active(?!\S)/g , '' );
    var x = document.getElementsByClassName("homeClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "inline";
    }
    var x = document.getElementsByClassName("contactClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("aboutClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById("snappic").style.display = "none";
}
function contactClick() {
    document.getElementById("contact").className += "active";
    document.getElementById("home").className = document.getElementById("home").className.replace( /(?:^|\s)active(?!\S)/g , '' );
    document.getElementById("about").className = document.getElementById("about").className.replace( /(?:^|\s)active(?!\S)/g , '' );
    var x = document.getElementsByClassName("contactClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "inline";
    }
    var x = document.getElementsByClassName("homeClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("aboutClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById("snappic").style.display = "none";
}
function aboutClick() {
    document.getElementById("about").className += "active";
    document.getElementById("contact").className = document.getElementById("contact").className.replace( /(?:^|\s)active(?!\S)/g , '' );
    document.getElementById("home").className = document.getElementById("home").className.replace( /(?:^|\s)active(?!\S)/g , '' );
    var x = document.getElementsByClassName("aboutClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "inline";
    }
    var x = document.getElementsByClassName("contactClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("homeClass");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById("snappic").style.display = "none";
}

function contactInfo(){
    alert("My number is '9207363530'");
    document.getElementById("snappic").style.display = "none";
}

function snapClick() {
    document.getElementById("snappic").style.display = "inline-block";
}

function addtohtml() {
    /*var para = document.createElement("p");
    var node = document.createTextNode(document.getElementById("mytext").value);
    para.appendChild(node);

    var element = document.getElementById("entries");
    var child = document.getElementById("para");
    element.insertBefore(para,child); */

    var element = document.createElement("li");
    element.append(document.createTextNode(document.getElementById("mytext").value));

    var list = document.getElementById("myList");
    list.insertBefore(element, list.childNodes[0]);

    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    i = localStorage.clickcount;
    localStorage.setItem(i,document.getElementById("mytext").value);

    document.getElementById("mytext").value = "";
    document.getElementById("mytext").focus();
}

function clearlocal() {
    if(confirm("Are you sure, You want to clear the entries?")){
        localStorage.clear();
        location.reload();
    }
}
