import { Component } from "react";
import { Col} from "react-bootstrap";
import { Link } from "react-router-dom";
class MyCard extends Component {

 render() {
    
 console.log(this.props.id);
    return(
        <Col>
           <Link to={'/details' + this.props.id}>
            <img className="img-fluid my-1 film" src={this.props.img} alt="errore " />
           </Link>
        </Col>
    )
 }
}

export default MyCard