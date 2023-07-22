const express = require('express')
const homeroutes = express.Router()

homeroutes.get('/main_tn' , (req , res)=>{
    res.render('main_teams_page')
})
homeroutes.get('/search' , (req , res)=>{
    let search_pram = req.query.Search_query;
    res.render('search_page' ,{ word : search_pram.toLowerCase()})
})
// CLIENT REQUIRING THE INTRODUCTION PAGE

homeroutes.get('/',( req ,res )=>{
    res.render('introduction');
})


module.exports = homeroutes