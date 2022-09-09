import { useEffect } from "react"
import { useState } from "react"
import { Col } from "react-bootstrap"

const SliderWeather = () => {

    const [milano, setMilano] = useState(null)
    const [roma, setRoma] = useState(null)
    const [napoli, setNapoli] = useState(null)


    useEffect(() => {
        getWeather('Milano')
        getWeather('Rome')
        getWeather('Napoli')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getWeather = async ( cityName) => {
        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName},&appid=2767e7954044d4bd64079128f9b1a2e8&lang=it`
            )
            console.log('RESPONSE: ', response)

            if (response.ok) {
                let weather = await response.json()
                console.log(weather);
                if(cityName === 'Milano'){
                    setMilano( weather)
                } if(cityName === 'Rome'){
                    setRoma( weather)
                } else {
                    setNapoli( weather)
                }
                console.log(milano);

            } else {
                console.log('error')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Col className= 'slider'>
    <div onClick={() => {
        
    }}
     className= 'section'>
    <img 
    width="80"
    height="80"
    src={'http://openweathermap.org/img/wn/'+milano?.weather[0].icon+'@2x.png'} alt="icon" />
    {milano?.name}
    <span className="space">{(milano?.main.temp - 273.15).toFixed(0)}°</span>
    </div>
    <div className= 'section'>
        <img 
    width="80"
    height="80"
    src={'http://openweathermap.org/img/wn/'+roma?.weather[0].icon+'@2x.png'} alt="icon" />
    {roma?.name}
    <span className="space">{(roma?.main.temp - 273.15).toFixed(0)}°</span>
    </div>
    <div className= 'section'>
       <img 
    width="80"
    height="80"
    src={'http://openweathermap.org/img/wn/'+napoli?.weather[0].icon+'@2x.png'} alt="icon" />
    {napoli?.name}
    <span className="space">{(napoli?.main.temp - 273.15).toFixed(0)}°</span>
    </div>

    </Col>
  )
}

export default SliderWeather
