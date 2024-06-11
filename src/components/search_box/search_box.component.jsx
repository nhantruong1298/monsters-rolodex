import { Component } from "react";
import "./search_box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder="search monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}


export default SearchBox;