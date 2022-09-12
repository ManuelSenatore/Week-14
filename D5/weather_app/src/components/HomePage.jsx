import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SliderWeather from './SliderWeather'
import WeatherCard from './WeatherCard'

const HomePage = () => {
  

    const [ weatherArray, setWeatherArray] = useState(null)
    const [ cityName, setCityName] = useState('')
    // const [ countryName, setCountryName] = useState('')

    const getWeather = async (e, x, y) => {
      console.log('eseguofetch');
      if(x === 1){
        e.preventDefault()
      }
        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${y},&appid=2767e7954044d4bd64079128f9b1a2e8&lang=it`
            )
            console.log('RESPONSE: ', response)

            if (response.ok) {
                let weather = await response.json()
                setWeatherArray(weather)
                console.log(weather);

            } else {
                console.log('error')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <Container>
      <Row className='header'>
        <Col xs={9} className=" mx-auto my-3">
          <h1 className="text-center">Cerca Città</h1>
          <Form onSubmit={(e) => { 
              getWeather(e, 1, cityName)
          } }>
            <Form.Control
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              placeholder="Es: Milano"
            />
          </Form>
        </Col>
        <Col>
            <SliderWeather setCityName={setCityName} getWeather={getWeather} />
        </Col>
      </Row>
            {
                weatherArray !== null &&
                (<Row>
                    <WeatherCard meteo={weatherArray} />
                </Row>)
            }
    </Container>
  )
}

export default HomePage

// `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},it&APPID=c257347b25e5e8b03eb83e2d6b5ae1d1&lang=IT` fetch per il meteo della settimana

