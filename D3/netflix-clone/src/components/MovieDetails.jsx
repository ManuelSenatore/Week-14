import React from 'react'
import { useState, useEffect } from 'react'
import { Container, ListGroup, Spinner, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const [key] = useState('c28e67a7')
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)
    const params = useParams()
    

    useEffect(() => {
        setTimeout(() => {
            fetchSaga()
        }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetchSaga = async () => {
        try {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=${key}&i=${params.filmId} `);
            if (response.ok) {
                let film = await response.json();
                setData(film)
                console.log(film);
            } else {
                console.log("qualcosa è andato storto");
            }
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        { data ? (
      <Container className="flex">
        <Row className="justify-content-center my-3 align-center">
        <Col className="text-center" >
            <div className="text-light">
                <h2 className=" mt-3 mb-3">{data.Title}</h2>
                <img src={data.Poster} alt="" />
                <h3 className=" mt-3 mb-2">Released: {data.Released}</h3>
                <Button variant='dark' onClick={ () => {
                        setShow(!show)
                    } }>
                        {show ? "Close" : "More Information"}
                    </Button>
            </div>
                    {
                        show && (
                    <div>
                    <ListGroup variant="flush mt-3" >
                    <ListGroup.Item className=" lista text-light">{data.Runtime }</ListGroup.Item>
                    <ListGroup.Item className=" lista text-light">{data.Plot }</ListGroup.Item>
                    <ListGroup.Item className=" lista text-light">{data.Genre}</ListGroup.Item>
                    <ListGroup.Item className=" lista text-light">{data.Actors}</ListGroup.Item>
                    </ListGroup>
                    </div>
                        )
                    }
                
        </Col>
        </Row>
      </Container>
        ) : (
            <Container className="text-center align-items-center centro" style={{height: '100vh',}}>
                <Spinner   animation="border" variant="success" />
            </Container>
        )
}
    </div>
  )
}
