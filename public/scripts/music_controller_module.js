
import track_list from '/teams_details' assert {type:'json'} ;



// until now it's just a static link's ('not connected with any database')

import teams_list from './objects_notations/teams_list.json' assert {type:'json'} ;

// Select all the elements in the HTML page
// and assign them to a variable

//note rayen brh : in the futur make sure do add the devison indexing to finding current team name ( in the next update inchaa allah )

let current_team_name = document.getElementById('current_team').innerText.toLowerCase() ;
console.log(current_team_name)
for(var is = 0; is< teams_list.teams_devi_1_indexing.length ; is++ ){
  if(current_team_name == teams_list.teams_devi_1_indexing[is]){
    var current_team_index = is;
  }
}
console.log('the current index of the team is ' + current_team_index + ' and his name is ' + teams_list.teams_devi_1_indexing[current_team_index]) 


let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 
// Specify globally used values
let track_index = 0;
let isPlaying = false;
var isPlayed = false;
let updateTimer;
 
let url = ()=>{
  return window.location.origin
}

// Create the audio element for the player
let curr_track = document.createElement('audio');
// Define the list of tracks that have to be played

var the_same_track ;



const play_path_elm_html = '<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>'
const pause_path_elm_html = '<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>'

function set_svg_play(string1){
  document.querySelector('.'+string1).outerHTML= '<path class="'+ string1 +'" id="'+ string1 +'" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>'
}
function set_svg_pause(string1){
  document.querySelector('.'+string1).outerHTML= '<path class="'+ string1 +'" id="'+ string1 +'" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>'
}

const storage_link = false ;

function loadTrack(track_index) {

  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
  // Load a new track
  console.log("in loading")
  if(storage_link){
    curr_track.src = track_list.tp[current_team_index][track_index].mp3_storage_link_no_host;
  }else{
    curr_track.src = url() + '/tn/'+ teams_list.teams_devi_1_indexing[current_team_index] +'/mp3/' + track_list.tp[current_team_index][track_index].path || track_list.tp[0].path ;
  }
  document.querySelector('.img_track').setAttribute('src' , url() +'/'+track_list.tp[current_team_index][track_index].image)
  curr_track.load();
  console.log("loaded")
  // document.getElementById("load_rounder").style.display = "none";
 
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", next);

  /////////////////////////////////////////////////////////////////////////////////////////
 
  // Apply a random background color
  random_bg_color();
}
 
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red1 = Math.floor(Math.random() * 256) ;
  let green1 = Math.floor(Math.random() * 256) ;
  let blue1 = Math.floor(Math.random() * 256);
  let red2 = Math.floor(Math.random() * 256) ;
  let green2 = Math.floor(Math.random() * 256) ;
  let blue2 = Math.floor(Math.random() * 256) ;
 
  // let red3 = Math.floor(red1 * 1.85);
  // let green3 = Math.floor(green1 * 1.85);
  // let blue3 = Math.floor(blue1 * 1.85);
  // let red4 = Math.floor(red2 * 1.85);
  // let green4 = Math.floor(green2 * 1.85);
  // let blue4 = Math.floor(blue2 * 1.85);
 
  // Construct a color with the given values
  let bgColor = "linear-gradient( 45deg , rgb(" + red1 + ", " + green1 + ", " + blue1 + ") , rgb(" + red2 + ", " + green2 + ", " + blue2 + "))";
  // let bgColor1 = "linear-gradient( 45deg , rgb(" + red3+ ", " + green3 + ", " + blue3 + ") , rgb(" + red4 + ", " + green4 + ", " + blue4+ "))";
  // Set the background to the new color
  document.querySelector('.border_top').style.background = bgColor;
  // let playboxs = Array.from(document.getElementsByClassName('playbox'))
  // playboxs.map(playbox =>{
  //   playbox.style.background = bgColor1 ;
  // })
}
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

document.getElementById('pause_play_butt').addEventListener('click',()=>{
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
})



var globale_track=[];
function playTrack() {
  // document.getElementById("load_rounder").style.display = "block";
  the_same_track = track_index;
  try{
    for( var go = 0 ; go < track_list.tp[current_team_index].length ;go++){
      if(window.track_name == track_list.tp[current_team_index][go].name){
          globale_track[go] = 1 ;
      }
      else{    
          globale_track[go] = 0;
          
      }
      }
    console.log(globale_track);
  }catch(err){
    console.log(err)
  }
  try{
      for(var og = 0 ; og < globale_track.length; og++ ){
          if(globale_track[og]){
            set_svg_pause(track_list.tp[current_team_index][og].name);
            window.location = '#' + track_list.tp[current_team_index][og].name ;
            var scroll = window.scrollY;
            console.log("scroll = " + scroll)
            window.scrollTo(0,scroll - window.screen.height / 3)
            document.getElementById("lowest").style.cssText = "transform:translateY(0vh)";
          }else{
            set_svg_play(track_list.tp[current_team_index][og].name);
          }
      }
  }catch(err){
    console.log(err)
  }
    // changing the status in the box and the control section 

    if(!isPlayed){
      loadTrack(track_index);
    }
    isPlayed = true ;
    // Play the loaded track
    curr_track.play();
    isPlaying = true;
    document.getElementById('play_butt').style.cssText = "display:none;"
    document.getElementById('pause_butt').style.cssText = "dispaly:block;"
    }
    
    function pauseTrack() {
      // Pause the loaded track
      curr_track.pause();
      isPlaying = false;
      document.getElementById('play_butt').style.cssText = "dispaly:block;"
      document.getElementById('pause_butt').style.cssText = "display:none;"

  }
  
document.getElementById('next').addEventListener('click',()=>{
  // Go back to the first track if the
next();
})

function next(){
  if (track_index < track_list.tp[current_team_index].length - 1)
  track_index += 1;
  else track_index = 0;
  window.track_name = track_list.tp[current_team_index][track_index].name
  
  // Load and play the new track
  loadTrack(track_index);
  document.getElementById('p_track').innerText = track_list.tp[current_team_index][track_index].name_art ; 
  playTrack();
  return globale_track ;
}
 
document.getElementById('prev').addEventListener('click',()=>{
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.tp[current_team_index].length - 1;
   
  window.track_name = track_list.tp[current_team_index][track_index].name

  // Load and play the new track  
  loadTrack(track_index);
  document.getElementById('p_track').innerText = track_list.tp[current_team_index][track_index].name_art ; 
  playTrack();
})

document.getElementById('set_vol').addEventListener('change',()=>{
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = document.getElementById('set_vol').value / 20;
})


document.getElementById('seek').addEventListener('change',()=>{
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  var seekto = curr_track.duration * (seek_slider.value / 100);
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
})
 
 
function seekUpdate() {
  let seekPosition = 0;
 
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
 
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
// render box part 
for(var cto = 0 ; cto  < track_list.tp[current_team_index].length ; cto++ ){
          function create_element(){
              let div1 = document.createElement('div');
              div1.innerHTML = '<div class="playbox"><div class="back" style="background:url('+ url() +'/'+[track_list.tp[current_team_index][cto].image]+');background-origin: border-box;background-size: cover;" class="back"></div><div class="play_bu" id="'+ track_list.tp[current_team_index][cto].name +'"><svg class="playh" viewBox="0 0 384 512" style="scale:1.3;"><path class="'+ track_list.tp[current_team_index][cto].name +'" id="'+ track_list.tp[current_team_index][cto].name +'" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></div><div class="details"><p>'+ track_list.tp[current_team_index][cto].name_art +'</p></div></div>'
              return div1 ;
            }
            // <div class="over_buttons_layers"><div class="over_button"></div></div>
          const to_render_content = document.getElementById("main_content")
          to_render_content.appendChild(create_element())
      }


// AWIT UNTIL CHANGING TRACK FROM BUTTONS IN THE BOXS (PALYBOXS)

let play_buttons = Array.from(document.getElementsByClassName('playh'));
play_buttons.map( button =>{
button.addEventListener('click', (e)=>{
    var req_track_name = e.target.id ;
    for(var yt = 0 ; yt < track_list.tp[current_team_index].length ; yt++ ){ 
    if(req_track_name == track_list.tp[current_team_index][yt].name){
      console.log(req_track_name)
      window.track_name = req_track_name ;
      track_index = yt;
      document.getElementById('p_track').innerText = track_list.tp[current_team_index][yt].name_art ; 
////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('bot_of_added').style.top  = "9vh"
document.getElementById('added_bar').style.height = 0 ;
document.getElementById('vol_cha').style.display = "none" ;
document.getElementById('main_inst').style.display = "none" ;
document.getElementById('main_content').style.top = "15vh";

////////////////////////////////////////////////////////////////////////////////////////////////
      if(the_same_track == track_index){
        try{
          set_svg_play(track_list.tp[current_team_index][track_index].name);
          pauseTrack()
          console.log("same_track=true")
          the_same_track = track_index - 1 ;
        }catch(err){
          console.log(err)
        }
      }else{
      loadTrack(yt); 
      the_same_track = track_index;
      playTrack();
      }
    }
    }
  })
})



// var key = window.KeyboardEvent.DOM_KEY_LOCATION_STANDARD.toString;
// console.log(key)