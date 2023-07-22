var op = 1 ;


let buttons = Array.from(document.getElementsByClassName('instr'));
buttons.map( button =>{
button.addEventListener('click', (e)=>{    
console.log('cinst clicked')
document.getElementById('op_inst_p').style.display = "flex"
document.getElementById('op_inst_p').style.opacity = 1
document.getElementById('op_inst').innerText = e.target.innerText ;
op = 1 ;
setTimeout(() => {
    document.getElementById('op_inst_p').style.opacity = 0
}, 1500)
})})


setTimeout(()=>{

    // bot_of_added
    // added_bar
    document.getElementById('bot_of_added').style.top  = "9vh"
    document.getElementById('added_bar').style.height = 0 ;
    document.getElementById('vol_cha').style.display = "none" ;
    document.getElementById('main_inst').style.display = "none" ;
    document.getElementById('main_content').style.top = "15vh";
},30000)


