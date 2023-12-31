var random1 = Math.floor(Math.random()*6) + 1;

var src1 = "dice" + random1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute( "src" , src1);



var random2 = Math.floor(Math.random() * 6) + 1; 

var src2 = "dice" + random2 + ".png"; 


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", src2);

if(random1>random2){
    document.querySelector('h1').innerText= "win 1"
    document.body.style.backgroundColor = "green";
}
else if (random2>random1){
    document.querySelector('h1').innerText= "win 2";
    document.body.style.backgroundColor = "blue";
}
else {
    document.querySelector('h1').innerText= "draw !";
}