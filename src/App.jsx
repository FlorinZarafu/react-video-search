import React from "react";
import youtube, { baseParams } from "./apis/youtube";
// components
import SearchBar from "./components/search-bar/SearchBar-component";
import VideoList from "./components/VideoList/VideoList-Component";

class App extends React.Component {
  // setting state for the response api
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  // fetching api data
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
