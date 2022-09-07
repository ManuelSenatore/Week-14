import { Component } from "react";
import { Container, Spinner } from "react-bootstrap";
import MyGallery from "./MyGallery";

 class MyMain extends Component {
    state = {
        key: 'c28e67a7',
        harryPotter: [],
        missionimpossible: [],
        fastAndFurious: [],
        isLoading: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.fetchSaga('harry', 'potter', 'harryPotter')
            this.fetchSaga('fast', 'and%20furious', 'fastAndFurious')
            this.fetchSaga('mission', 'impossible', 'missionimpossible')
        }, 1000)
    }
    async fetchSaga(first, second, complete) {
        try {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=${this.state.key}&s=${first}%20${second}`);
            if (response.ok) {
                let data = await response.json();
                this.setState({ isLoading: false})
                console.log(data.Search);
                this.setState({
                    [complete]: data.Search,
                });
            } else {
                console.log("qualcosa è andato storto");
                this.setState({ isLoading: true})
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Container className="main" fluid>
            {this.state.isLoading &&  <Container className="text-center align-items-center centro" style={{height: '100vh',}}>
            <Spinner   animation="border" variant="success" />
            </Container> }
                    <MyGallery n={0} title={'Harry Potter'} gallery={this.state.harryPotter} />
                    <MyGallery n={1} title={'Mission Impossible'} gallery={this.state.missionimpossible} />
                    <MyGallery n={2} title={'Fast And Furious'} gallery={this.state.fastAndFurious} />
                </Container>
        )
    }

 }

 export default MyMain;