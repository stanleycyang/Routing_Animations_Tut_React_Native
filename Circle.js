const React = require('react-native');
const {
  View,
  Component,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Text,
  WebView
} = React;

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.youtube.com/watch?v=27d138zhyZQ'
    };
  }
  render() {
    return (
      <View style={styles.circle}>
        <WebView url={this.state.url} />
      </View>
    );
  }
}

styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    overflow: 'hidden'
  }
});

module.exports = Circle;
