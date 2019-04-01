import React, { Component } from 'react';
import classes from './App.module.scss';

import Timelines from './components/Timelines/Timelines'
import timelineItems from './utility/timelineItems';
import timelineItemsGenerate from './utility/getRandomTimeline'

class App extends Component {
  state = { timeline: undefined }

  componentDidMount() {
    // show given json data
    this.setState({timeline: timelineItems})
  }

  timelineGenerate = () => {
    // generate our own random data
    const newItems = timelineItemsGenerate(100);
    this.setState({timeline: newItems})
  }

  render() {
    return (
      <div className={classes.App}>
        <nav className={classes.Navbar}><h1 onClick={this.timelineGenerate}>Generate TimelineTrello</h1></nav>
        {this.state.timeline ? <Timelines timelines={this.state.timeline}/> : <h1>Timeline to be loaded</h1>}        
      </div>
    );
  }
}

export default App;
