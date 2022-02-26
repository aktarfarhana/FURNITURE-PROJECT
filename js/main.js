

/*for search part*/
const trigger_search = document.querySelector(".trigger_search");
const input = document.querySelector(".input");

trigger_search.addEventListener("click", () =>{
    if(!input.classList.contains('input-open')){
        input.classList.add('input-open');
        trigger_search.innerHTML = "<i class='fas fa-times'></i>"; 
    }else{
        input.classList.remove('input-open');
        trigger_search.innerHTML = "<i class='fas fa-search'></i>"; 
    }
})


/*owl carousel for logo slider*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




/*scroll window */

    $(".to-top a").click(function(){
        $('html,body').animate({'scrollTop':0},2000);
        return false;

    });

    $(window).scroll(function(){

    if($(window).scrollTop() > 500){
      $('.to-top a').show(); 
    }else{
      $('.to-top a').hide();   
    } 
});


/*sticky navbar*/
 
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
 if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky");
 
 }else{
    navbar.classList.remove("sticky");
 }
}