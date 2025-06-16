const images = document.getElementById("image")
const heading = document.getElementById("head1")
const paragraph = document.querySelector(".para2")
const front = document.querySelector(".front")
const back = document.querySelector(".back")
const supries = document.querySelector(".sup")
const reviews = [
    {
        img : "ce1.jpeg",
        name : "John Doe",
        text: "This product changed my life! Highly recommend it."
    },
    {
        img: "ce2.jpeg",
        name : "Taylor Swift",
        text: "Great customer service and fast delivery."

    },
    {
        img : "ce3.jpeg",
        name : "Alice Johnson",
        text: "I love this product, it's so easy to use."
    },
    {
        img : "ce4.jpeg",
        name : "Bob Smith",
        text: "I've been using this product for years and it's still the best."
    }

];
let i = 0;
function showReview(index) {
   const review = reviews[index];
   images.src = review.img;
   heading.textContent = `${review.text}`
   paragraph.textContent = `-${review.name}`

}
document.addEventListener("DOMContentLoaded",()=>{
    back.addEventListener("click",()=>{
     i = (i-1 + reviews.length)% reviews.length;
     showReview(i);
    })
    front.addEventListener("click",() =>{
      i = (i+1)%reviews.length;
      showReview(i);
     })
    supries/addEventListener("click",()=>{
       const i = Math.floor(Math.random()*reviews.length);
       showReview(i);
    });





});

