

const container = document.querySelector("#container");

const newP = document.createElement("p");
newP.classList.add("newP");


const buttonP = document.querySelector(".addP");
buttonP.addEventListener('click', function (e) {
   e.target.style.background = "red";
   newP.textContent = "Hey I'm red paragraph!";
   container.appendChild(newP);
});


const newh3 = document.createElement("h3");
newh3.classList.add("newh3");
newh3.textContent = "Hey I'm Blue h3!";

const buttonh3 = document.querySelector(".addh3");
buttonh3.addEventListener('click', function (e) {
   e.target.style.background = "blue";
   container.appendChild(newh3);
});



const div = document.createElement("div");



const buttonDiv = document.querySelector(".adddiv"); 
console.log(buttonDiv);


buttonDiv.addEventListener("click", function(){
   div.classList.add("newDiv");
   

   div.style.border = "1px solid black";
   console.log(document.querySelectorAll('div'));

   newh3.textContent = "I'm in a div"
   newP.textContent = "Me too!";
   div.appendChild(newh3);
   div.appendChild(newP);
   
   container.appendChild(div);
   
})