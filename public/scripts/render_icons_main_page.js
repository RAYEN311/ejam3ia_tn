import OOP_teams_icon from './objects_notations/teams_list.json' assert {type:'json'};  // the json objects importing
for(var ct = 0 ; ct  < OOP_teams_icon.teams_devi_1_indexing.length ; ct++ ){
    function create_store_element(){
        let a = document.createElement('a');
        a.innerHTML = '<a href="/tn/'+ OOP_teams_icon.teams_devi_1_indexing[ct] +'/music_play" class="equipe"><div><img src="media/imgs/icons/'+ OOP_teams_icon.teams_devi_1_indexing[ct] +'.png" alt="AS marsa" ></div><p>'+ OOP_teams_icon.teams_devi_1_indexing[ct] +'</p></a>'
        return a ;
        }
    const to_render_content = document.getElementById("equipes")
    to_render_content.appendChild(create_store_element())
}
