// requiring the framework express
const express = require('express')
const port = process.env.PORT || 2750
// process.env.NODE_ENV = 'production';
// console.log(process.env.NODE_ENV);
// console.log(process.argv[2]);
const app = express()

// biew engine used 

app.set('view engine' , 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({extended : true}))

// use router in our application (methode / best one)





///////////////////////////////  single part////////////////////////////////////////////





// CLIENT REQUIRING THE IMAGES FROM THE SERVER

app.get('/img/:img_name',(req ,res)=>{
    // res.render('introduction');
    let name = req.params.img_name ;
    res.sendFile( __dirname +'/public/media/imgs/icons/' + name)
})
app.get('/cover/:team/:img_name',(req ,res)=>{
    // res.render('introduction');
    let name = req.params.img_name ;
    let team = req.params.team;
    res.sendFile( __dirname +'/public/media/imgs/covers/'+team+'/' + name)
})
app.get('/tn/:team/mp3/:pic_name',(req ,res)=>{
    // res.render('introduction');
    let piece = req.params.team ;
    let name = req.params.pic_name ;
    res.sendFile( __dirname +'/public/media/mp3/'+ piece +'/' + name)
})
app.get('/favicon' , (req ,res)=>{
res.sendFile(__dirname +'/public/media/imgs/favicon.png')
})


app.get('/teams_details',(req, res)=>{
res.sendFile(__dirname + '/teams_details.json' )
})


/////////////////////////////////////////////////////////////////





const homeRouter = require('./routes/home')
app.use('/', homeRouter)

const teams = {
    teams_list : ["as_marsa","taraji","club_african","bizertin","etoile","sfaxi","esz","medenine","usm","tatouine","usbg","stade_tun","beja" ,"es_metlaoui" , "eosb" , "cs_chebba","as_soliman"]
}

app.get('/admin_rayen_brh_4545/:team',( req ,res , next )=>{
      for(var i = 0 ; i < teams.teams_list.length ; i++){
          if(req.params.team == teams.teams_list[i]){
              res.status(200).send(teams.teams_list[i] + ' admin page under develpoment')
          }
        }
    next();
});






const teams_route = require('./routes/teams')
app.use('/tn', teams_route)




app.get("*",(req,res)=>{
    if(res.status(404)){
        res.send('page not found in ejam3ia 404')
    }
    else if(res.status(400)){
        res.send('bad request 400')
    }
})

// listening the http request from the frontend
app.listen(port, () => console.log(`BRH Server listening on http://localhost:${port}/main_tn`))



