
import { Card, Container } from 'react-bootstrap';

const WeatherCard = (props) => {
    console.log(props.meteo);
  return (
    <Container className='div'>
   <Card border="light" style={{ width: '30rem' }} className="card">
            <Card.Header className="text-center headerCard text-light"><h5>{props.meteo.name}</h5></Card.Header>
            <Card.Body className="text-center">
                <Card.Title className="text-center text-uppercase">{props.meteo.weather[0].description}</Card.Title>
                <div>
                     <img  className={`myImg `}
                           width="140"
                           height="140"
                           src={'http://openweathermap.org/img/wn/'+props.meteo.weather[0].icon+'@2x.png'} alt="icon" />
                    <h3 className="h3"> {(props.meteo.main.temp - 273.15).toFixed(0)}°</h3>
                    <span className="text-start">MIN:  {(props.meteo.main.temp_min - 273.15).toFixed(0)}°</span> - <span className="text-end">MAX:  {(props.meteo.main.temp_max - 273.15).toFixed(0)}°</span>
                    <br/>
                    <p>Umidità: {props.meteo.main.humidity}%</p>
                </div>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default WeatherCard
