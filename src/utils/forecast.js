const request = require('request')

const forecast = (latitude,longitude, callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=042a07602cee79b202839a28f5e4def8&query="+ latitude+ "," + longitude+ "&units=f"
    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0]+". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out." )
        }
    })
}

module.exports = forecast