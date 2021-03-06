import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  //   updating the input when user type in search bar
  onInputChange = (e) => this.setState({ term: e.target.value });
  // handle the submit for video
  onFormSubmit = (e) => {
    e.preventDefault();
    // make sure to call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
