import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import CommentArea from './components/CommentArea'
import { Component } from 'react'

class App extends Component {
  state = {
    selected: null,
    isActive: false
  }

  setIsActive = (value) => this.setState({ isActive: value })

  setSelected = (value) => this.setState({ selected: value })


  render() {

    console.log(this.state.selected);
  return (
    <div className="App">
      <header className="App-header">
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <BookList 
        books={fantasyBooks}
        asin ={this.state.selected}
        selected={this.state.selected}
        setSelected={this.setSelected}
        isActive={this.state.isActive}
        setIsActive={this.setIsActive}
        />
      </header>
      <div className="App-comment">
      <CommentArea 
      asin={this.state.selected} 
      />
      </div>
    </div>
  )
}
}

export default App
