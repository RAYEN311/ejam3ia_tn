// theme changer section
// using the cookies to get the theme unforgivable


// first we need the init

let TN_CH = document.getElementById("T_CH");
var theme  = getCookie("choosed") || "0"  //default theme ;

// the switcher for every pages

TN_CH.addEventListener('click',()=>{
  switch(theme){
    case "0":
      setCookie("choosed" , 1 , 30);
      window.location = " "
      break ; 
    case "1":
      setCookie("choosed" , 0 , 30);
      window.location =  " "
      break ; 
        
}})


// the main function that change themes 


function theme_changer(){
if(theme == "0"){
    document.querySelector(":root").style.cssText = "--color_II : rgb(0, 0, 0) ; --color_I : white  ; --bgColor_II : white ; --bgColor_I :  rgb(0, 2, 16) ;" 
}
else if(theme == "1"){
    document.querySelector(":root").style.cssText = "--color_I : rgb(0, 0, 0) ; --color_II : white  ; --bgColor_I : white ; --bgColor_II :  rgb(0, 2, 16) ;" 
}
}
theme_changer();



// set cookie  
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
// get cookie

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// note you can add an additionnal theme if you want it s very easy 

// just add the theme colors then puted in the changer , select your page in the switcher and enjoy :|| # rayen brh ;

// the end of changer :) 