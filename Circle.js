const React = require('react-native');
const Dimensions = require('Dimensions');

const {
  width,
  height
} = Dimensions.get('window');

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
      url: 'https://www.yahoo.com',
      w: 100,
      h: 100
    };
  }
  componentWillMount() {
    LayoutAnimation.spring();
  }
  _whenPressed() {
    console.log('button is pressed');
    LayoutAnimation.spring();
    this.setState({
      w: height,
      h: height
    });
  }
  render() {
    return (
      <TouchableOpacity onPress={this._whenPressed.bind(this)}>
        <View style={[styles.circle, {width: this.state.w, height: this.state.h}]}>
            <WebView url={this.state.url} />
        </View>
      </TouchableOpacity>
    );
  }
}

styles = StyleSheet.create({
  circle: {
    borderRadius: 100/2,
    overflow: 'hidden'
  }
});

module.exports = Circle;
