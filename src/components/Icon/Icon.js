import React from 'react'
import { TouchableOpacity, Image } from 'react-native';

class Icon extends React.Component {

  renderImage() {
    return (
      <Image
        source={this.props.source}
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
    const { size, wrapperSize } = this.props;
    const padding = wrapperSize > size
      ? (wrapperSize - size) / 2
      : 0;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          width: size + (padding * 2),
          height: size + (padding * 2),
          padding: padding,
        }}
      >
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
