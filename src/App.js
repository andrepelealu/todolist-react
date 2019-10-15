import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItem:'',
      items: []
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      //menambahkan array versi ES6, sama seperti concat
      items: [...this.state.items, this.state.todoItem],
      todoItem:''
    })
    // console.log('terpanggil')
  }

  handleChange = (event) => {
    this.setState({
      //target.value = mengambil value
      todoItem: event.target.value

    })
    // console.log(this.state.todoItem)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          //onchane = membaca perubahan
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>add</button>
          <List items={this.state.items}/>
        </form>
      </div>
    );
  }

}

export default App;
