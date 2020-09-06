//alert("Welcome to my page")
/*if(confirm("Ready to see my page?")){
    var x = document.getElementsByClassName("city");
    var y = document.getElementsByClassName("city2");
    var z = document.getElementsByClassName("city3");
    x.style.display = "inline";
    y.style.display = "none";
    z.style.display = "none";
} else {
    window.close();
}*/
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
    var para = document.createElement("p");
    var node = document.createTextNode(document.getElementById("mytext").value);
    para.appendChild(node);

    var element = document.getElementById("entries");
    var child = document.getElementById("para");
    element.insertBefore(para,child);
}