import React, {Component} from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setTitle(title) {
    this.setState({ title });
  }

  handleChange(e) {
    this.setTitle(e.target.value);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setTitle('');
  }

  render() {
    return (
      <div>
        <input placeholder="Insert new task." value={this.state.title} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
