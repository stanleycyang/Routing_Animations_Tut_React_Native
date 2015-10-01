const React = require('react-native');
const Dimensions = require('Dimensions');

const {
  width,
  height
} = Dimensions.get('window');

const {
  View,
  Component,
  Animated,
  StyleSheet,
  TouchOpacity,
  Text,
  WebView,
  Easing
} = React;

class AnimatedCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidingAnimationValue: new Animated.Value({
        width: 100,
        height: 100
      });
    };
  }
  componentDidMount() {
    const animationConfig = {
      duration: 2000, // millisecond
      delay: 1000,
      easing: Easing.in(Easing.ease)
    }
  }
  render() {
    
  }
}

