import React from 'react';
import reactCSS from 'reactcss'
import { TwitterPicker } from 'react-color'

export default class ColorPick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: this.props.color
    };

    this.handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    this.handleClose = () => {
      this.setState({ displayColorPicker: false })
    };

    this.handleChange = (color) => {
      this.setState({ color: color.hex })
    };
  }

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          backgroundColor: `${ this.state.color }`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
          <input type="hidden" value={ this.state.color } name="tag_group[bg_color]" />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <TwitterPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }
      </div>
    )
  }
}

