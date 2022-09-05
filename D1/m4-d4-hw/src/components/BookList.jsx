import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
  }

  setIsActive = (value) => this.props.setIsActive(value)
  setSelected = (value) => {
    this.props.setSelected(value)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} sm={6} xl={3} key={b.asin}>
                <SingleBook book={b} setSelected={this.setSelected} isActive={this.props.isActive} setIsActive={this.setIsActive} asin={this.props.asin} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}

export default BookList
