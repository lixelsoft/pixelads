import React from 'react';
import { generateGrid } from './helper/grid-helpers';


import Grid from 'pixel-grid-react';
import './PixelGrid.css';

export default class PixelGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cells: generateGrid(this.props.size)
    }
    const methods = ['updatePixel', 'reset']
    methods.forEach(method => (
      this[method] = this[method].bind(this)
    ))
  }
  reset() {
    this.setState({
      cells: generateGrid(this.props.size)
    })
  }

  updatePixel(i) {
    // console.log('Update pixel', i);
    const state = this.state
    const color = 'rgb(51, 255, 0)'
    const updatedCell = Object.assign({}, state.cells[i], {
      color
    })
    const cells = [].concat(
      state.cells.slice(0, i),
      [updatedCell],
      state.cells.slice(i + 1)
    )
    this.setState(Object.assign({}, this.state, {
      cells
    }))
  }
  render() {
    const { size } = this.props
    return (
      <div>
        <Grid
          cells={this.state.cells}
          onCellEvent={this.updatePixel}
        />
      </div>
    )
  }
}