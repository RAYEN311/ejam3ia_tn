const express = require('express')
const songsroutes = express.Router()


// songsroutes.get('/marsa/music_play' , (req , res)=>{
//     res.render('song_play', {key : "as_marsa.png" , name : "marsa"})
// }) 
songsroutes.get('/:lak/music_play' , (req , res)=>{
    res.render('song_play', {key : req.params.lak + ".png" , name :  req.params.lak , origin_url : "/main_tn"} )
}) 


module.exports = songsroutes