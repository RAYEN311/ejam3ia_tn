import OOP_teams from './objects_notations/teams_search_tags.json' assert {type:'json'};  // the json objects importing
const keyword = document.getElementById('localword').innerText

// search algorithm solution propsed by Rayen BRH
// 1 - declare the objects for search keywords
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

main_search_function( OOP_teams  , keyword);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main_search_function( OOP_teams  , keyword){
// init all the result to 0
var compare_result = [];
//identifiy the input search keyword 
// the most inportant part
// compare this.keyword with the objects list
for(var i = 0 ; i < OOP_teams.teams_with_tags.length ; i++){
for(var d = 0 ; d < OOP_teams.teams_with_tags[i].length ; d++){                   
if(OOP_teams.teams_with_tags[i][d] == keyword){
compare_result[i] = true
document.getElementById('TSH').style.display = "none"
document.getElementById('not_found').style.display = "none"
}
else {
// compare_result[i] = false ; 
}
}
}
console.log(compare_result);
// for upgrading in the next version with coefficent !!!!!!!!!!!!!!!!!!!!!!!
// finall step is rendering the elements 
for(var j=0; j < compare_result.length ;j++){
if(compare_result[j] == true){
function creat_store_element(){
let a = document.createElement('a');
a.innerHTML = '<a href="../tn/'+ OOP_teams.teams_with_tags[j][1] +'/music_play" class="equipa" id = " '+ OOP_teams.teams_with_tags[j][1] +' "><div ><img src="../img/'+ OOP_teams.teams_with_tags[j][1] +'.png" alt="equipe"></div><p style="position:absolute; right : 50vw ; transform:translate(50%)"> '+ OOP_teams.teams_with_tags[j][0] +' </p></a>'
return a
}
const to_render_content = document.getElementById("equipes_searched")
to_render_content.appendChild(creat_store_element())
}
}
}