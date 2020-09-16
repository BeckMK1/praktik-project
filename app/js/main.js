// all review are stored here
let allReviews = [    
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
]
// error checking 
console.log(allReviews)
// appends all reviews to html
function appendreviws(reviews){
    for (let review of reviews){
        // error checking 
        console.log(review)
        // here is how the content is setup for the html, and added in the div whit the id review
        document.querySelector("#reviews").innerHTML+=`<article class="review">
        <div class="foto"><img src="${review.foto}"></div>
        <div class="review-background">
        <div class="stras"><p>${review.stras}</p></div>
        <div class="name"><p>${review.name}</p></div>
        <div class="occupation"><p>${review.occupation}</p></div>
        <div class="discription"><p>${review.discription}</p></div>
        </div>
        </article>
        `
    }

}
// execute the append function using the data in the array allReviews
appendreviws(allReviews);