let count = 0;

function colorchange(id)
{
    document.getElementById(id).style.backgroundColor ="hsl(25, 97%, 53%)";
    document.getElementById(id).style.color = "white";
    count = count + 1;
    document.querySelector(".out").innerHTML = "You selected " + count + " out of 5"; 
}



const submit = document.getElementById("submit");
const para = document.getElementById("para");
const how = document.querySelector("h2");
const rating = document.querySelector(".rating");
const out = document.querySelector(".out");
const addp = document.querySelector(".addpara");
const addhead = document.querySelector(".addhead");
const star =  document.querySelector(".star");
const addimg = document.querySelector(".addimg");

submit.addEventListener("click",function(){
    rating.remove();
    submit.remove();
    para.remove();
    how.remove();
    star.remove();
    out.style.display = "block";
    addp.style.display = "block";
    addhead.style.display = "block";
    addimg.style.display = "block";


})





