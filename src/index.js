let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});



// getting the data from 
let toyCards=document.getElementById('toy-collection')
fetch(' http://localhost:3000/toys/')
.then( res => res.json())
.then(dataset=>(dataset.forEach(data => {
  let card = document.createElement('div')
  card.className = "card"
  let h1 = document.createElement('h3')
  h1.innerHTML = data.name
  let img = document.createElement('img')
  img.src = data.image
  img.className = "toy-avatar"
  let p = document.createElement('p')
  p.innerHTML = `${data.likes} Likes`
  let btn = document.createElement('button')
  btn.className='like-btn'
  btn.id = data.id
  btn.innerHTML='Like'
  toyCards.appendChild(card)
  console.log(toyCards)
  card.appendChild(h1)
  card.appendChild(img)
  card.appendChild(p)
  card.appendChild(btn)
  btn.addEventListener('click', ()=>{
    data.likes ++;
    increaseLike(data)
    console.log(data)

  })
})))

function increaseLike(data){
  let x =data.id
  fetch(`http://localhost:3000/toys/${x}`, {
    method : "PATCH",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(data)
  })
  .then()
}
// let btnUpdate=document.getElementById('add-toy-form')
let names=document.getElementById('name')
let image=document.getElementById('image')
let thename = names.value
let theImage = image.value
let btnUpdate=document.querySelector('.add-toy-form')


function addtoserver(){
  fetch('http://localhost:3000/toys',{
  method:'POST',
  headers:{
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({
    name : thename,
    image : theImage,
    likes : 0
  })
})
.then(res=>res.json())
.then(data=>data)
}
btnUpdate.addEventListener('click', ()=>(addtoserver().preventDefault()))