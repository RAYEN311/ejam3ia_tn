var v = 0 ;
document.querySelector('.button').addEventListener('click',()=>{
     if(v == 0 ){
     document.getElementById('lowest').style.cssText = "transform:translateY(0vh);"
     v = 1 ;
    }else{
      document.getElementById('lowest').style.cssText = "transform:translateY(14vh);"
     v = 0 ;
     }
})

