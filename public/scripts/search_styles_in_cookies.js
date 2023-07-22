var theme  = getCookie("choosed")
if(theme == "0"){
    document.querySelector(":root").style.cssText = "--color_II : rgb(0, 0, 0) ; --color_I : white  ; --bgColor_II : white ; --bgColor_I :  rgb(0, 2, 16) ;" 
}
else if(theme == "1"){
    document.querySelector(":root").style.cssText = "--color_I : rgb(0, 0, 0) ; --color_II : white  ; --bgColor_I : white ; --bgColor_II :  rgb(0, 2, 16) ;" 
}
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