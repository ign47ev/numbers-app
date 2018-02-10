import React from 'react'
import { TouchableOpacity, Image } from 'react-native';

class Icon extends React.Component {

  renderImage() {
    return (
      <Image
        source={this.props.source}
        defaultSource={this.props.source}
        style={{
          width: this.props.size,
          height: this.props.size,
          tintColor: this.props.tintColor,
          backgroundColor: this.props.backgroundColor
        }}
      />
    );
  }

  renderTouchableImage() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.renderImage()}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      !this.props.onPress
        ? this.renderImage()
        : this.renderTouchableImage()
    );
  }
}

export default Icon;
