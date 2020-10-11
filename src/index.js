import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Please write an essay about your favorite DOM element.' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          essay:
          <textarea value={this.state.value} onChange={this.handleChange}>

          </textarea>
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }

}

ReactDOM.render(<NameForm />, document.getElementById('root'))