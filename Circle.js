const React = require('react-native');
const {
  View,
  Component,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Text
} = React;

class Circle extends Component {
  render() {
    return (
      <View style={styles.circle} />
    );
  }
}

styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red',
  }
});

module.exports = Circle;
