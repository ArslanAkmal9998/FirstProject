
const dataProducts=async()=>{
    const data=await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{return json})

    data.forEach(element => {
const heading =document.createElement('h2');
const image = document.createElement('img');
heading.innerHTML=element.title;
image.src=element.image;
image.classList.add("image")

document.body.appendChild(heading)
document.body.appendChild(image)
console.log("Arslan Akmal")

    });
}
