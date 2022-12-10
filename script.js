const courses = [
    {
        name: "Angular",
        price: 2.7,
    },
    {
        name: "React",
        price: 2.2,
    },
    {
        name: "React Native",
        price: 2.5,
    },
    {
        name: "Swift",
        price: 3,
    },
];


const getCourses = function(){

const ul = document.querySelector(".list-group");
ul.innerHTML = "";

courses.forEach( course => {
   
   const li = document.createElement("li");
   li.classList.add("list-group-item");

   const text = document.createTextNode(course.name);
   li.appendChild(text);

   const span = document.createElement("span");
   span.classList.add("float-right");
   const spanPrice = document.createTextNode("$ " + course.price);
   span.appendChild(spanPrice);
   
   li.appendChild(span);
   ul.appendChild(li);

})
}

getCourses();

const asscendSort = document.querySelector(".btn-success");
const decendSort = document.querySelector(".btn-primary");

asscendSort.addEventListener( 'click', () => {
    courses.sort( (ele1, ele2) => (ele1.price - ele2.price));
    getCourses();
})

decendSort.addEventListener( 'click', () => {
    courses.sort( (ele1, ele2) => (ele2.price - ele1.price));
    getCourses();
})





