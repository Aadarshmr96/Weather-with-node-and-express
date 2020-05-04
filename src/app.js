const express=require('express')
const path=require('path')
const request=require('request')
const forecast=require('./utils/forecast.js')
const geo=require('./utils/geo.js')
const app=express()

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send("error:Enter a city")
    }
    //console.log(req.query)

        forecast(req.query.search,(error,forecastData) => {
            if(error){
                res.send({error})
            }
            res.send(
                {
                    forecastData
                }
            )

        })
    // })
    // res.send({city:'Mysore',Temperature:30,address:req.query.search})
})


app.listen(3000,()=>{
    console.log("The server is up on port:3000")
})