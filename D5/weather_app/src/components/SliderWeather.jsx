import { useEffect } from "react"
import { useState } from "react"
import { Col, Row } from "react-bootstrap"

const SliderWeather = (props) => {

    const [milano, setMilano] = useState(null)
    const [roma, setRoma] = useState(null)
    const [napoli, setNapoli] = useState(null)
    const [firenze, setFirenze] = useState(null)


    useEffect(() => {
        getWeather('Milano')
        getWeather('Rome')
        getWeather('Napoli')
        getWeather('Firenze')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getWeather = async (cityName) => {
        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName},&appid=2767e7954044d4bd64079128f9b1a2e8&lang=it`
            )
            console.log('RESPONSE: ', response)

            if (response.ok) {
                let weather = await response.json()
                console.log(weather);
                if (cityName === 'Milano') {
                    setMilano(weather)
                } if (cityName === 'Rome') {
                    setRoma(weather)
                } if (cityName === 'Napoli') {
                    setNapoli(weather)
                } if (cityName === 'Firenze') {
                    setFirenze(weather)
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
        <>
                <Row className='justify-content-center'>
                    <Col xs={4}
                        onClick={(e) => {
                            props.getWeather(e, 2, 'Milano');
                        }}
                        className='section'>
                        <img className='imgMeteo'
                            src={'http://openweathermap.org/img/wn/' + milano?.weather[0].icon + '@2x.png'} alt="icon" />
                        {milano?.name}
                        <span className="space">{(milano?.main.temp - 273.15).toFixed(0)}°</span>
                    </Col>
                    <Col xs={4}
                        onClick={(e) => {
                            props.getWeather(e, 2, 'Rome');
                        }}
                        className='section'>
                        <img className='imgMeteo'
                            src={'http://openweathermap.org/img/wn/' + roma?.weather[0].icon + '@2x.png'} alt="icon" />
                        {roma?.name}
                        <span className="space">{(roma?.main.temp - 273.15).toFixed(0)}°</span>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col xs={4}
                        onClick={(e) => {
                            props.getWeather(e, 2, 'Napoli');
                        }}
                        className='section'>
                        <img className='imgMeteo'
                            src={'http://openweathermap.org/img/wn/' + napoli?.weather[0].icon + '@2x.png'} alt="icon" />
                        {napoli?.name}
                        <span className="space">{(napoli?.main.temp - 273.15).toFixed(0)}°</span>
                    </Col>
                    <Col xs={4}
                        onClick={(e) => {
                            props.getWeather(e, 2, 'Firenze');
                        }}
                        className='section'>
                        <img className='imgMeteo'
                            src={'http://openweathermap.org/img/wn/' + firenze?.weather[0].icon + '@2x.png'} alt="icon" />
                        {firenze?.name}
                        <span className="space">{(firenze?.main.temp - 273.15).toFixed(0)}°</span>
                    </Col>
                </Row>

        </>
    )
}

export default SliderWeather
