// all review are stored here
let allReviews = [    
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star checked',
    star4:'fa fa-star checked',
    star5:'fa fa-star checked',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star',
    star4:'fa fa-star',
    star5:'fa fa-star',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star checked',
    star4:'fa fa-star checked',
    star5:'fa fa-star',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star checked',
    star4:'fa fa-star checked',
    star5:'fa fa-star checked',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star checked',
    star4:'fa fa-star checked',
    star5:'fa fa-star checked',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star checked',
    star4:'fa fa-star checked',
    star5:'fa fa-star checked',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
},
{
    name:"Naven navensen",
    foto:"./images/placeholder.jpg",
    occupation:"Virksomhedsejer",
    star1:'fa fa-star checked',
    star2:'fa fa-star checked',
    star3:'fa fa-star checked',
    star4:'fa fa-star checked',
    star5:'fa fa-star checked',
    discription:"Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder vaer konverteringerne steget mere end 150%."
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
        // review.starX is for star rating see readme for more info
        
        document.querySelector("#reviews").innerHTML+=`<div class="review">
        <div class="foto">
        <div class="foto-background"></div>
        <img src="${review.foto}">
        </div>
        <div class="review-background">
        <div class="stras">
        <span class="${review.star1}"></span>
        <span class="${review.star2}"></span>
        <span class="${review.star3}"></span>
        <span class="${review.star4}"></span>
        <span class="${review.star5}"></span>
        </div>
        <div class="name"><p>${review.name}</p></div>
        <div class="occupation"><p>${review.occupation}</p></div>
        <div class="discription"><p>${review.discription}</p></div>
        </div>
        </div>
        `
    }

}
// execute the append function using the data in the array allReviews
appendreviws(allReviews);
$(document).ready(function(){
    $('#reviews').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<img class="slick_prev" src="images/prev.png">',
        nextArrow:'<img class="slick_next" src="images/next.png">',
        draggable:false,
        responsive:[
            {
            breakpoint: 1042,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
                breakpoint: 740,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    draggable:true,
                }
            }  
        ]
      });
})