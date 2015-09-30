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

const SPRING_CONFIG = {
  tension: 2,
  friction: 3
};

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    backgroundColor: 'red'
  }
});

class FlyingSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY() // Animated API will take care of interpolating both X and Y
    };
  }

  componentDidMount() {
    Animated.spring(this.state.pan, {
      ...SPRING_CONFIG,
      toValue: {
        x: 0,
        y: height - SQUARE_DIMENSIONS
      }
    }).start();
  }

  getStyle() {
    return [
      styles.square, { // call square and a transform
        transform: this.state.pan.getTranslateTransform() // use helper to return the appropriate structure for the transform style
        // It returns [{translateX: xValue}, {translateY: yValue}]
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
