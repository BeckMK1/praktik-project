let allReviews = [
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i ffebruar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i ffebruar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i ffebruar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"virksomhedsejer",
    stars:5,
    discription:"det nye website blev lanceret i ffebruar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
]
console.log(allReviews)

function appendreviws(reviews){
    let htmltemplate ="";
    for (let review of reviews){
        console.log(review)

        document.querySelector("#reviews").innerHTML+=`<article class="review">
        <div class="foto"><img src="${review.foto}"></div>
        <div class="name">${review.name}</p></div>
        <div class="stras"><p>${review.stras}</p></div>
        <div class="occupation"><p>${review.occupation}</p></div>
        <div class="discription"><p>${review.discription}</p></div>
        </article>
        `
    }

}
appendreviws(allReviews);