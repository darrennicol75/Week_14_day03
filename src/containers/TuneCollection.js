import React, { Component } from 'react';
import TuneSelector from '../components/TuneSelector';
import TuneDetail from '../components/TuneDetail';
import '../App.css';

class TuneCollection extends Component {
  constructor(props){
    super(props);
    this.state= {
      tunes: [],
      currentTune: null,
    };
    this.handleTuneSelected =
    this.handleTuneSelected.bind(this)
  }

  handleTuneSelected(index){
    const selectedTune = this.state.tunes[index];
    this.setState({currentTune: selectedTune});
  }

  componentDidMount(){
    console.log("Component Did Mount");
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(tunes => this.setState({tunes: tunes.results}))
    .catch(err => console.error(err));
  }

  render(){
    return (
      <div>
        <h2>Tune Collection</h2>
        <TuneSelector onTuneSelected={this.handleTuneSelected}
        tunes={this.state.currentTune}/>
        <TuneDetail tune={this.state.currentTune}/>
      </div>
    )};

}

export default TuneCollection;
