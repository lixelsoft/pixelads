import React from 'react';
import PixelGrid from '../components/PixelGrid'
import './styles/Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <h2> React implementation </h2>
        <div className="pixel-grid">
          <PixelGrid size={10} />
        </div>
      </React.Fragment>
    )
  }
}