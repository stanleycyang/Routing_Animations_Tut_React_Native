const React = require('react-native');
const Dimensions = require('Dimensions');

const {
  width,
  height
} = Dimensions.get('window');

const {
  StyleSheet,
  Component,
  View,
  Animated
} = React;

const SQUARE_DIMENSIONS = 30;

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    backgroundColor: 'blue'
  }
});

class FlyingSquare extend Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  getStyle() {
    return [
      styles.square, {
        transform: this.state.pan.getTranslateTransform()
      }
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={this.getStyle()} />
      </View>
    );
  }
}

module.exports = FlyingSquare;
