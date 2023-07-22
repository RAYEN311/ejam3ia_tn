// smooth scroll
// $('html, body').animate({
// scrollTop: $(hash).offset().top
// }, 700, function(){
// window.location.hash = hash;
// }); 
// search_box_show_hide

let search_button = document.getElementById('search_box_show_hide');
let search_bar = document.getElementById('search_bar');
let searsh_button = document.getElementById('submit')
var search_shown = false ;
search_button.addEventListener('click',()=>{
    if(!search_shown){
    search_bar.style.display = "block"
    search_shown = true ;  
    search_bar.style.height = "0"
    searsh_button.style.height = "0"
    setTimeout(()=>{
        search_bar.style.height = "6vh"
        searsh_button.style.height = "2.5rem"
    },10)
}      
    else if(search_shown){
    search_bar.style.display  = "none"
    search_shown = false ;
}
})

// pause and play button



